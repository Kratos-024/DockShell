import type { Request, Response } from "express";
import {
  userCreateSchema,
  userLoginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "../types/User.types";
import { prisma } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
import type { ZodError } from "zod";

const formatZodError = (error: ZodError) => {
  const details = error.issues.map((issue) => ({
    field: issue.path.join("."),
    message: issue.message,
  }));
  return {
    statusCode: 400,
    error: "Validation Failed",
    message: "The provided data is invalid.",
    details,
  };
};

export class UserController {
  constructor() {}

  private _generateAndSaveToken = async (user: {
    id: string;
    username: string;
    email: string;
  }): Promise<string> => {
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await prisma.authToken.create({
      data: {
        token,
        expiresAt,
        userId: user.id,
      },
    });

    return token;
  };
  public createUser = async (req: Request, res: Response) => {
    try {
      const validationResult = userCreateSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json(formatZodError(validationResult.error));
      }

      const { firstName, lastName, username, email, password } =
        validationResult.data;

      const existingUser = await prisma.user.findFirst({
        where: { OR: [{ username }, { email }] },
      });

      if (existingUser) {
        const field = existingUser.username === username ? "username" : "email";
        return res.status(409).json({
          statusCode: 409,
          error: "Conflict",
          message: `A user with this ${field} already exists.`,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          firstName,
          LastName: lastName,
          username,
          email,
          password: hashedPassword,
        },
        select: {
          id: true,
          firstName: true,
          LastName: true,
          username: true,
          email: true,
        },
      });

      const token = await this._generateAndSaveToken(user);

      return res.status(201).json({
        statusCode: 201,
        message: "Account created successfully!",
        data: { user, token },
      });
    } catch (error: any) {
      console.error("Error in createUser:", error);
      return res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
        message: "An unexpected error occurred on the server.",
      });
    }
  };
  public addImage = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.userId;

      if (!req.file) {
        return res.status(400).json({
          statusCode: 400,
          error: "No image file provided.",
        });
      }

      const imageUrl = req.file.path;

      await prisma.user.update({
        where: { id: userId },
        data: { profileImage: imageUrl },
      });

      return res.status(200).json({
        statusCode: 200,
        message: "Image uploaded successfully.",
        data: { imageUrl },
      });
    } catch (error: any) {
      console.error("Error in addImage:", error);
      return res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
        message: "An unexpected error occurred during image upload.",
      });
    }
  };
  public updateBio = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.userId;
      const { bio } = req.body;

      if (typeof bio !== "string") {
        return res.status(400).json({
          statusCode: 400,
          error: "Bio must be a string.",
        });
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { bio },
      });

      return res.status(200).json({
        statusCode: 200,
        message: "Bio updated successfully.",
        data: { bio: updatedUser.bio },
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  };
  public loginUser = async (req: Request, res: Response) => {
    try {
      const validationResult = userLoginSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json(formatZodError(validationResult.error));
      }

      const { username, password } = validationResult.data;
      const user = await prisma.user.findFirst({
        where: { username: username.toLowerCase() },
      });

      const isPasswordValid =
        user && (await bcrypt.compare(password, user.password));

      if (!user || !isPasswordValid) {
        return res.status(401).json({
          statusCode: 401,
          error: "Unauthorized",
          message: "Invalid username or password.",
        });
      }

      const token = await this._generateAndSaveToken(user);
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() },
      });

      const { password: _, ...userWithoutPassword } = user;

      return res.status(200).json({
        statusCode: 200,
        message: "Login successful!",
        data: {
          user: userWithoutPassword,
          token,
        },
      });
    } catch (error: any) {
      console.error("Error in loginUser:", error);
      return res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
        message: "An unexpected error occurred on the server.",
      });
    }
  };

  public logoutUser = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      const userId = req.user?.userId;

      if (!token || !userId) {
        return res.status(401).json({
          statusCode: 401,
          error: "Unauthorized",
          message: "No authentication token provided.",
        });
      }

      await prisma.authToken.deleteMany({
        where: {
          token: token,
          userId: userId,
        },
      });

      return res.status(200).json({
        statusCode: 200,
        message: "Logout successful.",
      });
    } catch (error: any) {
      console.error("Error in logoutUser:", error);
      return res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
        message: "An unexpected error occurred during logout.",
      });
    }
  };

  public forgotPassword = async (req: Request, res: Response) => {
    try {
      const forgotData = forgotPasswordSchema.safeParse(req.body);
      if (!forgotData.success) {
        return res.status(400).json({
          statusCode: 400,
          error: forgotData.error,
        });
      }

      const { email } = forgotData.data;

      const user = await prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        return res.status(200).json({
          statusCode: 200,
          message: "If the email exists, a password reset link has been sent",
        });
      }

      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpiry = new Date(Date.now() + 3600000);

      await prisma.user.update({
        where: { id: user.id },
        data: {
          resetToken,
          resetTokenExpiry,
        },
      });
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const resetUrl = `${
        process.env.FRONTEND_URL || "http://localhost:3000"
      }/reset-password?token=${resetToken}`;

      await transporter.sendMail({
        from: process.env.FROM_EMAIL || "noreply@dockshell.com",
        to: email,
        subject: "Password Reset Request - DockShell",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Password Reset Request</h2>
            <p>Hello ${user.firstName},</p>
            <p>You requested a password reset for your DockShell account. Click the link below to reset your password:</p>
            <a href="${resetUrl}" style="display: inline-block; padding: 10px 20px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
            <p>This link will expire in 1 hour.</p>
            <p>If you didn't request this, please ignore this email.</p>
            <p>Best regards,<br>DockShell Team</p>
          </div>
        `,
      });

      return res.status(200).json({
        statusCode: 200,
        message: "If the email exists, a password reset link has been sent",
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  };

  public resetPassword = async (req: Request, res: Response) => {
    try {
      const resetData = resetPasswordSchema.safeParse(req.body);
      if (!resetData.success) {
        return res.status(400).json({
          statusCode: 400,
          error: resetData.error,
        });
      }

      const { token, newPassword } = resetData.data;

      const user = await prisma.user.findFirst({
        where: {
          resetToken: token,
          resetTokenExpiry: {
            gte: new Date(),
          },
        },
      });

      if (!user) {
        return res.status(400).json({
          statusCode: 400,
          error: "Invalid or expired reset token",
        });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await prisma.user.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
          resetToken: null,
          resetTokenExpiry: null,
        },
      });

      return res.status(200).json({
        statusCode: 200,
        message: "Password reset successful",
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  };

  public changeUsername = async (req: Request, res: Response) => {
    try {
      const { newUsername } = req.body;
      const userId = req.user?.userId;

      if (!newUsername || typeof newUsername !== "string") {
        return res.status(400).json({
          statusCode: 400,
          error: "New username is required",
        });
      }

      if (newUsername.length < 3 || newUsername.length > 20) {
        return res.status(400).json({
          statusCode: 400,
          error: "Username must be between 3 and 20 characters",
        });
      }

      const existingUser = await prisma.user.findFirst({
        where: {
          username: newUsername,
          NOT: { id: userId },
        },
      });

      if (existingUser) {
        return res.status(409).json({
          statusCode: 409,
          error: "Username already exists",
        });
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { username: newUsername },
        select: {
          id: true,
          firstName: true,
          LastName: true,
          username: true,
          email: true,
          updatedAt: true,
        },
      });

      return res.status(200).json({
        statusCode: 200,
        message: "Username updated successfully",
        data: updatedUser,
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  };

  public validateSession = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.userId;

      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          firstName: true,
          LastName: true,
          username: true,
          email: true,
        },
      });

      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          error: "User not found.",
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: "Session is valid.",
        data: { user },
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error during session validation.",
      });
    }
  };
}

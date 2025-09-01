import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../db"; // Import your Prisma client

// This declaration extends the Express Request interface globally
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        username: string;
        email: string;
      };
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        statusCode: 401,
        error: "Access denied. No token provided.",
      });
    }

    // 1. Verify the JWT signature and structure
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    ) as {
      userId: string;
      username: string;
      email: string;
      iat: number;
      exp: number;
    };

    // 2. Check if the token exists in the database and is not expired
    const authToken = await prisma.authToken.findUnique({
      where: {
        token: token,
      },
    });

    if (!authToken || authToken.expiresAt < new Date()) {
      return res.status(401).json({
        statusCode: 401,
        error: "Invalid or expired token. Please log in again.",
      });
    }

    // 3. Attach user payload to the request object
    req.user = {
      userId: decoded.userId,
      username: decoded.username,
      email: decoded.email,
    };

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // This will catch errors from jwt.verify (e.g., malformed token, invalid signature)
    return res.status(401).json({
      statusCode: 401,
      error: "Authentication failed: Invalid token.",
    });
  }
};

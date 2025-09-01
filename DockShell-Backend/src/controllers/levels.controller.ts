import type { Request, Response } from "express";
import {
  ctfCreateSchema,
  ctflevelCreateSchema,
  saveLevelSchema,
} from "../types/Levels.type";
import { prisma } from "../db";
export const sendSuccess = (
  res: Response,
  data: unknown,
  message = "Success",
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res: Response,
  errorMessage: string,
  statusCode = 500,
  errorDetails?: unknown
) => {
  return res.status(statusCode).json({
    success: false,
    error: errorMessage,
    details: errorDetails, // Optional: for sending validation errors
  });
};
class LevelController {
  public async createLevel(req: Request, res: Response) {
    try {
      const levelData = ctflevelCreateSchema.safeParse(req.body);
      if (!levelData.success) {
        return res.status(400).json({
          statusCode: 400,
          error: levelData.error,
        });
      }

      const {
        uniqueId,
        goal,
        ctfName,
        description,
        commands,
        hints,
        files,
        links,
        expectedOutput,
        difficulty,
        category,
        estimatedTime,
        createdAt,
        password,
        levelNo,
      } = levelData.data;

      const levelExisted = await prisma.ctfLevels.findFirst({
        where: { uniqueId },
      });
      if (levelExisted) {
        return res.status(409).json({
          statusCode: 409,
          error: "Level with this uniqueId already exists",
        });
      }

      const level = await prisma.ctfLevels.create({
        data: {
          password,
          uniqueId,
          goal,
          ctfName,
          levelNo,
          description,
          commands: commands,
          hints: hints,
          files: files ? JSON.stringify(files) : null,
          links: links || [],
          expectedOutput: expectedOutput || null,
          difficulty,
          category,
          estimatedTime: `${estimatedTime}`,
          createdAt,
        },
      });

      return res.status(201).json({
        statusCode: 201,
        message: "Level created successfully",
        data: level,
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  }

  public async getLevel(req: Request, res: Response) {
    try {
      const { uniqueId } = req.params;
      const ctfName = uniqueId?.split("-")[0];

      const ctfTotalLevels = await prisma.cTFS.findUnique({
        where: { ctfName: ctfName },
        select: {
          totalLevels: true,
        },
      });
      const level = await prisma.ctfLevels.findUnique({
        where: { uniqueId },
        select: {
          password: true,
          levelNo: true,
          ctfName: true,
          id: true,
          uniqueId: true,
          goal: true,
          links: true,
          description: true,
          commands: true,
          hints: true,
          files: true,
          expectedOutput: true,
          difficulty: true,
          category: true,
          estimatedTime: true,
          createdAt: true,
          updatedAt: true,
          credentials: true,
        },
      });
      if (!level) {
        return res.status(404).json({
          statusCode: 404,
          error: "Level not found",
        });
      }
      return res.status(200).json({
        statusCode: 200,
        data: { level: level, ctfTotalLevels },
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  }

  public async getAllLevels(req: Request, res: Response) {
    try {
      const levels = await prisma.ctfLevels.findMany();

      return res.status(200).json({
        statusCode: 200,
        count: levels.length,
        data: levels,
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  }

  public async deleteLevel(req: Request, res: Response) {
    try {
      const { uniqueId } = req.params;

      const level = await prisma.ctfLevels.findUnique({ where: { uniqueId } });
      if (!level) {
        return res.status(404).json({
          statusCode: 404,
          error: "Level not found",
        });
      }

      await prisma.ctfLevels.delete({ where: { uniqueId } });

      return res.status(200).json({
        statusCode: 200,
        message: "Level deleted successfully",
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  }
  public saveLevelFlag = async (req: Request, res: Response) => {
    try {
      const user = req.user;
      if (!user?.userId || !user?.username) {
        return sendError(res, "User not authenticated. Please log in.", 401);
      }

      const validationResult = saveLevelSchema.safeParse(req.body);
      if (!validationResult.success) {
        return sendError(
          res,
          "Invalid request data.",
          400,
          validationResult.error.format()
        );
      }

      const { ctfName, levelNo, password } = validationResult.data;

      const level = await prisma.ctfLevels.findFirst({
        where: { uniqueId: `${ctfName.toLowerCase()}-level${levelNo}` },
      });

      if (!level || level.password.trim() !== password.trim()) {
        return sendError(res, "Incorrect flag for this level.", 403);
      }

      const existingClaim = await prisma.ctfClaimed.findFirst({
        where: {
          levelNo,
          ctfprogress: {
            username: user.username,
            ctfName,
          },
        },
      });

      if (existingClaim) {
        return sendError(res, "You have already claimed this level.", 409);
      }

      const result = await prisma.$transaction(async (tx) => {
        const ctfProgress = await tx.ctfProgress.upsert({
          where: { username_ctfName: { username: user.username, ctfName } },
          update: {},
          create: { username: user.username, ctfName },
        });

        // Create the claimed level
        const newClaimedLevel = await tx.ctfClaimed.create({
          data: {
            levelNo,
            password,
            ctfprogress: { connect: { id: ctfProgress.id } },
          },
        });

        // Check if user already has THIS specific skill category
        const existingSkill = await tx.skills.findUnique({
          where: {
            username_category: {
              username: user.username,
              category: level.category,
            },
          },
        });

        const skillUniqueId = `${user.username}-${level.category}`;

        if (!existingSkill) {
          // Create new skill only if this category doesn't exist for this user
          await tx.skills.create({
            data: {
              category: level.category,
              uniqueId: skillUniqueId,
              username: user.username,
            },
          });
        }
        // If skill already exists for this category, do nothing (don't overwrite)

        return newClaimedLevel;
      });

      return sendSuccess(
        res,
        result,
        `Progress for ${ctfName} Level ${levelNo} saved successfully. Skills updated!`,
        201
      );
    } catch (error: any) {
      console.error("Error saving level progress:", error);
      return sendError(res, "An unexpected error occurred on the server.", 500);
    }
  };
  public getAllUserProgress = async (req: Request, res: Response) => {
    try {
      const user = req.user;
      if (!user?.userId) {
        return res
          .status(401)
          .json({ success: false, error: "User not authenticated." });
      }

      const allProgress = await prisma.ctfProgress.findMany({
        where: { username: user.username },
        include: {
          ctfClaimeds: {},
        },
      });
      const skills = await prisma.user.findUnique({
        where: {
          username: user.username,
        },
        select: {
          username: true,
          profileImage: true,
          bio: true,
          skills: true,
        },
      });
      if (!allProgress.length) {
        return res.status(404).json({
          success: true,
          message: "No progress found for this user.",
        });
      }

      return res
        .status(200)
        .json({ success: true, data: { allProgress, skills } });
    } catch (error: any) {
      console.error("Error fetching user progress:", error);
      return res
        .status(500)
        .json({ success: false, error: "Internal Server Error" });
    }
  };

  // public getLevelProgress = async (req: Request, res: Response) => {
  //   try {
  //     const userId = req.user?.userId;
  //     if (!userId) {
  //       return res.status(401).json({ error: "User not authenticated." });
  //     }
  //     const { ctfName } = req.params;
  //     const levelNo = parseInt(req.params.levelNo, 10);

  //     if (!ctfName || isNaN(levelNo)) {
  //       return res
  //         .status(400)
  //         .json({ error: "Invalid ctfName or levelNo parameter." });
  //     }

  //     const levelProgress = await prisma.ctfClaimed.findFirst({
  //       where: {
  //         levelNo: levelNo,
  //         ctfProgress: {
  //           userId: userId,
  //           ctfName: ctfName,
  //         },
  //       },
  //     });

  //     if (!levelProgress) {
  //       return res.status(404).json({
  //         message: `Progress for ${ctfName} Level ${levelNo} not found.`,
  //       });
  //     }

  //     return res.status(200).json({ data: levelProgress });
  //   } catch (error: any) {
  //     console.error("Error fetching level progress:", error);
  //     return res.status(500).json({ error: "Internal Server Error" });
  //   }
  // };
  public async createOrUpdateCtf(req: Request, res: Response) {
    try {
      const ctfData = ctfCreateSchema.safeParse(req.body);
      if (!ctfData.success) {
        return res.status(400).json({
          statusCode: 400,
          error: ctfData.error,
        });
      }

      const {
        totalLevels,
        totalPlayers,
        imgSrc,
        ctfName,
        difficulty,
        title,
        subHeader,
        topic,
      } = ctfData.data;

      const ctf = await prisma.cTFS.upsert({
        where: { ctfName }, // Unique field to find the record
        update: {
          topic,
          title,
          subHeader,
          totalLevels,
          totalPlayers,
          imgSrc,
          difficulty,
        },
        create: {
          ctfName,
          topic,
          title,
          subHeader,
          totalLevels,
          totalPlayers,
          imgSrc,
          difficulty,
        },
      });

      return res.status(200).json({
        statusCode: 200,
        message: "CTF updated/created successfully",
        data: ctf,
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  }

  public async getCtf(req: Request, res: Response) {
    try {
      const CTFs = await prisma.cTFS.findMany({});

      return res.status(200).json({
        statusCode: 200,
        message: "CTFs get successfully",
        data: CTFs,
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  }
  public async updateLevel(req: Request, res: Response) {
    try {
      const { uniqueId } = req.params;
      const levelData = ctflevelCreateSchema.partial().safeParse(req.body);

      if (!levelData.success) {
        return res.status(400).json({
          statusCode: 400,
          error: levelData.error.format(),
        });
      }

      const levelExisted = await prisma.ctfLevels.findUnique({
        where: { uniqueId },
      });

      if (!levelExisted) {
        return res.status(404).json({
          statusCode: 404,
          error: "Level with this uniqueId not found",
        });
      }

      const { credentials, ...otherLevelData } = levelData.data;
      const dataToUpdate: any = { ...otherLevelData };
      console.log(credentials);
      if (dataToUpdate.files) {
        dataToUpdate.files = JSON.stringify(dataToUpdate.files);
      }
      if (dataToUpdate.estimatedTime) {
        dataToUpdate.estimatedTime = `${dataToUpdate.estimatedTime}`;
      }

      if (credentials) {
        dataToUpdate.credentials = {
          upsert: {
            where: { ctfLevelUniqueId: uniqueId },
            create: credentials,
            update: credentials,
          },
        };
      } else if (credentials === null) {
        dataToUpdate.credentials = {
          delete: true,
        };
      }

      const updatedLevel = await prisma.ctfLevels.update({
        where: { uniqueId },
        data: dataToUpdate,
        include: {
          credentials: true,
        },
      });

      return res.status(200).json({
        statusCode: 200,
        message: "Level updated successfully",
        data: updatedLevel,
      });
    } catch (error: any) {
      // if (
      //   error instanceof Prisma.PrismaClientKnownRequestError &&
      //   error.code === "P2025"
      // ) {
      //   return res.status(404).json({
      //     statusCode: 404,
      //     error: "Credential to delete was not found.",
      //   });
      // }
      return res.status(500).json({
        statusCode: 500,
        error: error.message || "Internal Server Error",
      });
    }
  }
}
export { LevelController };

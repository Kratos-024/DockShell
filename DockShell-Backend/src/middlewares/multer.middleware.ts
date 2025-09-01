import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage, type Options } from "multer-storage-cloudinary";
import multer from "multer";
import type { Request } from "express";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryParams extends Options {
  params: {
    folder: string;
    format: (req: Request, file: Express.Multer.File) => string;
    public_id: (req: Request, file: Express.Multer.File) => string;
  };
}

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user-profiles",
    format: (req: Request, file: Express.Multer.File) => "png", // supports promises as well
    public_id: (req: Request, file: Express.Multer.File) => {
      const userId = req.user?.userId || "default";
      return `${userId}-${Date.now()}`;
    },
  },
} as CloudinaryParams);

export const upload = multer({ storage: storage });

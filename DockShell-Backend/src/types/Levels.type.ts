import { z } from "zod";

const ctflevelCreateSchema = z.object({
  levelNo: z.number().nonnegative(),
  password: z.string(),
  uniqueId: z.string(), // if frostling and level0 then frostling-level0
  goal: z.string().min(10, "Goal must be descriptive (min 10 chars)"),
  description: z.string().min(20, "Description must explain the scenario"),
  commands: z.array(z.string().min(1, "Must specify useful commands")),
  hints: z.array(z.string()).optional(),
  links: z.array(z.string()).optional(),
  files: z
    .array(
      z.object({
        filename: z.string(),
        content: z.string(),
        permissions: z
          .string()
          .regex(/^[0-7]{3}$/, "Must be octal permissions like 644"),
        hidden: z.boolean().default(false),
      })
    )
    .optional(),
  ctfName: z.string(),
  expectedOutput: z.string().optional().optional(),
  difficulty: z.enum(["beginner", "intermediate", "advanced", "expert"]),
  category: z.enum([
    "filEexploration",
    "crypto",
    "web",
    "binary",
    "forensics",
    "network",
  ]),
  credentials: z
    .object({
      username: z.string(),
      Port: z.number(),
      host: z.string(),
      password: z.string(),
    })
    .optional(),
  estimatedTime: z.number().min(1).max(120),
  createdAt: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
});
const ctfCreateSchema = z.object({
  ctfName: z.string(),
  totalLevels: z.number(),
  title: z.string(),
  imgSrc: z.string(),
  totalPlayers: z.number(),
  subHeader: z.string(),
  difficulty: z.string(),
  topic: z.string(),
});

const saveLevelSchema = z.object({
  ctfName: z.string().min(1, "CTF name is required."),
  levelNo: z
    .number()
    .int()
    .nonnegative("Level number must be a non-negative integer."),
  password: z.string().min(1, "Password is required."),
});

export { ctflevelCreateSchema, ctfCreateSchema, saveLevelSchema };

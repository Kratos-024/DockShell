import { z } from "zod";

// Level Schema (existing)
const levelCreateSchema = z.object({
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
  expectedOutput: z.string().optional(),
  difficulty: z.enum(["beginner", "intermediate", "advanced", "expert"]),
  category: z.enum([
    "fileexploration",
    "crypto",
    "web",
    "binary",
    "forensics",
    "network",
  ]),
  estimatedTime: z.number().min(1).max(120),
  createdAt: z.date().default(() => new Date()),
});

// User Create Schema
const userCreateSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .transform((val) => val.toLowerCase()), // Convert to lowercase for consistency
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .transform((val) => val.toLowerCase()), // Convert to lowercase for consistency
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

// User Login Schema
const userLoginSchema = z.object({
  username: z
    .string()
    .min(1, "Username or email is required")
    .max(100, "Username or email is too long"),
  password: z.string().min(1, "Password is required"),
});

// Forgot Password Schema
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .transform((val) => val.toLowerCase()),
});

// Reset Password Schema
const resetPasswordSchema = z.object({
  token: z.string().min(1, "Reset token is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

// Change Username Schema
const changeUsernameSchema = z.object({
  newUsername: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .transform((val) => val.toLowerCase()),
});

// Change Password Schema
const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

// Update Profile Schema
const updateProfileSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must be less than 50 characters")
      .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces")
      .optional(),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must be less than 50 characters")
      .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces")
      .optional(),
    email: z
      .string()
      .email("Please enter a valid email address")
      .max(100, "Email must be less than 100 characters")
      .transform((val) => val.toLowerCase())
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
  });

// Type exports for better TypeScript support
export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type ForgotPassword = z.infer<typeof forgotPasswordSchema>;
export type ResetPassword = z.infer<typeof resetPasswordSchema>;
export type ChangeUsername = z.infer<typeof changeUsernameSchema>;
export type ChangePassword = z.infer<typeof changePasswordSchema>;
export type UpdateProfile = z.infer<typeof updateProfileSchema>;
export type LevelCreate = z.infer<typeof levelCreateSchema>;

// Schema exports
export {
  levelCreateSchema,
  userCreateSchema,
  userLoginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changeUsernameSchema,
  changePasswordSchema,
  updateProfileSchema,
};

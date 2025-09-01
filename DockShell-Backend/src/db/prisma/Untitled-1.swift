// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
model ctfClaimed {
  id String @id @default(cuid()) @unique
  ctfProgressId String
  levelNo Int
  password String
  ctfprogress      CtfProgress     @relation(fields: [ctfProgressId], references: [id], onDelete: Cascade)
  @@map("ctf_claimed")
}
model CtfProgress {
  id String      @id @default(cuid())
  ctfName String
  ctfClaimeds ctfClaimed[] 
  user User @relation(fields: [username], references: [username], onDelete: Cascade)
  username     String                                    
  @@unique([username, ctfName])
  @@map("ctf_progress")
}
model User {
  id               String      @id @default(cuid())
  firstName        String
  LastName         String
  username         String      @unique
  email            String      @unique 
  password         String
  resetToken       String?     @unique
  resetTokenExpiry DateTime?
  lastLogin        DateTime?
  skills           Skills?
  createdAt        DateTime    @default(now())
  updatedAt        DateTime    @updatedAt
  tokens           AuthToken[] 
  ctfsProgress     CtfProgress[]
  @@map("users")
}

model AuthToken {
  id        String   @id @default(cuid())
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("auth_tokens")
}

enum Difficulty {
  beginner
  intermediate
  advanced
  expert
}

enum Category {
  filEexploration
  crypto
  binary
  forensics
  web
  network
}
model CTFS {
  ctfName String @unique
  totalLevels Int
  title String
  imgSrc String
  totalPlayers Int
  subHeader String
  difficulty String
  topic String

}

model Credentials {
  ctfLevelUniqueId String @unique
  host String
  username String
  password String?
  Port Int
  @@map("credentials")

  ctflevel CtfLevels @relation(fields: [ctfLevelUniqueId] ,references: [uniqueId], onDelete: Cascade)
}
model CtfLevels {
  password String
  levelNo Int
  ctfName String
  id             String       @id @default(cuid())
  uniqueId       String       @unique
  credentials    Credentials?

  goal           String
  links          String[]
  description    String
  commands       String[]
  hints          String[]
  files          String?
  expectedOutput String?
  difficulty     Difficulty
  category       Category
  estimatedTime  String
  createdAt      DateTime     @default(now()) 
  updatedAt      DateTime     @updatedAt    
  
  @@map("levels")
}

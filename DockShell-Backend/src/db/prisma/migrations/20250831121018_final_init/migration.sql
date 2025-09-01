-- CreateEnum
CREATE TYPE "public"."Difficulty" AS ENUM ('beginner', 'intermediate', 'advanced', 'expert');

-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('filEexploration', 'crypto', 'binary', 'forensics', 'web', 'network');

-- CreateTable
CREATE TABLE "public"."ctf_claimed" (
    "id" TEXT NOT NULL,
    "ctfProgressId" TEXT NOT NULL,
    "levelNo" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ctf_claimed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Skills" (
    "id" TEXT NOT NULL,
    "category" "public"."Category" NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."ctf_progress" (
    "id" TEXT NOT NULL,
    "ctfName" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "ctf_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiry" TIMESTAMP(3),
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."auth_tokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "auth_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CTFS" (
    "ctfName" TEXT NOT NULL,
    "totalLevels" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "subHeader" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "totalPlayers" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "public"."credentials" (
    "ctfLevelUniqueId" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "Port" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "public"."levels" (
    "password" TEXT NOT NULL,
    "levelNo" INTEGER NOT NULL,
    "ctfName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "links" TEXT[],
    "description" TEXT NOT NULL,
    "commands" TEXT[],
    "hints" TEXT[],
    "expectedOutput" TEXT,
    "difficulty" "public"."Difficulty" NOT NULL,
    "category" "public"."Category" NOT NULL,
    "estimatedTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "files" TEXT,

    CONSTRAINT "levels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ctf_claimed_id_key" ON "public"."ctf_claimed"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_username_key" ON "public"."Skills"("username");

-- CreateIndex
CREATE UNIQUE INDEX "ctf_progress_username_ctfName_key" ON "public"."ctf_progress"("username", "ctfName");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_resetToken_key" ON "public"."users"("resetToken");

-- CreateIndex
CREATE UNIQUE INDEX "auth_tokens_token_key" ON "public"."auth_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "CTFS_ctfName_key" ON "public"."CTFS"("ctfName");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_ctfLevelUniqueId_key" ON "public"."credentials"("ctfLevelUniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "levels_uniqueId_key" ON "public"."levels"("uniqueId");

-- AddForeignKey
ALTER TABLE "public"."ctf_claimed" ADD CONSTRAINT "ctf_claimed_ctfProgressId_fkey" FOREIGN KEY ("ctfProgressId") REFERENCES "public"."ctf_progress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Skills" ADD CONSTRAINT "Skills_username_fkey" FOREIGN KEY ("username") REFERENCES "public"."users"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ctf_progress" ADD CONSTRAINT "ctf_progress_username_fkey" FOREIGN KEY ("username") REFERENCES "public"."users"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."auth_tokens" ADD CONSTRAINT "auth_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."credentials" ADD CONSTRAINT "credentials_ctfLevelUniqueId_fkey" FOREIGN KEY ("ctfLevelUniqueId") REFERENCES "public"."levels"("uniqueId") ON DELETE CASCADE ON UPDATE CASCADE;

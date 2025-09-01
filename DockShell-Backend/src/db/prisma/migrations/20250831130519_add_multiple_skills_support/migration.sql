/*
  Warnings:

  - A unique constraint covering the columns `[username,category]` on the table `Skills` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Skills_username_key";

-- AlterTable
ALTER TABLE "public"."Skills" ADD CONSTRAINT "Skills_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_username_category_key" ON "public"."Skills"("username", "category");

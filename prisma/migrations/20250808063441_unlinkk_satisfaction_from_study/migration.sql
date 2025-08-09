/*
  Warnings:

  - You are about to drop the column `satisfactionId` on the `Study` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Study" DROP CONSTRAINT "Study_satisfactionId_fkey";

-- AlterTable
ALTER TABLE "Study" DROP COLUMN "satisfactionId";

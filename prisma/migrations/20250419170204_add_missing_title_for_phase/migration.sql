/*
  Warnings:

  - Added the required column `title` to the `Phase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Phase" ADD COLUMN     "title" TEXT NOT NULL;

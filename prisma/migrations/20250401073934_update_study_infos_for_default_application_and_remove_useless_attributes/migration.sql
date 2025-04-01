/*
  Warnings:

  - You are about to drop the column `deadlinePreStudy` on the `StudyInfos` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `StudyInfos` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `StudyInfos` table. All the data in the column will be lost.
  - Made the column `applicationFee` on table `StudyInfos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "StudyInfos" DROP COLUMN "deadlinePreStudy",
DROP COLUMN "description",
DROP COLUMN "duration",
ALTER COLUMN "applicationFee" SET NOT NULL,
ALTER COLUMN "applicationFee" SET DEFAULT 5;

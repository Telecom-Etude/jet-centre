/*
  Warnings:

  - The `deadlinePreStudy` column on the `StudyInfos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "StudyInfos" DROP COLUMN "deadlinePreStudy",
ADD COLUMN     "deadlinePreStudy" TIMESTAMP(3);

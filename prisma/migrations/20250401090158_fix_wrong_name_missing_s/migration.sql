/*
  Warnings:

  - You are about to drop the column `domain` on the `StudyInfos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudyInfos" DROP COLUMN "domain",
ADD COLUMN     "domains" "Domain"[];

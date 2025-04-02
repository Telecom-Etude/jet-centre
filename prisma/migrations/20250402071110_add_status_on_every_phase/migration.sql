/*
  Warnings:

  - You are about to drop the column `studyProgressId` on the `Phase` table. All the data in the column will be lost.
  - You are about to drop the column `studyProgressId` on the `Study` table. All the data in the column will be lost.
  - You are about to drop the `StudyProgress` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `phaseStatus` to the `Phase` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PhaseStatus" AS ENUM ('NotStarted', 'InProgress', 'NeedsDeliverable', 'Finished');

-- AlterEnum
ALTER TYPE "StudyProgressStep" ADD VALUE 'StudyCreation';

-- DropForeignKey
ALTER TABLE "Phase" DROP CONSTRAINT "Phase_studyProgressId_fkey";

-- DropForeignKey
ALTER TABLE "StudyProgress" DROP CONSTRAINT "StudyProgress_studyId_fkey";

-- AlterTable
ALTER TABLE "Phase" DROP COLUMN "studyProgressId",
ADD COLUMN     "phaseStatus" "PhaseStatus" NOT NULL,
ADD COLUMN     "studyProceedingsId" TEXT;

-- AlterTable
ALTER TABLE "Study" DROP COLUMN "studyProgressId",
ADD COLUMN     "studyProceedingsId" TEXT;

-- DropTable
DROP TABLE "StudyProgress";

-- CreateTable
CREATE TABLE "StudyProceedings" (
    "id" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "process" "StudyProgressStep" NOT NULL,

    CONSTRAINT "StudyProceedings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudyProceedings_studyId_key" ON "StudyProceedings"("studyId");

-- AddForeignKey
ALTER TABLE "StudyProceedings" ADD CONSTRAINT "StudyProceedings_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_studyProceedingsId_fkey" FOREIGN KEY ("studyProceedingsId") REFERENCES "StudyProceedings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

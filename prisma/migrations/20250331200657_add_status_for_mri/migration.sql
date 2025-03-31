/*
  Warnings:

  - You are about to drop the column `formMRIId` on the `StudyAssignee` table. All the data in the column will be lost.
  - You are about to drop the `FormMRI` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MRI` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[mriFormId]` on the table `StudyAssignee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mriFormId` to the `StudyAssignee` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MriStatus" AS ENUM ('InProgress', 'Finished', 'Validated', 'Sent');

-- DropForeignKey
ALTER TABLE "FormMRI" DROP CONSTRAINT "FormMRI_mriId_fkey";

-- DropForeignKey
ALTER TABLE "MRI" DROP CONSTRAINT "MRI_studyId_fkey";

-- DropForeignKey
ALTER TABLE "StudyAssignee" DROP CONSTRAINT "StudyAssignee_formMRIId_fkey";

-- DropIndex
DROP INDEX "StudyAssignee_formMRIId_key";

-- AlterTable
ALTER TABLE "StudyAssignee" DROP COLUMN "formMRIId",
ADD COLUMN     "mriFormId" TEXT NOT NULL;

-- DropTable
DROP TABLE "FormMRI";

-- DropTable
DROP TABLE "MRI";

-- CreateTable
CREATE TABLE "Mri" (
    "id" TEXT NOT NULL,
    "wageLowerBound" INTEGER,
    "wageUpperBound" INTEGER,
    "wageLevel" "Level",
    "difficulty" "Level",
    "mainDomain" "Domain",
    "introductionText" TEXT,
    "descriptionText" TEXT,
    "timeLapsText" TEXT,
    "requiredSkillsText" TEXT,
    "status" "MriStatus" NOT NULL,
    "studyId" TEXT NOT NULL,

    CONSTRAINT "Mri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MriForm" (
    "id" TEXT NOT NULL,
    "mriId" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "knowledge" TEXT NOT NULL,
    "ideas" TEXT NOT NULL,
    "jeExperience" INTEGER NOT NULL,

    CONSTRAINT "MriForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mri_studyId_key" ON "Mri"("studyId");

-- CreateIndex
CREATE UNIQUE INDEX "MriForm_mriId_key" ON "MriForm"("mriId");

-- CreateIndex
CREATE UNIQUE INDEX "StudyAssignee_mriFormId_key" ON "StudyAssignee"("mriFormId");

-- AddForeignKey
ALTER TABLE "Mri" ADD CONSTRAINT "Mri_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyAssignee" ADD CONSTRAINT "StudyAssignee_mriFormId_fkey" FOREIGN KEY ("mriFormId") REFERENCES "MriForm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MriForm" ADD CONSTRAINT "MriForm_mriId_fkey" FOREIGN KEY ("mriId") REFERENCES "Mri"("id") ON DELETE CASCADE ON UPDATE CASCADE;

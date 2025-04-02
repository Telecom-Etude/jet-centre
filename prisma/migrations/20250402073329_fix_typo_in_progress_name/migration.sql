/*
  Warnings:

  - You are about to drop the column `process` on the `StudyProceedings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudyProceedings" DROP COLUMN "process",
ADD COLUMN     "studyProcessStep" "StudyProgressStep" NOT NULL DEFAULT 'StudyCreation';

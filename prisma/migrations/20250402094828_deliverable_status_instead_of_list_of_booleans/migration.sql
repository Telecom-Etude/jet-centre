/*
  Warnings:

  - You are about to drop the column `done` on the `Deliverable` table. All the data in the column will be lost.
  - You are about to drop the column `given` on the `Deliverable` table. All the data in the column will be lost.
  - You are about to drop the column `phaseStatus` on the `Phase` table. All the data in the column will be lost.
  - Made the column `studyProceedingsId` on table `Phase` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "DeliverableStatus" AS ENUM ('NotStarted', 'InProgress', 'Finished', 'Given');

-- DropForeignKey
ALTER TABLE "Phase" DROP CONSTRAINT "Phase_studyProceedingsId_fkey";

-- AlterTable
ALTER TABLE "Deliverable" DROP COLUMN "done",
DROP COLUMN "given",
ADD COLUMN     "status" "DeliverableStatus" NOT NULL DEFAULT 'NotStarted';

-- AlterTable
ALTER TABLE "Phase" DROP COLUMN "phaseStatus",
ALTER COLUMN "studyProceedingsId" SET NOT NULL;

-- DropEnum
DROP TYPE "PhaseStatus";

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_studyProceedingsId_fkey" FOREIGN KEY ("studyProceedingsId") REFERENCES "StudyProceedings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

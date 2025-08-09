/*
  Warnings:

  - You are about to drop the column `mriFormId` on the `StudyAssignee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studyAssigneeId]` on the table `MriForm` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studyAssigneeId` to the `MriForm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudyAssignee" DROP CONSTRAINT "StudyAssignee_mriFormId_fkey";

-- DropIndex
DROP INDEX "StudyAssignee_mriFormId_key";

-- AlterTable
ALTER TABLE "MriForm" ADD COLUMN     "studyAssigneeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StudyAssignee" DROP COLUMN "mriFormId";

-- CreateIndex
CREATE UNIQUE INDEX "MriForm_studyAssigneeId_key" ON "MriForm"("studyAssigneeId");

-- AddForeignKey
ALTER TABLE "MriForm" ADD CONSTRAINT "MriForm_studyAssigneeId_fkey" FOREIGN KEY ("studyAssigneeId") REFERENCES "StudyAssignee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[studyAssigneeId,mriId]` on the table `MriForm` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "MriForm" DROP CONSTRAINT "MriForm_mriId_fkey";

-- DropIndex
DROP INDEX "MriForm_mriId_key";

-- DropIndex
DROP INDEX "MriForm_studyAssigneeId_key";

-- CreateIndex
CREATE UNIQUE INDEX "MriForm_studyAssigneeId_mriId_key" ON "MriForm"("studyAssigneeId", "mriId");

-- AddForeignKey
ALTER TABLE "MriForm" ADD CONSTRAINT "MriForm_mriId_fkey" FOREIGN KEY ("mriId") REFERENCES "Mri"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

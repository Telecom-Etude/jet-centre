/*
  Warnings:

  - You are about to drop the column `zipCode` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `studyId` on the `Satisfaction` table. All the data in the column will be lost.
  - Added the required column `postalCode` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Satisfaction" DROP CONSTRAINT "Satisfaction_studyId_fkey";

-- DropIndex
DROP INDEX "Satisfaction_studyId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "zipCode",
ADD COLUMN     "postalCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Satisfaction" DROP COLUMN "studyId";

-- AlterTable
ALTER TABLE "Study" ADD COLUMN     "satisfactionId" TEXT;

-- AddForeignKey
ALTER TABLE "Study" ADD CONSTRAINT "Study_satisfactionId_fkey" FOREIGN KEY ("satisfactionId") REFERENCES "Satisfaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

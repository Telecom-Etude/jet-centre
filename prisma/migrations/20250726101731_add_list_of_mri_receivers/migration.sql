/*
  Warnings:

  - You are about to drop the column `promotion` on the `AssigneeInfos` table. All the data in the column will be lost.
  - Added the required column `graduationYear` to the `AssigneeInfos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AssigneeInfos" DROP COLUMN "promotion",
ADD COLUMN     "graduationYear" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "MriReceived" (
    "assigneeId" TEXT NOT NULL,

    CONSTRAINT "MriReceived_pkey" PRIMARY KEY ("assigneeId")
);

-- AddForeignKey
ALTER TABLE "MriReceived" ADD CONSTRAINT "MriReceived_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "Assignee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

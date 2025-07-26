/*
  Warnings:

  - You are about to drop the `MriReceived` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MriReceived" DROP CONSTRAINT "MriReceived_assigneeId_fkey";

-- DropTable
DROP TABLE "MriReceived";

-- CreateTable
CREATE TABLE "MriReceiver" (
    "assigneeId" TEXT NOT NULL,

    CONSTRAINT "MriReceiver_pkey" PRIMARY KEY ("assigneeId")
);

-- AddForeignKey
ALTER TABLE "MriReceiver" ADD CONSTRAINT "MriReceiver_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "Assignee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

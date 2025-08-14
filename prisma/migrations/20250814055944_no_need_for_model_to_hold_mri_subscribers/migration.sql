/*
  Warnings:

  - You are about to drop the `MriReceiver` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MriReceiver" DROP CONSTRAINT "MriReceiver_assigneeId_fkey";

-- AlterTable
ALTER TABLE "Assignee" ADD COLUMN     "susbscribedMri" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "MriReceiver";

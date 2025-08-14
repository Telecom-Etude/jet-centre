/*
  Warnings:

  - You are about to drop the column `susbscribedMri` on the `Assignee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Assignee" DROP COLUMN "susbscribedMri",
ADD COLUMN     "mriSubscriber" BOOLEAN NOT NULL DEFAULT false;

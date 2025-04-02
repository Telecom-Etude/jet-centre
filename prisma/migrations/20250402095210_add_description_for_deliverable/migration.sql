/*
  Warnings:

  - You are about to drop the column `content` on the `Deliverable` table. All the data in the column will be lost.
  - Added the required column `description` to the `Deliverable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deliverable" DROP COLUMN "content",
ADD COLUMN     "description" TEXT NOT NULL;

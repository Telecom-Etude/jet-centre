/*
  Warnings:

  - You are about to drop the column `roleId` on the `Admins` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Admins" DROP CONSTRAINT "Admins_roleId_fkey";

-- AlterTable
ALTER TABLE "Admins" DROP COLUMN "roleId";

-- CreateTable
CREATE TABLE "_AdminsToRoles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdminsToRoles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AdminsToRoles_B_index" ON "_AdminsToRoles"("B");

-- AddForeignKey
ALTER TABLE "_AdminsToRoles" ADD CONSTRAINT "_AdminsToRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "Admins"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminsToRoles" ADD CONSTRAINT "_AdminsToRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

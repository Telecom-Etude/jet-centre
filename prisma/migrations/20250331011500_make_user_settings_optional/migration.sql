-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userSettingsId_fkey";

-- DropIndex
DROP INDEX "User_userSettingsId_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userSettingsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userSettingsId_fkey" FOREIGN KEY ("userSettingsId") REFERENCES "UserSettings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

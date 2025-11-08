-- DropForeignKey
ALTER TABLE "BugReport" DROP CONSTRAINT "BugReport_userId_fkey";

-- AlterTable
ALTER TABLE "BugReport" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BugReport" ADD CONSTRAINT "BugReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - The values [LOW,MEDIUM,HIGH] on the enum `NotificationLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "NotificationLevel_new" AS ENUM ('Low', 'Medium', 'High');
ALTER TABLE "UserSettings" ALTER COLUMN "notificationLevel" TYPE "NotificationLevel_new" USING ("notificationLevel"::text::"NotificationLevel_new");
ALTER TYPE "NotificationLevel" RENAME TO "NotificationLevel_old";
ALTER TYPE "NotificationLevel_new" RENAME TO "NotificationLevel";
DROP TYPE "NotificationLevel_old";
COMMIT;

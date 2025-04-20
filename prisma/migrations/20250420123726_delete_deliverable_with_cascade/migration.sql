-- DropForeignKey
ALTER TABLE "Deliverable" DROP CONSTRAINT "Deliverable_phaseId_fkey";

-- AddForeignKey
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

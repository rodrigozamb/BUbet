-- AlterTable
ALTER TABLE "banner_types" ADD COLUMN     "eventId" TEXT;

-- AddForeignKey
ALTER TABLE "banner_types" ADD CONSTRAINT "banner_types_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

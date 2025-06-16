-- AlterTable
ALTER TABLE "banner_types" ADD COLUMN     "eventResultsCompetitorId" TEXT,
ADD COLUMN     "eventResultsEventId" TEXT;

-- AddForeignKey
ALTER TABLE "banner_types" ADD CONSTRAINT "banner_types_eventResultsCompetitorId_eventResultsEventId_fkey" FOREIGN KEY ("eventResultsCompetitorId", "eventResultsEventId") REFERENCES "events_results"("competitorId", "eventId") ON DELETE SET NULL ON UPDATE CASCADE;

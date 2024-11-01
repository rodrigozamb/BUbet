-- DropForeignKey
ALTER TABLE "bets" DROP CONSTRAINT "bets_eventId_fkey";

-- DropForeignKey
ALTER TABLE "bets" DROP CONSTRAINT "bets_userId_fkey";

-- DropForeignKey
ALTER TABLE "events_results" DROP CONSTRAINT "events_results_competitorId_fkey";

-- DropForeignKey
ALTER TABLE "events_results" DROP CONSTRAINT "events_results_eventId_fkey";

-- AddForeignKey
ALTER TABLE "events_results" ADD CONSTRAINT "events_results_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "competitors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_results" ADD CONSTRAINT "events_results_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bets" ADD CONSTRAINT "bets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bets" ADD CONSTRAINT "bets_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

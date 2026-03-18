-- CreateEnum
CREATE TYPE "BetType" AS ENUM ('RANKING', 'GUESS');

-- AlterTable
ALTER TABLE "events_results" ADD COLUMN     "guessEventId" TEXT;

-- CreateTable
CREATE TABLE "guess_events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ends_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guess_options" TEXT[],
    "custom_guess" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "guess_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guess_bets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "guess" TEXT NOT NULL,
    "custom_guess" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "points" INTEGER NOT NULL DEFAULT 0,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "guessEventId" TEXT,
    "eventId" TEXT,

    CONSTRAINT "guess_bets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guess_bets_results" (
    "id" TEXT NOT NULL,
    "guess" TEXT NOT NULL,
    "custom_guess" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guessEventId" TEXT,

    CONSTRAINT "guess_bets_results_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "guess_bets" ADD CONSTRAINT "guess_bets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guess_bets" ADD CONSTRAINT "guess_bets_guessEventId_fkey" FOREIGN KEY ("guessEventId") REFERENCES "guess_events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guess_bets" ADD CONSTRAINT "guess_bets_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guess_bets_results" ADD CONSTRAINT "guess_bets_results_guessEventId_fkey" FOREIGN KEY ("guessEventId") REFERENCES "guess_events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_results" ADD CONSTRAINT "events_results_guessEventId_fkey" FOREIGN KEY ("guessEventId") REFERENCES "guess_events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

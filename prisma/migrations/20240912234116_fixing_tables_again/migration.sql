/*
  Warnings:

  - The primary key for the `events_results` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `events_results` table. All the data in the column will be lost.
  - You are about to drop the `bets_results` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bets_results" DROP CONSTRAINT "bets_results_userId_eventId_fkey";

-- DropForeignKey
ALTER TABLE "bets_results" DROP CONSTRAINT "bets_results_userId_fkey";

-- AlterTable
ALTER TABLE "bets" ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "events_results" DROP CONSTRAINT "events_results_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "events_results_pkey" PRIMARY KEY ("competitorId", "eventId");

-- DropTable
DROP TABLE "bets_results";

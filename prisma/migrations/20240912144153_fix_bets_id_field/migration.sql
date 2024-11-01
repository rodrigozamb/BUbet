/*
  Warnings:

  - The primary key for the `bets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `bets` table. All the data in the column will be lost.
  - You are about to drop the column `betsId` on the `bets_results` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `bets_results` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bets_results" DROP CONSTRAINT "bets_results_betsId_fkey";

-- AlterTable
ALTER TABLE "bets" DROP CONSTRAINT "bets_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "bets_pkey" PRIMARY KEY ("userId", "eventId");

-- AlterTable
ALTER TABLE "bets_results" DROP COLUMN "betsId",
ADD COLUMN     "eventId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bets_results" ADD CONSTRAINT "bets_results_userId_eventId_fkey" FOREIGN KEY ("userId", "eventId") REFERENCES "bets"("userId", "eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Made the column `score` on table `events_results` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "events_results" ALTER COLUMN "score" SET NOT NULL;

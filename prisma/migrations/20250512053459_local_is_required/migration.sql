/*
  Warnings:

  - Made the column `local` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "events" ALTER COLUMN "local" SET NOT NULL;

-- AlterTable
ALTER TABLE "feedbacks" ADD COLUMN     "image" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

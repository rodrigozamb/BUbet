-- CreateEnum
CREATE TYPE "AlbumCardType" AS ENUM ('SPECIAL', 'DEFAULT', 'HORIZONTAL');

-- AlterEnum
ALTER TYPE "AlbumPageType" ADD VALUE 'NOIMAGES';

-- AlterTable
ALTER TABLE "album_cards" ADD COLUMN     "type" "AlbumCardType" NOT NULL DEFAULT 'DEFAULT';

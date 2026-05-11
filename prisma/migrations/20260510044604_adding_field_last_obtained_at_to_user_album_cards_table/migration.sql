-- AlterTable
ALTER TABLE "user_album_cards" ADD COLUMN     "last_obtained_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

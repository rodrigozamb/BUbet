-- AlterTable
ALTER TABLE "album_cards" ADD COLUMN     "team" TEXT NOT NULL DEFAULT 'Desconhecido';

-- AlterTable
ALTER TABLE "album_pages" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0;

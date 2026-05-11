-- CreateEnum
CREATE TYPE "AlbumPageType" AS ENUM ('DESCRIPTION', 'IMAGESL', 'IMAGESR');

-- CreateTable
CREATE TABLE "albums" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "event_id" TEXT,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "album_pages" (
    "id" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "type" "AlbumPageType" NOT NULL,
    "description" TEXT,

    CONSTRAINT "album_pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "album_cards" (
    "id" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "naipe" TEXT NOT NULL,
    "album_page_id" TEXT,

    CONSTRAINT "album_cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "albums" ADD CONSTRAINT "albums_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "album_pages" ADD CONSTRAINT "album_pages_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "albums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "album_cards" ADD CONSTRAINT "album_cards_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "albums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "album_cards" ADD CONSTRAINT "album_cards_album_page_id_fkey" FOREIGN KEY ("album_page_id") REFERENCES "album_pages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

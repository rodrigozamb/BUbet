-- CreateTable
CREATE TABLE "card_packs" (
    "id" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "album_id" TEXT NOT NULL,

    CONSTRAINT "card_packs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "card_packs" ADD CONSTRAINT "card_packs_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "albums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

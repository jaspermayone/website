import { useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/photos";
import DotsBackground from "@/components/DotsBackground";
import { PhotoOrText, Photo, TextEntry } from "@/lib/interfaces";

export default function Photos() {
  const [photos, setPhotos] = useState<PhotoOrText[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos");
        const data: string[] = await response.json();

        const photosWithMetadata = await Promise.all(
          data.map(async (file_name) => {
            try {
              const metaResponse = await fetch(
                `/api/photos/metadata/${file_name}`,
              );
              const metadata = await metaResponse.json();

              return {
                file_name,
                metadata, // Include the metadata here
                image: `/images/photography/${file_name}`,
              } as Photo;
            } catch (error) {
              console.error(
                `Failed to fetch metadata for ${file_name}:`,
                error,
              );
              return {
                file_name,
                image: `/images/photography/${file_name}`,
              } as Photo;
            }
          }),
        );

        setPhotos(photosWithMetadata);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const staticPhotos = useMemo(() => {
    return [
      {
        name: "Here's a gallery of some of my photos I've taken. You can view them all on my Instagram @jasper.mayone.photography",
        type: "text",
      } as TextEntry,
      ...photos,
    ];
  }, [photos]);

  return (
    <>
      <DotsBackground />
      <div className="min-h-screen flex flex-col items-center px-5">
        <div className="w-full flex justify-center mt-5">
          <ParallaxScroll className="h-full w-full" photos={staticPhotos} />
        </div>
      </div>
    </>
  );
}

import { Suspense, useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/photos";
import DotsBackground from "@/components/DotsBackground";
import { PhotoOrText, Photo, TextEntry } from "@/lib/interfaces";

export default function Photos() {
  const [photos, setPhotos] = useState<PhotoOrText[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch("/api/photos");
      const data: PhotoOrText[] = await response.json();
      setPhotos(data); // Store the photos data
    };

    fetchPhotos();
  }, []);

  const staticPhotos = useMemo(() => {
    return [
      {
        name: "Here's a gallery of some of my photos I've taken. You can view them all on my Instagram @jasper.mayone.photography",
        type: "text",
      } as TextEntry, // Ensure it's treated as a TextEntry
      ...photos.map((photo) => {
        if ("file_name" in photo) {
          // Check if it's a Photo
          return {
            ...photo,
            image: `/images/photography/${photo.file_name}`, // Ensure this has a leading slash
          } as Photo; // Ensure TypeScript understands this is a Photo
        }
        return photo; // Return TextEntry objects unchanged
      }),
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

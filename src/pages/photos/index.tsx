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
      },
      ...photos.map((photo) => {
        return {
          ...photo,
          image: `/images/photography/${photo.file_name}`,
          // No need to add blurDataURL here, it's already included in the photo object
        };
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

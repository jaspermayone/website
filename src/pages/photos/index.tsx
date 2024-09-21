import { Suspense, useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/photos";
import DotsBackground from "@/components/DotsBackground";
import { PhotoOrText, Photo, TextEntry } from "@/lib/interfaces";

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Create a fallback component for Suspense loading state
function LoadingFallback() {
  return <div className="text-lg text-center mt-10">Loading...</div>;
}

export default function Photos() {
  const [photos, setPhotos] = useState<PhotoOrText[]>([]);

  function isPhoto(photo: PhotoOrText): photo is Photo {
    return (photo as Photo).file_name !== undefined;
  }

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch("/api/photos");
      const data: PhotoOrText[] = await response.json();
      setPhotos(data); // Store the photos data
    };

    fetchPhotos();
  }, []);

  const staticPhotos = useMemo(() => {
    const shuffledPhotos = shuffleArray(
      photos.map((photo) => {
        if (isPhoto(photo)) {
          return {
            ...photo,
            image: `/images/photography/${photo.file_name}`,
          };
        }
        return photo; // Return TextEntry objects unchanged
      }),
    );
    return [
      {
        name: "Here's a galery of some of my photos i've taken. You can view them all on my Instagram @jasper.mayone.photography",
        type: "text", // Define it as text to handle separately in the parallax scroll
      },
      ...shuffledPhotos,
    ];
  }, [photos]);

  useEffect(() => {
    console.log(staticPhotos); // Add this to log the staticPhotos array
  }, [staticPhotos]);

  return (
    <>
      <DotsBackground />
      <div className="min-h-screen flex flex-col items-center px-5">
        {/* Photos Parallax Scroll with Suspense */}
        <div className="w-full flex justify-center mt-5">
          <Suspense fallback={<LoadingFallback />}>
            <ParallaxScroll className="h-full w-full" photos={staticPhotos} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

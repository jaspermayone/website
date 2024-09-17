import SquareImage from "@/components/SquareImage";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/photos";

/*
  Ben Dixon - https://malted.dev
  Aram Shiva - https://aram.sh/
  Sam Poder - https://sampoder.com/
  Deven Jadhav - https://devenjadhav.com/
  Aarya - https://github.com/radioblahaj
  Alex Deforest - https://defo.one
  Manitej - https://github.com/techpixel
  Ruien Luo - https://rluo.dev/
  Reese Armstrong - https://reeseric.ci/
  Rhys Panopio - https://www.linkedin.com/in/rhys-panopio/
  Ian Madden - https://github.com/YodaLightsabr
  Kieran - https://kieranklukas.com/
  Ryan Di Lorenzo - https://github.com/LimesKey
  Samuel F. - https://sfernandez.dev/
  Luke O - https://github.com/Luke-Oldenburg
  Ryan Rudes - https://ryanrudes.com/
*/

export default function Friends() {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const fetchImageCount = async () => {
      const response = await fetch("/api/friends/imagecount");
      const data = await response.json();
      setImageCount(data.count);
    };

    fetchImageCount();
  }, []);

  const staticImages = useMemo(() => {
    const images = [];
    for (let i = 1; i <= imageCount; i++) {
      images.push(`/images/friends/${i}.jpg`);
    }
    return images;
  }, [imageCount]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center px-5">
        <div className="bg-white rounded-lg shadow-lg p-6 md:w-full w-full mt-12 mb-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl text-slate-600">
              &larr; Back to Home
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <ParallaxScroll
            className="max-h-screen w-full"
            images={staticImages.length ? staticImages : []}
          />
        </div>
      </div>
    </>
  );
}

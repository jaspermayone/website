import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/photos";

export default function Photos() {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const fetchImageCount = async () => {
      const response = await fetch("/api/imagecount");
      const data = await response.json();
      setImageCount(data.count);
    };

    fetchImageCount();
  }, []);

  const staticImages = useMemo(() => {
    const images = [];
    for (let i = 1; i <= imageCount; i++) {
      images.push(`/images/${i}.jpg`);
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

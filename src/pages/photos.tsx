import { useMemo, useEffect, useState } from "react";
import { ParallaxScroll } from "../components/ui/photos";
import Header from "@/components/header";

export default function Photos() {
  const [imagecount, setImageCount] = useState(0);

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
    for (let i = 1; i <= imagecount; i++) {
      images.push(`/images/${i}.png`);
    }
    return images;
  }, [imagecount]);

  return (
    <>
      <div className="deletescrollbar flex justify-center">
        <div className="md:pl-0 pl-5 md:pt-9 pt-5 text-wrap md:w-[50rem]">
          <Header />
          <p className="font-medium text-xl pt-9">Photos</p>
          <ParallaxScroll
            className="max-h-screen"
            images={staticImages.length ? staticImages : staticImages}
          />
        </div>
      </div>
    </>
  );
}

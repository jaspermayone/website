import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { PhotoOrText, Photo } from "@/lib/interfaces";

export const ParallaxScroll = ({
  photos,
  className,
}: {
  photos: PhotoOrText[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(photos.length / 3);
  const firstPart = photos.slice(0, third);
  const secondPart = photos.slice(third, 2 * third);
  const thirdPart = photos.slice(2 * third);

  const isPhoto = (photo: PhotoOrText): photo is Photo => {
    return (photo as Photo).file_name !== undefined;
  };

  const parseDate = (dateString: string | undefined) => {
    if (!dateString) return ""; // Return empty string if dateString is undefined

    const parts = dateString.split(/[: ]/);
    if (parts.length < 6) return ""; // Return empty string if parts are not enough

    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are 0-indexed
    const day = parseInt(parts[2]);
    const hours = parseInt(parts[3]);
    const minutes = parseInt(parts[4]);
    const seconds = parseInt(parts[5]);

    const date = new Date(year, month, day, hours, minutes, seconds);
    return date.toLocaleDateString(); // Format as needed
  };
  const renderImageGrid = (
    photosPart: PhotoOrText[],
    translateValue: any,
    partIndex: number,
  ) =>
    photosPart.map((photo, idx) => {
      if (isPhoto(photo)) {
        return (
          <motion.div
            className="relative group"
            style={{ y: translateValue }}
            key={`grid-${partIndex}-${idx}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={`/images/photography/${photo.file_name}`}
              className="!m-0 gap-10 rounded-lg object-cover object-center !p-0 transition-all duration-500 ease-in-out group-hover:brightness-50 drop-shadow-lg"
              height={400}
              width={400}
              alt="thumbnail"
              loading="lazy"
              aria-label={photo.file_name}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-black bg-opacity-50 p-4">
              <h3 className="text-white text-lg font-semibold mb-2">
                {photo.metadata?.image?.ImageDescription}
              </h3>
              <p className="text-white">
                {`Camera: ${photo.metadata?.image?.Make} ${photo.metadata?.image?.Model}`}
              </p>
              <p className="text-white">
                {`Date: ${parseDate(photo.metadata?.exif?.DateTimeOriginal)}`}
              </p>
              <p className="text-white">
                {`Exposure: ${photo.metadata?.exif?.ExposureTime} sec`}
              </p>
            </div>
          </motion.div>
        );
      }
      return null; // Return null for unexpected types
    });

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto hidescrollbar",
        className,
      )}
      ref={gridRef}
    >
      <div className="mx-auto grid grid-cols-3 items-start gap-5 pr-1 pb-20 pt-4.5">
        <div className="grid gap-10">
          {renderImageGrid(firstPart, translateFirst, 0)}
        </div>
        <div className="grid gap-10">
          {renderImageGrid(secondPart, translateSecond, 1)}
        </div>
        <div className="grid gap-10">
          {renderImageGrid(thirdPart, translateThird, 2)}
        </div>
      </div>
    </div>
  );
};

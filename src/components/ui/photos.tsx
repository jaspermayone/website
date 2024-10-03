import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { PhotoOrText, Photo } from "@/lib/interfaces";
import Link from "next/link";

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
      if (!isPhoto(photo)) {
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
            <div className="flex flex-col items-center justify-center p-6 bg-slate-100 rounded-lg shadow-md relative">
              <Link
                href="/"
                className="absolute top-4 left-4 hover:underline font-extralight"
              >
                &larr; Back
              </Link>
              <br />
              <p className="text-lg font-light mb-4">{photo.name}</p>
            </div>
          </motion.div>
        );
      }

      if (isPhoto(photo)) {
        const exifData = photo.metadata?.exifMetadata?.image || {};
        const sharpData = photo.metadata?.sharpMetadata || {};
        const exifDate = photo.metadata?.exifMetadata?.exif?.DateTimeOriginal;

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
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-black bg-opacity-50 p-4 text-center">
              <p className="text-white">
                {`Camera: ${exifData?.Make || "Unknown"} ${exifData?.Model || "Unknown"}`}
              </p>

              <p className="text-white">
                {`F-Stop: ${
                  photo.metadata?.exifMetadata?.exif?.FNumber
                    ? photo.metadata.exifMetadata.exif.FNumber
                    : "Unknown"
                }`}
              </p>

              <p className="text-white">
                {`Focal Length: ${
                  photo.metadata?.exifMetadata?.exif?.FocalLength
                    ? photo.metadata.exifMetadata.exif.FocalLength
                    : "Unknown"
                }`}
              </p>

              <p className="text-white">
                {`ISO: ${
                  photo.metadata?.exifMetadata?.exif?.ISO
                    ? photo.metadata.exifMetadata.exif.ISO
                    : "Unknown"
                }`}
              </p>

              <p className="text-white">
                {`Shutter Speed: ${
                  photo.metadata?.exifMetadata?.exif?.ShutterSpeedValue
                    ? photo.metadata.exifMetadata.exif.ShutterSpeedValue
                    : "Unknown"
                }`}
              </p>

              <p className="text-white">
                {`Aperture: ${
                  photo.metadata?.exifMetadata?.exif?.ApertureValue
                    ? photo.metadata.exifMetadata.exif.ApertureValue
                    : "Unknown"
                }`}
              </p>

              <p className="text-white">
                {`Brightness: ${
                  photo.metadata?.exifMetadata?.exif?.BrightnessValue
                    ? photo.metadata.exifMetadata.exif.BrightnessValue
                    : "Unknown"
                }`}
              </p>

              <p className="text-white">
                {`Lens: ${
                  photo.metadata?.exifMetadata?.exif?.LensMake
                    ? photo.metadata.exifMetadata.exif.LensMake
                    : "Unknown"
                } ${
                  photo.metadata?.exifMetadata?.exif?.LensModel
                    ? photo.metadata.exifMetadata.exif.LensModel
                    : "Unknown"
                }`}
              </p>

              <p className="text-white">
                {`Exposure Time: ${
                  photo.metadata?.exifMetadata?.exif?.ExposureTime
                    ? photo.metadata.exifMetadata.exif.ExposureTime
                    : "Unknown"
                }`}
              </p>
            </div>
          </motion.div>
        );
      }
      return null;
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

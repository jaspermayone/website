import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { ExifImage } from "exif";

export type Photo = {
  file_name: string;
  metadata?: any; // Define the type based on your needs
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const photosDirectory = path.join(
      process.cwd(),
      "public/images/photography/",
    );

    const fileNames = fs
      .readdirSync(photosDirectory)
      .filter((fileName) => fileName !== ".DS_Store");

    const photos: Photo[] = await Promise.all(
      fileNames.map(async (fileName) => {
        const filePath = path.join(photosDirectory, fileName);
        const sharpData = await sharp(filePath).metadata();

        // Create a promise for EXIF data
        const meta = await new Promise((resolve, reject) => {
          new ExifImage({ image: filePath }, (error, exifData) => {
            if (error) {
              console.log(`Error: ${error.message}`);
              reject(error); // Reject the promise on error
            } else {
              resolve(exifData); // Resolve the promise with exifData
            }
          });
        }).catch((error) => {
          console.log(`Error retrieving EXIF: ${error.message}`);
          return null; // Return null or some default value if there's an error
        });

        return {
          file_name: fileName,
          metadata: meta,
        };
      }),
    );

    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Unable to read photos directory." });
  }
}

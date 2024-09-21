import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import type { Photo } from "@/lib/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Resolve the directory path where the photos are stored
    const photosDirectory = path.join(
      process.cwd(),
      "public/images/photography/",
    );

    // Read all files in the photos directory
    const fileNames = fs.readdirSync(photosDirectory);

    // Create an array of Photo objects
    const photos: Photo[] = fileNames.map((fileName) => ({
      file_name: fileName,
    }));

    // Return the array of photos as JSON
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Unable to read photos directory." });
  }
}

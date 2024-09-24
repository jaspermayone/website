import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

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

    // Return only the file names, not metadata
    res.status(200).json(fileNames);
  } catch (error) {
    res.status(500).json({ message: "Unable to read photos directory." });
  }
}

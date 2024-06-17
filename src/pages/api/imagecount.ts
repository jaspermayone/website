import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), "public/images");
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read directory" });
    }

    const imageCount = files.filter((file) => file.endsWith(".png")).length;
    res.status(200).json({ count: imageCount });
  });
}

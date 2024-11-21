// import { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
// import path from "path";
// import { ExifImage } from "exif";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const { filename } = req.query;

//   try {
//     const photosDirectory = path.join(
//       process.cwd(),
//       "public/images/photography/",
//     );

//     const filePath = path.join(photosDirectory, filename as string);

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ message: "File not found." });
//     }

//     // Get EXIF data using ExifImage
//     const meta = await new Promise((resolve, reject) => {
//       new ExifImage({ image: filePath }, (error, exifData) => {
//         if (error) {
//           console.log(`Error: ${error.message}`);
//           reject(error);
//         } else {
//           resolve(exifData);
//         }
//       });
//     }).catch((error) => {
//       console.log(`Error retrieving EXIF: ${error.message}`);
//       return null; // Return null or some default value if there's an error
//     });

//     res.status(200).json({
//       file_name: filename,
//       exifMetadata: meta,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Unable to read photo metadata." });
//   }
// }

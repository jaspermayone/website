// import { MetadataRoute } from "next";
// import fs from "fs";
// import path from "path";

// const SITE_URL = "https://jaspermayone.com";
// const DEFAULT_PRIORITY = 0.4;
// const DEFAULT_CHANGE_FREQUENCY = "weekly" as const;

// const SPECIAL_FILES = {
//   robots: ".txt",
//   manifest: ".json",
//   icon: ".png",
//   favicon: ".ico",
// } as const;

// function getUrlForRoute(route: string): string {
//   if (route in SPECIAL_FILES) {
//     return route + SPECIAL_FILES[route as keyof typeof SPECIAL_FILES];
//   }
//   return route;
// }

// export default function sitemap(): MetadataRoute.Sitemap {
//   let routes: string[] = [];

//   try {
//     // Read routes from the file generated during build
//     const routesPath = path.join(process.cwd(), ".next", "routes.json");
//     if (fs.existsSync(routesPath)) {
//       routes = JSON.parse(fs.readFileSync(routesPath, "utf-8"));
//     }
//   } catch (error) {
//     console.warn("Failed to read routes:", error);
//   }

//   // Ensure home page is included
//   if (!routes.includes("")) {
//     routes.unshift("");
//   }

//   // Add special files
//   Object.keys(SPECIAL_FILES).forEach((file) => {
//     if (!routes.includes(file)) {
//       routes.push(file);
//     }
//   });

//   return routes.map((route) => {
//     const url = getUrlForRoute(route);

//     return {
//       url: `${SITE_URL}${url ? `/${url}` : ""}`,
//       lastModified: new Date(),
//       changeFrequency: DEFAULT_CHANGE_FREQUENCY,
//       priority: route === "" ? 1.0 : DEFAULT_PRIORITY,
//     };
//   });
// }

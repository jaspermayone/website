// app/press.xml/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const pressMentions = [
    "https://www.valleyplayers.com/oliver-2019",
    "https://www.valleyplayers.com/past-shows-1/oliver---revival",
    "https://www.ourherald.com/articles/the-valley-players-will-present-the-mousetrap-in-waitsfield/",
    "https://www.waterburyroundabout.org/community-archive/whwso8o3u19jbcj9gi50mzcdi6tm8d",
    "https://theaterengine.com/productions/2702",
    "https://huhsnewspaper.com/staff_name/jasper-mayone/",
    "https://www.madrivermentoring.com/staff",
    "https://www.waterburyroundabout.org/education/yc7o3f5vz3lvmvi8ea3lgxzett17y7",
     "https://www.sevendaysvt.com/guides/the-art-of-a-frame-building-35270341",
     "https://archive.nytimes.com/query.nytimes.com/gst/fullpage-9F06E4DE153AF936A35750C0A96F9C8B63.html",
     "https://www.valleyreporter.com/index.php/news/artsent/18053-willy-wonka-a-world-of-pure-imagination",
     "https://www.valleyreporter.com/index.php/news/artsent/18031-willy-wonka-coming-to-the-valley-players"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pressMentions.map(url => `
    <url>
      <loc>${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

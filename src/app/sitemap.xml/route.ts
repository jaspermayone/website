// src/app/sitemap.xml/route.ts - Sitemap Index
import { NextResponse } from 'next/server';

interface SitemapReference {
  loc: string;
  lastmod: string;
}

export async function GET(): Promise<NextResponse> {
  const baseUrl = 'https://jaspermayone.com';
  
  try {
    const sitemaps: SitemapReference[] = [
      {
        loc: `${baseUrl}/main-sitemap.xml`,
        lastmod: new Date().toISOString()
      },
      {
        loc: `${baseUrl}/press.xml`,
        lastmod: new Date().toISOString()
      }
    ];

    const sitemapEntries = sitemaps.map(sitemap => 
      `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
    ).join('\n');

    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

    return new NextResponse(sitemapIndex, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return new NextResponse('Error generating sitemap index', { status: 500 });
  }
}
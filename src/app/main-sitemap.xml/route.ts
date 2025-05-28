import { NextResponse } from 'next/server';

// Types
interface Route {
  path: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export async function GET(): Promise<NextResponse> {
  const baseUrl = 'https://jaspermayone.com';
  
  try {
    // Define your static routes manually
    const staticRoutes = getStaticRoutes();
    
    // Fetch dynamic content
    const dynamicRoutes = await getDynamicRoutes();
    
    const allRoutes: Route[] = [...staticRoutes, ...dynamicRoutes];
    
    const urls = allRoutes.map(route => createUrlEntry(baseUrl, route)).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}

// Define your static routes manually - update this when you add new pages
function getStaticRoutes(): Route[] {
  const currentDate = new Date().toISOString();
  
  const routes: Route[] = [
    {
      path: '/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      path: '/portfolio',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      path: '/verify',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9'
    },
    // Add more static routes here as needed
    // {
    //   path: '/services',
    //   lastmod: currentDate,
    //   changefreq: 'weekly',
    //   priority: '0.8'
    // },
  ];

  return routes;
}

async function getDynamicRoutes(): Promise<Route[]> {
  const routes: Route[] = [];
  
  try {
    // Example: Fetch blog posts from an API or CMS
    // const posts = await fetchBlogPosts();
    // const postRoutes: Route[] = posts
    //   .filter(post => post.published)
    //   .map(post => ({
    //     path: `/blog/${post.slug}`,
    //     lastmod: new Date(post.updatedAt).toISOString(),
    //     changefreq: 'monthly' as const,
    //     priority: '0.6'
    //   }));
    // routes.push(...postRoutes);

    // Example: Fetch from a headless CMS like Contentful, Sanity, etc.
    // const cmsContent = await fetchFromCMS();
    // routes.push(...cmsContent.map(item => ({...})));
    
  } catch (error) {
    console.warn('Error fetching dynamic routes:', error);
  }
  
  return routes;
}

function createUrlEntry(baseUrl: string, route: Route): string {
  return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}

// Example function for fetching blog posts from an API
// async function fetchBlogPosts(): Promise<Array<{slug: string, updatedAt: string, published: boolean}>> {
//   try {
//     const response = await fetch('https://api.yoursite.com/posts', {
//       next: { revalidate: 3600 } // Cache for 1 hour
//     });
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.warn('Failed to fetch blog posts:', error);
//     return [];
//   }
// }
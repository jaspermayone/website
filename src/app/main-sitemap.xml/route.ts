import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Types
interface Route {
  path: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

// interface DynamicContentItem {
//   slug: string;
//   updatedAt: string;
// }

// interface BlogPost extends DynamicContentItem {
//   title: string;
//   published: boolean;
// }

export async function GET(): Promise<NextResponse> {
  const baseUrl = 'https://jaspermayone.com';
  
  try {
    // Get all page files from your app directory
    const pagesDirectory = path.join(process.cwd(), 'src','app');
    const staticRoutes = getRoutes(pagesDirectory);
    
    // Fetch dynamic content
    const dynamicRoutes = await getDynamicRoutes();
    
    const allRoutes: Route[] = [...staticRoutes, ...dynamicRoutes];
    
    const urls = allRoutes.map(route => createUrlEntry(baseUrl, route)).join('');

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

function getRoutes(dir: string, basePath: string = ''): Route[] {
  const routes: Route[] = [];
  
  if (!fs.existsSync(dir)) {
    return routes;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    try {
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && shouldIncludeDirectory(file)) {
        routes.push(...getRoutes(filePath, `${basePath}/${file}`));
      } else if (isPageFile(file)) {
        const route: Route = {
          path: basePath || '/',
          lastmod: stat.mtime.toISOString(),
          changefreq: getChangeFrequency(basePath),
          priority: getPriority(basePath)
        };
        routes.push(route);
      }
    } catch (error) {
      console.warn(`Error processing file ${filePath}:`, error);
    }
  });
  
  return routes;
}

function shouldIncludeDirectory(dirname: string): boolean {
  // Exclude Next.js special directories and hidden folders
  const excludedDirs = ['_', '.', 'api', 'globals', 'favicon'];
  return !excludedDirs.some(excluded => dirname.startsWith(excluded));
}

function isPageFile(filename: string): boolean {
  // Next.js App Router page files
  const pageFiles = ['page.tsx', 'page.ts', 'page.jsx', 'page.js'];
  return pageFiles.includes(filename);
}

function getChangeFrequency(path: string): Route['changefreq'] {
  if (path === '' || path === '/') return 'daily';
//   if (path.includes('/blog/')) return 'monthly';
  return 'weekly';
}

function getPriority(path: string): string {
  if (path === '' || path === '/') return '1.0';
//   if (path.includes('/blog/')) return '0.6';
  if (path.includes('/about') || path.includes('/contact') || path.includes('/verify')) return '0.9';
  return '0.7';
}

async function getDynamicRoutes(): Promise<Route[]> {
  const routes: Route[] = [];
  
  try {
    // Fetch blog posts
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
  } catch (error) {
    console.warn('Error fetching dynamic routes:', error);
  }
  
  return routes;
}

function createUrlEntry(baseUrl: string, route: Route): string {
  return `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}

// // Mock data fetching functions - replace with your actual implementations
// async function fetchBlogPosts(): Promise<BlogPost[]> {
//   // Replace with your actual API call or database query
//   try {
//     const response = await fetch('https://api.yoursite.com/posts', {
//       next: { revalidate: 3600 } // Cache for 1 hour
//     });
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const posts: BlogPost[] = await response.json();
//     return posts;
//   } catch (error) {
//     console.warn('Failed to fetch blog posts:', error);
//     // Return mock data or empty array
//     return [
//       {
//         slug: 'sample-post',
//         title: 'Sample Post',
//         updatedAt: new Date().toISOString(),
//         published: true
//       }
//     ];
//   }
// }

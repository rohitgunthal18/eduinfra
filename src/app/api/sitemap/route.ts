import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://eduinfra.vercel.app/</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/admin</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/rohit-gunthal-developer</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/react-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/python-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/machine-learning-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/blockchain-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/btech-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/mca-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eduinfra.vercel.app/mumbai-final-year-project-developer</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 
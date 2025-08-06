import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Main Homepage - Rohit Gunthal Final Year Projects -->
  <url>
    <loc>https://eduinfra.vercel.app/</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://eduinfra.vercel.app/og-image.svg</image:loc>
      <image:title>Rohit Gunthal - Expert Final Year Projects Developer</image:title>
      <image:caption>Premium final year projects by Rohit Gunthal. 500+ successful deliveries.</image:caption>
    </image:image>
  </url>

  <!-- Admin Dashboard - Rohit Gunthal Admin Portal -->
  <url>
    <loc>https://eduinfra.vercel.app/admin</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Legal Pages -->
  <url>
    <loc>https://eduinfra.vercel.app/privacy-policy</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/terms-of-service</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/refund-policy</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Developer Branding Pages -->
  <url>
    <loc>https://eduinfra.vercel.app/rohit-gunthal-developer</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/rohit-gunthal-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/eduinfra-rohit-gunthal-founder</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Technology-Specific Project Pages -->
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
    <loc>https://eduinfra.vercel.app/java-final-year-projects</loc>
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
    <loc>https://eduinfra.vercel.app/flutter-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/nodejs-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/mern-stack-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/php-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/django-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Popular Project Categories -->
  <url>
    <loc>https://eduinfra.vercel.app/ecommerce-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/hospital-management-system-project</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/library-management-system-project</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/school-management-system-project</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/online-shopping-website-project</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/social-media-website-project</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/chat-application-project</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/online-examination-system-project</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Course-Specific Pages -->
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
    <loc>https://eduinfra.vercel.app/cse-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/bca-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/msc-cs-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Location-Based Pages -->
  <url>
    <loc>https://eduinfra.vercel.app/mumbai-final-year-project-developer</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/maharashtra-final-year-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/india-final-year-project-developer</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Service Pages -->
  <url>
    <loc>https://eduinfra.vercel.app/ready-made-projects</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/custom-project-development</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/project-documentation</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/project-support</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Contact and About Pages -->
  <url>
    <loc>https://eduinfra.vercel.app/contact-rohit-gunthal</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/about-rohit-gunthal</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/portfolio-rohit-gunthal</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog/Content Pages -->
  <url>
    <loc>https://eduinfra.vercel.app/final-year-project-ideas</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/project-selection-guide</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://eduinfra.vercel.app/technology-trends-2024</loc>
    <lastmod>2024-12-26T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 
'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

export default function SEOHead({
  title = "Rohit Gunthal | Premium Final Year Projects Developer | Ready Made CSE BTech MCA Projects with Source Code",
  description = "Rohit Gunthal - Expert Final Year Project Developer & Creator. Get premium CSE, BTech, MCA projects with complete source code by Rohit Gunthal. 500+ successful projects delivered. Author of innovative educational solutions. Mumbai-based developer specializing in React, Python, ML, Blockchain projects. 🚀",
  keywords = "Rohit Gunthal, final year projects, React projects, Python projects, machine learning projects, blockchain projects, BTech projects, MCA projects, CSE projects, project developer, source code, documentation, Mumbai developer, EduInfra",
  canonical = "https://eduinfra.vercel.app",
  ogImage = "https://eduinfra.vercel.app/og-image.svg",
  ogType = "website",
  twitterCard = "summary_large_image",
  author = "Rohit Gunthal",
  publishedTime,
  modifiedTime,
  section = "Education Technology",
  tags = ["final year projects", "Rohit Gunthal", "EduInfra", "React", "Python", "Machine Learning"],
  noIndex = false,
  noFollow = false
}: SEOHeadProps) {
  const robots = noIndex || noFollow ? `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}` : 'index, follow';
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Rohit Gunthal - Premium Final Year Projects Developer" />
      <meta property="og:site_name" content="EduInfra - Final Year Project Solutions by Rohit Gunthal" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@xrohia" />
      <meta name="twitter:creator" content="@xrohia" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Rohit Gunthal - Premium Final Year Projects Developer" />

      {/* Article Meta Tags (if applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:author" content={author} />
      <meta property="article:section" content={section} />
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="EduInfra" />
      <meta name="apple-mobile-web-app-title" content="EduInfra" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Developer Information */}
      <meta name="developer" content="Rohit Gunthal" />
      <meta name="developer:name" content="Rohit Gunthal" />
      <meta name="developer:email" content="eduinfra.contact@gmail.com" />
      <meta name="developer:phone" content="+91-8408088454" />
      <meta name="developer:company" content="EduInfra Solutions" />
      <meta name="developer:role" content="Founder & Lead Developer" />

      {/* Contact Information */}
      <meta name="contact:email" content="eduinfra.contact@gmail.com" />
      <meta name="contact:phone" content="+91-8408088454" />
      <meta name="contact:developer" content="Rohit Gunthal" />

      {/* Business Information */}
      <meta name="business:name" content="EduInfra Solutions" />
      <meta name="business:founder" content="Rohit Gunthal" />
      <meta name="business:contact_data:email" content="eduinfra.contact@gmail.com" />
      <meta name="business:contact_data:phone_number" content="+91-8408088454" />
      <meta name="business:contact_data:website" content="https://eduinfra.vercel.app" />

      {/* Educational Metadata */}
      <meta name="education:instructor" content="Rohit Gunthal" />
      <meta name="education:provider" content="Rohit Gunthal - EduInfra Solutions" />
      <meta name="education:grade_levels" content="Undergraduate, Graduate, BTech, BE, MCA, MSC, Engineering Students" />

      {/* Geographic Information */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />

      {/* Service Information */}
      <meta name="service:provider" content="Rohit Gunthal" />
      <meta name="service:expert" content="Rohit Gunthal - Final Year Project Developer" />
      <meta name="service:type" content="Educational Technology Services" />

      {/* Rating and Reviews */}
      <meta name="rating:average" content="4.9" />
      <meta name="rating:best" content="5" />
      <meta name="rating:count" content="500+" />

      {/* Structured Data for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rohit Gunthal",
            "jobTitle": "Founder & Lead Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "EduInfra Solutions"
            },
            "description": "Expert Final Year Project Developer specializing in React, Python, Machine Learning, and Blockchain projects. 500+ successful projects delivered.",
            "url": "https://eduinfra.vercel.app",
            "email": "eduinfra.contact@gmail.com",
            "telephone": "+91-8408088454",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://linkedin.com/in/xrohia",
              "https://twitter.com/xrohia",
              "https://instagram.com/xrohia"
            ],
            "knowsAbout": [
              "Final Year Projects",
              "React Development",
              "Python Programming",
              "Machine Learning",
              "Blockchain Development",
              "Web Development",
              "Mobile App Development"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Final Year Project Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "React.js Final Year Project"
                  },
                  "price": "5999",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Python Django Project"
                  },
                  "price": "4999",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Project"
                  },
                  "price": "8999",
                  "priceCurrency": "INR"
                }
              ]
            }
          })
        }}
      />

      {/* Additional Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EduInfra Solutions",
            "alternateName": ["EduInfra", "EduInfra by Rohit Gunthal"],
            "description": "Premium final year project solutions for Computer Science, BTech, MCA, BE students with complete source code and documentation.",
            "url": "https://eduinfra.vercel.app",
            "logo": "https://eduinfra.vercel.app/favicon.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8408088454",
              "email": "eduinfra.contact@gmail.com",
              "contactType": "Customer Service",
              "name": "Rohit Gunthal - Expert Developer"
            },
            "founder": {
              "@type": "Person",
              "name": "Rohit Gunthal"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://linkedin.com/in/xrohia",
              "https://twitter.com/xrohia",
              "https://instagram.com/xrohia"
            ]
          })
        }}
      />
    </Head>
  );
} 
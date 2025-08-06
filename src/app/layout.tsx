import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Final Year Projects | Ready Made CSE BTech MCA Projects with Source Code | Rohit Gunthal",
  description: "Get premium final year projects for Computer Science, BTech, MCA, BE students. Ready-made projects with complete source code, documentation & deployment. React, Python, Django, Flutter, Machine Learning, Blockchain projects available. Guaranteed A+ grades. 🚀",
  keywords: [
    // Primary Keywords
    "final year project", "final year projects for computer science", "ready made projects", 
    "college project source code", "BE project", "BTech final year project", "MCA project",
    "software engineering project", "computer science project", "engineering project",
    
    // Technology Specific
    "React final year project", "Python Django project", "Node.js project", "Flutter app project",
    "machine learning project", "blockchain project", "Android app project", "web development project",
    "MERN stack project", "full stack project", "database project", "AI project", "data science project",
    
    // Intent Based
    "final year project with source code", "ready to submit project", "project with documentation",
    "final year project help", "best final year project ideas", "buy final year project",
    "complete final year project", "final year project assistance", "premium projects",
    
    // Location Based
    "final year project India", "BTech project Mumbai", "computer science project Delhi",
    "engineering project Pune", "college project Bangalore", "student project Chennai",
    
    // Academic Terms
    "synopsis", "project report", "project presentation", "project demo", "project defense",
    "academic project", "student project", "college assignment", "university project",
    
    // Problem-Solution Keywords
    "project deadline help", "last minute project", "urgent project delivery", "project rescue",
    "failed project recovery", "project consultation", "project mentoring", "code review",
    
    // Quality Indicators
    "A+ grade project", "high quality project", "professional project", "industry standard project",
    "plagiarism free project", "original project", "tested project", "working project",
    
    // Developer Keywords
    "Rohit Gunthal projects", "EduInfra projects", "student developer", "project developer Mumbai"
  ].join(", "),
  authors: [{ name: "Rohit Gunthal", url: "https://eduinfra.dev" }],
  creator: "Rohit Gunthal",
  publisher: "EduInfra Solutions",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://eduinfra.dev',
    siteName: 'EduInfra - Final Year Project Solutions',
    title: 'Premium Final Year Projects | CSE BTech MCA | Source Code + Documentation',
    description: 'Get A+ grade final year projects for Computer Science, BTech, MCA students. Complete source code, documentation, deployment guide. React, Python, ML, Blockchain projects. 💯 Success Rate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EduInfra Final Year Projects - Premium Computer Science Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eduinfra',
    creator: '@rohitgunthal',
    title: 'Final Year Projects with Source Code | EduInfra',
    description: 'Premium BTech, MCA, CSE final year projects. React, Python, ML, Blockchain. Complete with source code & documentation. Get A+ grades! 🎓',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://eduinfra.dev',
  },
  category: 'Education Technology',
  classification: 'Educational Services',
  other: {
    // Developer Contact Information
    'contact:email': 'rohitgunthal1819@gmail.com',
    'contact:phone': '+91-8408088454',
    'developer': 'Rohit Gunthal',
    'developer:email': 'rohitgunthal1819@gmail.com',
    'developer:phone': '+91-8408088454',
    'company': 'EduInfra Solutions',
    
    // Copyright and Legal
    'copyright': '© 2024 EduInfra Solutions. All Rights Reserved. Developed by Rohit Gunthal.',
    'legal:license': 'Proprietary Software - All Rights Reserved',
    'legal:terms': 'https://eduinfra.dev/terms',
    'legal:privacy': 'https://eduinfra.dev/privacy',
    
    // Business Information
    'business:contact_data:street_address': 'Mumbai, Maharashtra, India',
    'business:contact_data:locality': 'Mumbai',
    'business:contact_data:region': 'Maharashtra',
    'business:contact_data:postal_code': '400001',
    'business:contact_data:country_name': 'India',
    'business:contact_data:email': 'rohitgunthal1819@gmail.com',
    'business:contact_data:phone_number': '+91-8408088454',
    'business:contact_data:website': 'https://eduinfra.dev',
    
    // Educational Metadata
    'education:institution_type': 'Educational Technology Provider',
    'education:subjects': 'Computer Science, Software Engineering, Web Development, Mobile Development, Data Science, Machine Learning, Blockchain',
    'education:grade_levels': 'Undergraduate, Graduate, BTech, BE, MCA, MSC, Engineering Students',
    'education:language': 'English, Hindi',
    
    // Technical SEO
    'theme-color': '#3b82f6',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    
    // Structured Data Hints
    'organization:name': 'EduInfra Solutions',
    'organization:founder': 'Rohit Gunthal',
    'organization:email': 'rohitgunthal1819@gmail.com',
    'organization:phone': '+91-8408088454',
    'organization:address': 'Mumbai, Maharashtra, India',
    'organization:type': 'Educational Technology Company',
    
    // Rich Snippets Support
    'price:currency': 'INR',
    'price:range': '₹2,999 - ₹25,999',
    'rating:average': '4.9',
    'rating:best': '5',
    'rating:count': '500+',
    'availability': 'in-stock',
    'delivery:method': 'digital',
    'delivery:time': '24-48 hours',
    
    // Local SEO
    'geo:region': 'IN-MH',
    'geo:placename': 'Mumbai',
    'geo:position': '19.0760;72.8777',
    'ICBM': '19.0760, 72.8777',
    
    // Copyright Notice
    'X-Copyright': '© 2024 EduInfra Solutions - Developed by Rohit Gunthal (rohitgunthal1819@gmail.com, +91-8408088454). This code and all associated intellectual property are protected by copyright law. Unauthorized reproduction, distribution, or modification is strictly prohibited.',
    'X-Developer-Info': 'Rohit Gunthal | Email: rohitgunthal1819@gmail.com | Phone: +91-8408088454 | Company: EduInfra Solutions',
    'X-Legal-Notice': 'This website and its source code are proprietary and copyrighted material of EduInfra Solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://eduinfra.dev/#organization",
                  "name": "EduInfra Solutions",
                  "alternateName": "EduInfra",
                  "description": "Premium final year project solutions for Computer Science, BTech, MCA, BE students with complete source code and documentation.",
                  "url": "https://eduinfra.dev",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://eduinfra.dev/logo.png",
                    "width": 200,
                    "height": 200
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-8408088454",
                    "email": "rohitgunthal1819@gmail.com",
                    "contactType": "Customer Service",
                    "availableLanguage": ["English", "Hindi"],
                    "areaServed": "IN"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "postalCode": "400001",
                    "addressCountry": "IN"
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "Rohit Gunthal",
                    "email": "rohitgunthal1819@gmail.com",
                    "telephone": "+91-8408088454",
                    "jobTitle": "Founder & Lead Developer",
                    "worksFor": {
                      "@type": "Organization",
                      "name": "EduInfra Solutions"
                    }
                  },
                  "sameAs": [
                    "https://linkedin.com/in/rohitgunthal",
                    "https://github.com/rohitgunthal",
                    "https://twitter.com/rohitgunthal"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://eduinfra.dev/#website",
                  "url": "https://eduinfra.dev",
                  "name": "EduInfra - Final Year Project Solutions",
                  "description": "Get premium final year projects for Computer Science, BTech, MCA students with complete source code and documentation.",
                  "publisher": {
                    "@id": "https://eduinfra.dev/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://eduinfra.dev/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://eduinfra.dev/#educational-service",
                  "name": "EduInfra Solutions",
                  "description": "Educational technology provider specializing in final year projects for engineering students.",
                  "url": "https://eduinfra.dev",
                  "serviceType": "Educational Technology Services",
                  "areaServed": "India",
                  "audience": {
                    "@type": "EducationalAudience",
                    "educationalRole": "Student",
                    "audienceType": ["BTech Students", "MCA Students", "BE Students", "Computer Science Students"]
                  }
                },
                {
                  "@type": "Service",
                  "name": "Final Year Project Development",
                  "description": "Complete final year project solutions with source code, documentation, and deployment for Computer Science students.",
                  "provider": {
                    "@id": "https://eduinfra.dev/#organization"
                  },
                  "serviceType": "Educational Software Development",
                  "areaServed": "India",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Final Year Projects",
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
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Flutter Mobile App"
                        },
                        "price": "7999",
                        "priceCurrency": "INR"
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "500"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://eduinfra.dev/#webpage",
                  "url": "https://eduinfra.dev",
                  "name": "Final Year Projects | Ready Made CSE BTech MCA Projects with Source Code",
                  "isPartOf": {
                    "@id": "https://eduinfra.dev/#website"
                  },
                  "about": {
                    "@id": "https://eduinfra.dev/#organization"
                  },
                  "description": "Get premium final year projects for Computer Science, BTech, MCA, BE students. Ready-made projects with complete source code, documentation & deployment.",
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://eduinfra.dev"
                      }
                    ]
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "name": "EduInfra Solutions",
                  "description": "Premium final year project development service for engineering students in Mumbai, India.",
                  "url": "https://eduinfra.dev",
                  "telephone": "+91-8408088454",
                  "email": "rohitgunthal1819@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "19.0760",
                    "longitude": "72.8777"
                  },
                  "openingHours": "Mo-Sa 09:00-21:00",
                  "priceRange": "₹₹₹",
                  "paymentAccepted": ["UPI", "Net Banking", "Credit Card", "Debit Card"],
                  "currenciesAccepted": "INR"
                }
              ]
            })
          }}
        />
        
        {/* Copyright and Developer Information */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Copyright Protection Notice
              console.log("%c🔒 COPYRIGHT PROTECTED", "color: #ff4444; font-size: 20px; font-weight: bold;");
              console.log("%c© 2024 EduInfra Solutions - All Rights Reserved", "color: #333; font-size: 14px;");
              console.log("%cDeveloped by: Rohit Gunthal", "color: #0066cc; font-size: 14px;");
              console.log("%cContact: rohitgunthal1819@gmail.com | +91-8408088454", "color: #0066cc; font-size: 12px;");
              console.log("%c⚠️  Unauthorized reproduction or distribution is strictly prohibited", "color: #ff4444; font-size: 12px;");
              
              // Disable right-click context menu
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                console.log('Right-click disabled - Content is copyrighted by EduInfra Solutions');
              });
              
              // Disable text selection for copyright protection
              document.addEventListener('selectstart', function(e) {
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                  e.preventDefault();
                }
              });
              
              // Developer watermark
              window.DEVELOPER_INFO = {
                name: "Rohit Gunthal",
                email: "rohitgunthal1819@gmail.com",
                phone: "+91-8408088454",
                company: "EduInfra Solutions",
                website: "https://eduinfra.dev",
                copyright: "© 2024 All Rights Reserved"
              };
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Apply focus-visible polyfill behavior
              (function() {
                function applyFocusVisiblePolyfill(scope) {
                  var hadKeyboardEvent = true;
                  var keyboardThrottleTimeout = 0;
                  
                  function onKeyDown() {
                    hadKeyboardEvent = true;
                  }
                  
                  function onPointerDown() {
                    hadKeyboardEvent = false;
                  }
                  
                  function onFocus(e) {
                    if (hadKeyboardEvent || e.target.matches(':focus-visible')) {
                      scope.classList.add('js-focus-visible');
                    }
                  }
                  
                  function onBlur() {
                    scope.classList.remove('js-focus-visible');
                  }
                  
                  scope.addEventListener('keydown', onKeyDown, true);
                  scope.addEventListener('mousedown', onPointerDown, true);
                  scope.addEventListener('pointerdown', onPointerDown, true);
                  scope.addEventListener('touchstart', onPointerDown, true);
                  scope.addEventListener('focus', onFocus, true);
                  scope.addEventListener('blur', onBlur, true);
                }
                
                applyFocusVisiblePolyfill(document.documentElement);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col smooth-scroll`}
      >
        {children}
      </body>
    </html>
  );
}

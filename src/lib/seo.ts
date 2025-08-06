// SEO Utility Functions for EduInfra - Rohit Gunthal
// Comprehensive SEO helpers for better search engine optimization

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: 'website' | 'article' | 'profile';
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  author: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

// Default SEO configuration
export const defaultSEO: SEOConfig = {
  title: "Rohit Gunthal | Premium Final Year Projects Developer | Ready Made CSE BTech MCA Projects with Source Code",
  description: "Rohit Gunthal - Expert Final Year Project Developer & Creator. Get premium CSE, BTech, MCA projects with complete source code by Rohit Gunthal. 500+ successful projects delivered. Author of innovative educational solutions. Mumbai-based developer specializing in React, Python, ML, Blockchain projects. 🚀",
  keywords: [
    "Rohit Gunthal",
    "final year projects",
    "React projects",
    "Python projects",
    "machine learning projects",
    "blockchain projects",
    "BTech projects",
    "MCA projects",
    "CSE projects",
    "project developer",
    "source code",
    "documentation",
    "Mumbai developer",
    "EduInfra"
  ],
  canonical: "https://eduinfra.vercel.app",
  ogImage: "https://eduinfra.vercel.app/og-image.svg",
  ogType: "website",
  twitterCard: "summary_large_image",
  author: "Rohit Gunthal",
  section: "Education Technology",
  tags: ["final year projects", "Rohit Gunthal", "EduInfra", "React", "Python", "Machine Learning"]
};

// Technology-specific SEO configurations
export const technologySEO = {
  react: {
    title: "React.js Final Year Projects by Rohit Gunthal | MERN Stack Development",
    description: "Get premium React.js final year projects with complete source code by Rohit Gunthal. MERN stack applications, modern UI/UX, and full-stack development. 500+ successful React projects delivered.",
    keywords: ["React.js projects", "MERN stack", "React development", "Rohit Gunthal React", "React final year project"]
  },
  python: {
    title: "Python Final Year Projects by Rohit Gunthal | Django Flask Development",
    description: "Premium Python final year projects with Django, Flask, and machine learning by Rohit Gunthal. Complete source code, documentation, and deployment. Expert Python development services.",
    keywords: ["Python projects", "Django projects", "Flask projects", "Rohit Gunthal Python", "Python final year project"]
  },
  machineLearning: {
    title: "Machine Learning Final Year Projects by Rohit Gunthal | AI ML Development",
    description: "Advanced machine learning final year projects by Rohit Gunthal. AI, deep learning, computer vision, NLP projects with complete implementation and documentation.",
    keywords: ["Machine learning projects", "AI projects", "deep learning", "Rohit Gunthal ML", "ML final year project"]
  },
  blockchain: {
    title: "Blockchain Final Year Projects by Rohit Gunthal | Cryptocurrency Development",
    description: "Innovative blockchain final year projects by Rohit Gunthal. Smart contracts, cryptocurrency, DeFi applications with complete source code and documentation.",
    keywords: ["Blockchain projects", "smart contracts", "cryptocurrency", "Rohit Gunthal blockchain", "blockchain final year project"]
  },
  flutter: {
    title: "Flutter Final Year Projects by Rohit Gunthal | Mobile App Development",
    description: "Cross-platform mobile app development with Flutter by Rohit Gunthal. Complete final year projects with source code, documentation, and app store deployment.",
    keywords: ["Flutter projects", "mobile app development", "cross-platform", "Rohit Gunthal Flutter", "Flutter final year project"]
  }
};

// Course-specific SEO configurations
export const courseSEO = {
  btech: {
    title: "BTech Final Year Projects by Rohit Gunthal | Engineering Project Solutions",
    description: "Premium BTech final year projects by Rohit Gunthal. Computer Science, IT, and engineering projects with complete source code, documentation, and deployment.",
    keywords: ["BTech projects", "engineering projects", "computer science", "Rohit Gunthal BTech", "BTech final year project"]
  },
  mca: {
    title: "MCA Final Year Projects by Rohit Gunthal | Master's Project Solutions",
    description: "Advanced MCA final year projects by Rohit Gunthal. Master's level computer applications projects with complete implementation and documentation.",
    keywords: ["MCA projects", "master's projects", "computer applications", "Rohit Gunthal MCA", "MCA final year project"]
  },
  cse: {
    title: "CSE Final Year Projects by Rohit Gunthal | Computer Science Engineering",
    description: "Comprehensive CSE final year projects by Rohit Gunthal. Computer Science Engineering projects with modern technologies and complete documentation.",
    keywords: ["CSE projects", "computer science engineering", "software engineering", "Rohit Gunthal CSE", "CSE final year project"]
  }
};

// Location-specific SEO configurations
export const locationSEO = {
  mumbai: {
    title: "Mumbai Final Year Project Developer | Rohit Gunthal | Local Project Solutions",
    description: "Local final year project developer in Mumbai - Rohit Gunthal. Face-to-face consultation, quick delivery, and personalized project solutions for Mumbai students.",
    keywords: ["Mumbai developer", "local project developer", "Mumbai final year projects", "Rohit Gunthal Mumbai"]
  },
  maharashtra: {
    title: "Maharashtra Final Year Projects by Rohit Gunthal | State-wide Project Solutions",
    description: "Comprehensive final year project solutions across Maharashtra by Rohit Gunthal. Serving all major cities with quality project development and support.",
    keywords: ["Maharashtra projects", "state-wide developer", "Maharashtra final year projects", "Rohit Gunthal Maharashtra"]
  },
  india: {
    title: "India's Leading Final Year Project Developer | Rohit Gunthal | Nationwide Services",
    description: "India's most trusted final year project developer - Rohit Gunthal. Serving students nationwide with premium project solutions and 24/7 support.",
    keywords: ["India developer", "nationwide services", "Indian project developer", "Rohit Gunthal India"]
  }
};

// Helper function to generate SEO configuration
export function generateSEO(config: Partial<SEOConfig> = {}): SEOConfig {
  return {
    ...defaultSEO,
    ...config,
    keywords: [...defaultSEO.keywords, ...(config.keywords || [])]
  };
}

// Helper function to generate technology-specific SEO
export function getTechnologySEO(tech: keyof typeof technologySEO): SEOConfig {
  const techConfig = technologySEO[tech];
  return generateSEO({
    title: techConfig.title,
    description: techConfig.description,
    keywords: techConfig.keywords,
    canonical: `${defaultSEO.canonical}/${tech}-final-year-projects`
  });
}

// Helper function to generate course-specific SEO
export function getCourseSEO(course: keyof typeof courseSEO): SEOConfig {
  const courseConfig = courseSEO[course];
  return generateSEO({
    title: courseConfig.title,
    description: courseConfig.description,
    keywords: courseConfig.keywords,
    canonical: `${defaultSEO.canonical}/${course}-final-year-projects`
  });
}

// Helper function to generate location-specific SEO
export function getLocationSEO(location: keyof typeof locationSEO): SEOConfig {
  const locationConfig = locationSEO[location];
  return generateSEO({
    title: locationConfig.title,
    description: locationConfig.description,
    keywords: locationConfig.keywords,
    canonical: `${defaultSEO.canonical}/${location}-final-year-project-developer`
  });
}

// Helper function to generate structured data
export function generateStructuredData(type: 'Person' | 'Organization' | 'Service' | 'WebSite') {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type
  };

  switch (type) {
    case 'Person':
      return {
        ...baseData,
        name: "Rohit Gunthal",
        jobTitle: "Founder & Lead Developer",
        worksFor: {
          "@type": "Organization",
          name: "EduInfra Solutions"
        },
        description: "Expert Final Year Project Developer specializing in React, Python, Machine Learning, and Blockchain projects. 500+ successful projects delivered.",
        url: "https://eduinfra.vercel.app",
        email: "eduinfra.contact@gmail.com",
        telephone: "+91-8408088454",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN"
        },
        sameAs: [
          "https://linkedin.com/in/xrohia",
          "https://twitter.com/xrohia",
          "https://instagram.com/xrohia"
        ],
        knowsAbout: [
          "Final Year Projects",
          "React Development",
          "Python Programming",
          "Machine Learning",
          "Blockchain Development",
          "Web Development",
          "Mobile App Development"
        ]
      };

    case 'Organization':
      return {
        ...baseData,
        name: "EduInfra Solutions",
        alternateName: ["EduInfra", "EduInfra by Rohit Gunthal"],
        description: "Premium final year project solutions for Computer Science, BTech, MCA, BE students with complete source code and documentation.",
        url: "https://eduinfra.vercel.app",
        logo: "https://eduinfra.vercel.app/favicon.svg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8408088454",
          email: "eduinfra.contact@gmail.com",
          contactType: "Customer Service",
          name: "Rohit Gunthal - Expert Developer"
        },
        founder: {
          "@type": "Person",
          name: "Rohit Gunthal"
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN"
        },
        sameAs: [
          "https://linkedin.com/in/xrohia",
          "https://twitter.com/xrohia",
          "https://instagram.com/xrohia"
        ]
      };

    case 'Service':
      return {
        ...baseData,
        name: "Final Year Project Development",
        description: "Complete final year project solutions with source code, documentation, and deployment for Computer Science students.",
        provider: {
          "@type": "Organization",
          name: "EduInfra Solutions"
        },
        serviceType: "Educational Software Development",
        areaServed: "India",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Final Year Projects",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "React.js Final Year Project"
              },
              price: "5999",
              priceCurrency: "INR"
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Python Django Project"
              },
              price: "4999",
              priceCurrency: "INR"
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Machine Learning Project"
              },
              price: "8999",
              priceCurrency: "INR"
            }
          ]
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "500"
        }
      };

    case 'WebSite':
      return {
        ...baseData,
        url: "https://eduinfra.vercel.app",
        name: "EduInfra - Final Year Project Solutions",
        description: "Get premium final year projects for Computer Science, BTech, MCA students with complete source code and documentation.",
        publisher: {
          "@type": "Organization",
          name: "EduInfra Solutions"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://eduinfra.vercel.app/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      };

    default:
      return baseData;
  }
}

// Helper function to validate SEO configuration
export function validateSEO(config: SEOConfig): boolean {
  const requiredFields = ['title', 'description', 'canonical'];
  return requiredFields.every(field => config[field as keyof SEOConfig]);
}

// Helper function to generate meta tags
export function generateMetaTags(config: SEOConfig) {
  const robots = config.noIndex || config.noFollow 
    ? `${config.noIndex ? 'noindex' : 'index'},${config.noFollow ? 'nofollow' : 'follow'}` 
    : 'index, follow';

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    canonical: config.canonical,
    robots,
    author: config.author,
    ogTitle: config.title,
    ogDescription: config.description,
    ogType: config.ogType,
    ogUrl: config.canonical,
    ogImage: config.ogImage,
    twitterCard: config.twitterCard,
    twitterTitle: config.title,
    twitterDescription: config.description,
    twitterImage: config.ogImage
  };
}

// Export all SEO utilities
export const seoUtils = {
  generateSEO,
  getTechnologySEO,
  getCourseSEO,
  getLocationSEO,
  generateStructuredData,
  validateSEO,
  generateMetaTags,
  defaultSEO,
  technologySEO,
  courseSEO,
  locationSEO
}; 
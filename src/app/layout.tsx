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
  title: "Rohit Gunthal | Premium Final Year Projects Developer | Ready Made CSE BTech MCA Projects with Source Code",
  description: "Rohit Gunthal - Expert Final Year Project Developer & Creator. Get premium CSE, BTech, MCA projects with complete source code by Rohit Gunthal. 500+ successful projects delivered. Author of innovative educational solutions. Mumbai-based developer specializing in React, Python, ML, Blockchain projects. 🚀",
  keywords: [
    // Developer/Author Branding (Primary Focus)
    "Rohit Gunthal", "Rohit Gunthal developer", "Rohit Gunthal projects", "Rohit Gunthal portfolio",
    "Rohit Gunthal Mumbai", "Rohit Gunthal software developer", "Rohit Gunthal final year projects",
    "Rohit Gunthal EduInfra", "Rohit Gunthal creator", "Rohit Gunthal author", "Rohit Gunthal engineer",
    "Rohit Gunthal full stack developer", "Rohit Gunthal React developer", "Rohit Gunthal Python developer",
    "Rohit Gunthal machine learning expert", "Rohit Gunthal blockchain developer", "Rohit Gunthal coding",
    "Rohit Gunthal programming", "Rohit Gunthal software engineer", "Rohit Gunthal web developer",
    "Rohit Gunthal mobile app developer", "Rohit Gunthal freelancer", "Rohit Gunthal consultant",
    
    // Company/Service Branding
    "EduInfra by Rohit Gunthal", "EduInfra Solutions Rohit Gunthal", "EduInfra founder Rohit Gunthal",
    "Rohit Gunthal EduInfra founder", "Rohit Gunthal educational technology", "Rohit Gunthal EdTech",
    
    // Primary Keywords with Developer Name
    "final year project by Rohit Gunthal", "Rohit Gunthal final year projects", 
    "ready made projects Rohit Gunthal", "Rohit Gunthal college projects", "Rohit Gunthal student projects",
    "BTech projects by Rohit Gunthal", "MCA projects Rohit Gunthal", "CSE projects Rohit Gunthal",
    
    // Technology Specific with Name
    "React projects Rohit Gunthal", "Python Django Rohit Gunthal", "Node.js projects Rohit Gunthal",
    "Flutter app Rohit Gunthal", "machine learning projects Rohit Gunthal", "blockchain Rohit Gunthal",
    "MERN stack Rohit Gunthal", "full stack projects Rohit Gunthal", "AI projects Rohit Gunthal",
    
    // Location-Based Developer Keywords
    "Rohit Gunthal Mumbai developer", "Mumbai software developer Rohit Gunthal", 
    "Maharashtra developer Rohit Gunthal", "India developer Rohit Gunthal", "Indian programmer Rohit Gunthal",
    "Mumbai freelance developer", "Mumbai project developer", "Mumbai final year project help",
    
    // Core Final Year Project Keywords
    "final year project", "final year projects", "final year project ideas", "final year project topics",
    "computer science final year project", "CSE final year project", "BTech final year project", 
    "MCA final year project", "BE final year project", "engineering final year project",
    "software engineering final year project", "IT final year project", "BCA final year project",
    "MSc CS final year project", "MTech final year project", "diploma final year project",
    
    // Project Categories & Types - Most Searched
    "web development final year project", "mobile app final year project", "machine learning final year project",
    "artificial intelligence final year project", "data science final year project", "blockchain final year project",
    "e-commerce final year project", "management system final year project", "database final year project",
    "network security final year project", "cloud computing final year project", "IoT final year project",
    "android app final year project", "website final year project", "software final year project",
    "game development final year project", "chatbot final year project", "recommendation system final year project",
    
    // Technology Stack Keywords - Most Popular
    "React final year project", "Python final year project", "Java final year project", "PHP final year project",
    "JavaScript final year project", "C++ final year project", "C# final year project", "ASP.NET final year project",
    "Spring Boot final year project", "Django final year project", "Flask final year project", "Laravel final year project",
    "CodeIgniter final year project", "Node.js final year project", "Express.js final year project",
    "Vue.js final year project", "Angular final year project", "Flutter final year project", "React Native final year project",
    "Unity final year project", "TensorFlow final year project", "OpenCV final year project", "Keras final year project",
    
    // Database & Backend Keywords
    "MySQL final year project", "MongoDB final year project", "PostgreSQL final year project", "SQLite final year project",
    "Firebase final year project", "SQL Server final year project", "Oracle final year project",
    "REST API final year project", "GraphQL final year project", "microservices final year project",
    
    // Trending Technology Projects
    "MERN stack final year project", "MEAN stack final year project", "full stack final year project",
    "responsive web design final year project", "Progressive Web App final year project", "PWA final year project",
    "single page application final year project", "SPA final year project", "real-time application final year project",
    "chat application final year project", "video streaming final year project", "social media final year project",
    
    // AI/ML Specific Projects - High Search Volume
    "machine learning project", "deep learning project", "neural network project", "computer vision project",
    "natural language processing project", "NLP project", "image recognition project", "face recognition project",
    "voice recognition project", "sentiment analysis project", "recommendation engine project",
    "fraud detection project", "stock price prediction project", "weather prediction project",
    "disease prediction project", "crop prediction project", "house price prediction project",
    "sales forecasting project", "customer churn prediction project", "email spam detection project",
    
    // Popular Project Ideas Students Search For
    "online shopping website project", "hospital management system project", "library management system project",
    "school management system project", "employee management system project", "inventory management system project",
    "hotel booking system project", "restaurant management system project", "banking system project",
    "ATM management system project", "student information system project", "examination system project",
    "online examination system project", "quiz application project", "learning management system project",
    "e-learning platform project", "online tutoring system project", "job portal project", "recruitment system project",
    
    // E-commerce & Business Projects
    "e-commerce website project", "online store project", "shopping cart project", "payment gateway integration project",
    "multi-vendor marketplace project", "auction website project", "classified ads website project",
    "real estate website project", "car rental system project", "bike rental system project",
    "food delivery app project", "grocery delivery app project", "taxi booking app project", "cab booking system project",
    
    // Communication & Social Projects
    "chat application project", "messaging app project", "video calling app project", "social networking website project",
    "forum website project", "blog website project", "news website project", "content management system project",
    "social media analytics project", "Twitter sentiment analysis project", "Facebook data analysis project",
    
    // Security & Network Projects
    "network security project", "cybersecurity project", "encryption project", "decryption project",
    "firewall project", "intrusion detection system project", "password manager project", "secure login system project",
    "biometric authentication project", "fingerprint recognition project", "face detection project",
    "CAPTCHA system project", "two-factor authentication project", "blockchain security project",
    
    // IoT & Hardware Projects
    "Internet of Things project", "IoT project", "smart home automation project", "home automation system project",
    "smart parking system project", "smart traffic management project", "smart agriculture project",
    "weather monitoring system project", "air quality monitoring project", "smart irrigation system project",
    "health monitoring system project", "fitness tracking app project", "smart city project",
    
    // Data Science & Analytics Projects
    "data analysis project", "data visualization project", "big data project", "data mining project",
    "business intelligence project", "dashboard project", "reporting system project", "analytics project",
    "Excel data analysis project", "Power BI project", "Tableau project", "Google Analytics project",
    "web scraping project", "data extraction project", "ETL project", "data warehouse project",
    
    // Cloud & DevOps Projects
    "cloud computing project", "AWS project", "Azure project", "Google Cloud project", "Docker project",
    "Kubernetes project", "CI/CD project", "DevOps project", "serverless project", "microservices project",
    "API gateway project", "load balancer project", "auto-scaling project", "monitoring project",
    
    // Gaming & Entertainment Projects
    "game development project", "mobile game project", "web game project", "2D game project", "3D game project",
    "puzzle game project", "arcade game project", "strategy game project", "racing game project",
    "educational game project", "quiz game project", "memory game project", "card game project",
    "music streaming app project", "video streaming app project", "movie recommendation project",
    
    // Mobile App Development Projects
    "Android app project", "iOS app project", "cross-platform app project", "hybrid app project",
    "native app project", "Xamarin project", "Ionic project", "Cordova project", "PhoneGap project",
    "mobile UI/UX project", "app design project", "mobile backend project", "push notification project",
    
    // Advanced CS Topics Projects
    "compiler design project", "operating system project", "database management system project",
    "software engineering project", "algorithm visualization project", "data structure project",
    "graph algorithms project", "sorting algorithms project", "searching algorithms project",
    "distributed systems project", "parallel computing project", "grid computing project",
    
    // Industry-Specific Projects
    "healthcare management system project", "telemedicine project", "medical diagnosis project",
    "pharmacy management system project", "appointment booking system project", "patient monitoring project",
    "education management system project", "online learning platform project", "virtual classroom project",
    "finance management project", "accounting software project", "invoice generation project",
    "payroll management system project", "tax calculation project", "budget tracking project",
    
    // Government & Public Service Projects
    "voting system project", "e-governance project", "citizen services portal project", "complaint management system project",
    "traffic management system project", "public transport system project", "waste management system project",
    "water management system project", "electricity billing system project", "municipal services project",
    
    // Startup & Innovation Projects
    "startup idea project", "business plan project", "market research project", "competitive analysis project",
    "user experience project", "user interface project", "product prototype project", "MVP project",
    "lean startup project", "agile development project", "scrum project", "kanban project",
    
    // Academic & Research Projects
    "research project", "thesis project", "dissertation project", "survey project", "case study project",
    "comparative study project", "performance analysis project", "benchmarking project", "optimization project",
    "simulation project", "modeling project", "prototype project", "proof of concept project",
    
    // Search Intent Keywords - What Students Actually Type
    "final year project ideas for computer science", "best final year project topics", "latest final year project ideas",
    "innovative final year project ideas", "unique final year project topics", "creative final year projects",
    "trending final year project ideas", "popular final year project topics", "easy final year project ideas",
    "simple final year project topics", "advanced final year project ideas", "complex final year project topics",
    
    // Problem-Solution Based Searches
    "final year project with source code", "ready made final year project", "complete final year project",
    "final year project download", "final year project with documentation", "final year project with report",
    "final year project with synopsis", "final year project with presentation", "final year project with demo",
    "working final year project", "tested final year project", "bug-free final year project",
    
    // Academic Requirements
    "synopsis", "project report", "project documentation", "project presentation", "project demo",
    "project defense", "project proposal", "project abstract", "project introduction", "project conclusion",
    "literature review", "system design", "implementation", "testing", "results", "future scope",
    
    // Quality & Delivery Keywords
    "A+ grade project", "high quality project", "professional project", "industry standard project",
    "plagiarism free project", "original project", "tested project", "working project",
    "bug free project", "optimized project", "scalable project", "secure project",
    "ready to deploy", "production ready", "well documented", "clean code",
    
    // Contact & Social Keywords
    "eduinfra.contact@gmail.com", "+91-8408088454", "contact Rohit Gunthal",
    "hire Rohit Gunthal", "Rohit Gunthal contact", "Rohit Gunthal phone", "Rohit Gunthal email",
    "Rohit Gunthal WhatsApp", "Rohit Gunthal consultation", "Rohit Gunthal services",
    
    // Competitive Keywords
    "best final year project developer", "top project developer India", "experienced project developer",
    "reliable project developer", "affordable project developer", "quick project delivery",
    "24/7 project support", "project guarantee", "project revision", "project maintenance",
    
    // Long-tail Keywords - High Conversion
    "where to get final year project with source code",
    "how to buy ready made final year project",
    "best developer for final year project in Mumbai",
    "Rohit Gunthal final year project reviews",
    "EduInfra Rohit Gunthal student testimonials",
    "complete final year project solution by Rohit Gunthal",
    "professional final year project development services",
    "custom final year project development Mumbai",
    "final year project help online",
    "final year project assistance India",
    "final year project consultation services",
    "expert final year project developer Mumbai",
    "top rated final year project provider",
    "trusted final year project developer India"
  ].join(", "),
  
  authors: [
    { name: "Rohit Gunthal", url: "https://eduinfra.vercel.app" },
    { name: "Rohit Gunthal - Final Year Project Developer" },
    { name: "Rohit Gunthal - EduInfra Founder" }
  ],
  creator: "Rohit Gunthal - Expert Final Year Project Developer & EduInfra Founder",
  publisher: "EduInfra Solutions by Rohit Gunthal",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/favicon.svg',
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
    url: 'https://eduinfra.vercel.app',
    siteName: 'EduInfra - Final Year Project Solutions by Rohit Gunthal',
    title: '🚀 Get Your Dream Final Year Project | Premium CSE/BTech/MCA Projects with Source Code by Rohit Gunthal',
    description: '✅ 500+ Projects Delivered | ⭐ 95% Success Rate | 🎓 Expert Developer: Rohit Gunthal\n\n🔥 What You Get:\n• Complete Source Code + Documentation\n• Live Demo & Deployment Guide\n• 24/7 Support & Free Revisions\n• React, Python, ML, Blockchain Projects\n\n📞 Contact: +91 8408088454\n📧 Email: eduinfra.contact@gmail.com\n🌐 WhatsApp: wa.me/918408088454\n\n💯 Guaranteed A+ Grades | Ready in 3-5 Days!',
    images: [
      {
        url: 'https://eduinfra.vercel.app/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Rohit Gunthal - Premium Final Year Projects Developer | EduInfra | 500+ Students Success Stories',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xrohia',
    creator: '@xrohia',
    title: '🎓 Rohit Gunthal | Expert Final Year Projects Developer | Premium Source Code Solutions',
    description: '🚀 Rohit Gunthal - Expert Developer\n✅ 500+ Projects Delivered | ⭐ 95% Success Rate\n🔥 React, Python, ML, Blockchain by Rohit Gunthal\n📞 +91 8408088454 | 💬 WhatsApp Ready!\n💯 A+ Grades Guaranteed by Rohit Gunthal!',
    images: ['https://eduinfra.vercel.app/twitter-image.svg'],
  },
  alternates: {
    canonical: 'https://eduinfra.vercel.app',
  },
  category: 'Education Technology',
  classification: 'Educational Services by Rohit Gunthal',
  other: {
    // Developer Contact Information - Rohit Gunthal Emphasis
    'developer': 'Rohit Gunthal - Expert Final Year Project Developer',
    'developer:name': 'Rohit Gunthal',
    'developer:email': 'eduinfra.contact@gmail.com',
    'developer:phone': '+91-8408088454',
    'developer:location': 'Mumbai, Maharashtra, India',
    'developer:company': 'EduInfra Solutions',
    'developer:role': 'Founder & Lead Developer',
    'developer:expertise': 'Final Year Projects, React, Python, Machine Learning, Blockchain',
    'contact:email': 'eduinfra.contact@gmail.com',
    'contact:phone': '+91-8408088454',
    'contact:developer': 'Rohit Gunthal',
    'company': 'EduInfra Solutions by Rohit Gunthal',
    
    // Author Information
    'author': 'Rohit Gunthal',
    'author:name': 'Rohit Gunthal',
    'author:role': 'Final Year Project Developer & Creator',
    'author:email': 'eduinfra.contact@gmail.com',
    'author:phone': '+91-8408088454',
    'creator:name': 'Rohit Gunthal',
    'creator:role': 'Expert Final Year Project Developer',
    
    // Copyright and Legal - Rohit Gunthal Emphasis
    'copyright': '© 2024 EduInfra Solutions. All Rights Reserved. Developed by Rohit Gunthal.',
    'legal:license': 'Proprietary Software - All Rights Reserved by Rohit Gunthal',
    'legal:terms': 'https://eduinfra.vercel.app/terms-of-service',
    'legal:privacy': 'https://eduinfra.vercel.app/privacy-policy',
    'legal:developer': 'Rohit Gunthal',
    
    // Business Information - Rohit Gunthal Integration
    'business:name': 'EduInfra Solutions',
    'business:founder': 'Rohit Gunthal',
    'business:owner': 'Rohit Gunthal',
    'business:contact_data:street_address': 'Mumbai, Maharashtra, India',
    'business:contact_data:locality': 'Mumbai',
    'business:contact_data:region': 'Maharashtra',
    'business:contact_data:postal_code': '400001',
    'business:contact_data:country_name': 'India',
    'business:contact_data:email': 'eduinfra.contact@gmail.com',
    'business:contact_data:phone_number': '+91-8408088454',
    'business:contact_data:website': 'https://eduinfra.vercel.app',
    'business:contact_data:developer': 'Rohit Gunthal',
    
    // Educational Metadata - Service Provider Information
    'education:institution_type': 'Educational Technology Provider by Rohit Gunthal',
    'education:subjects': 'Computer Science, Software Engineering, Web Development by Rohit Gunthal',
    'education:instructor': 'Rohit Gunthal',
    'education:provider': 'Rohit Gunthal - EduInfra Solutions',
    'education:grade_levels': 'Undergraduate, Graduate, BTech, BE, MCA, MSC, Engineering Students',
    'education:language': 'English, Hindi',
    'education:expert': 'Rohit Gunthal',
    
    // Technical SEO
    'theme-color': '#3b82f6',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    
    // Organization & Founder Information - Rohit Gunthal
    'organization:name': 'EduInfra Solutions',
    'organization:founder': 'Rohit Gunthal',
    'organization:ceo': 'Rohit Gunthal',
    'organization:lead_developer': 'Rohit Gunthal',
    'organization:email': 'eduinfra.contact@gmail.com',
    'organization:phone': '+91-8408088454',
    'organization:address': 'Mumbai, Maharashtra, India',
    'organization:type': 'Educational Technology Company by Rohit Gunthal',
    'organization:established_by': 'Rohit Gunthal',
    
    // Rich Snippets Support
    'price:currency': 'INR',
    'price:range': '₹2,999 - ₹25,999',
    'rating:average': '4.9',
    'rating:best': '5',
    'rating:count': '500+',
    'availability': 'in-stock',
    'delivery:method': 'digital',
    'delivery:time': '24-48 hours',
    'service:provider': 'Rohit Gunthal',
    'service:expert': 'Rohit Gunthal - Final Year Project Developer',
    
    // Local SEO - Developer Location
    'geo:region': 'IN-MH',
    'geo:placename': 'Mumbai',
    'geo:position': '19.0760;72.8777',
    'ICBM': '19.0760, 72.8777',
    'geo:developer': 'Rohit Gunthal Mumbai',
    
    // Personal Branding - Rohit Gunthal
    'personal:name': 'Rohit Gunthal',
    'personal:profession': 'Final Year Project Developer',
    'personal:specialization': 'React, Python, Machine Learning, Blockchain',
    'personal:experience': '500+ Projects Delivered',
    'personal:location': 'Mumbai, Maharashtra, India',
    'personal:email': 'eduinfra.contact@gmail.com',
    'personal:phone': '+91-8408088454',
    'personal:company': 'EduInfra Solutions',
    'personal:role': 'Founder & Lead Developer',
    
    // Professional Keywords
    'profession:developer': 'Rohit Gunthal',
    'profession:programmer': 'Rohit Gunthal',
    'profession:engineer': 'Rohit Gunthal',
    'profession:consultant': 'Rohit Gunthal',
    'profession:freelancer': 'Rohit Gunthal',
    'profession:expert': 'Rohit Gunthal Final Year Projects',
    
    // Copyright Notice - Developer Emphasis
    'X-Copyright': '© 2024 EduInfra Solutions - Developed by Rohit Gunthal (eduinfra.contact@gmail.com, +91-8408088454). This code and all associated intellectual property are protected by copyright law. Unauthorized reproduction, distribution, or modification is strictly prohibited.',
    'X-Developer-Info': 'Rohit Gunthal | Email: eduinfra.contact@gmail.com | Phone: +91-8408088454 | Company: EduInfra Solutions | Expert Final Year Project Developer',
    'X-Legal-Notice': 'This website and its source code are proprietary and copyrighted material of EduInfra Solutions, developed by Rohit Gunthal.',
    'X-Author': 'Rohit Gunthal - Expert Final Year Project Developer',
    'X-Creator': 'Rohit Gunthal - EduInfra Solutions Founder',
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
                  "@id": "https://eduinfra.vercel.app/#organization",
                  "name": "EduInfra Solutions",
                  "alternateName": ["EduInfra", "EduInfra by Rohit Gunthal", "Rohit Gunthal EduInfra"],
                  "description": "Premium final year project solutions for Computer Science, BTech, MCA, BE students with complete source code and documentation. Founded and developed by Rohit Gunthal, expert final year project developer.",
                  "url": "https://eduinfra.vercel.app",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://eduinfra.vercel.app/favicon.svg",
                    "width": 32,
                    "height": 32
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-8408088454",
                    "email": "eduinfra.contact@gmail.com",
                    "contactType": "Customer Service",
                    "availableLanguage": ["English", "Hindi"],
                    "areaServed": "IN",
                    "name": "Rohit Gunthal - Expert Developer"
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
                    "email": "eduinfra.contact@gmail.com",
                    "telephone": "+91-8408088454",
                    "jobTitle": "Founder & Lead Developer",
                    "description": "Expert Final Year Project Developer specializing in React, Python, Machine Learning, and Blockchain projects. 500+ successful projects delivered.",
                    "expertise": ["Final Year Projects", "React Development", "Python Programming", "Machine Learning", "Blockchain Development", "Web Development", "Mobile App Development"],
                    "worksFor": {
                      "@type": "Organization",
                      "name": "EduInfra Solutions"
                    },
                    "nationality": "Indian",
                    "birthPlace": "India",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Mumbai",
                      "addressRegion": "Maharashtra",
                      "addressCountry": "IN"
                    }
                  },
                  "employee": {
                    "@type": "Person",
                    "name": "Rohit Gunthal",
                    "jobTitle": "Founder & Lead Developer"
                  },
                  "sameAs": [
                    "https://linkedin.com/in/xrohia",
                    "https://twitter.com/xrohia",
                    "https://instagram.com/xrohia"
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

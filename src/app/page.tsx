"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define types for project data
interface ProjectFeature {
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  technology: string;
  complexity: string;
  shortDescription: string;
  description: string;
  features: ProjectFeature[];
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  projects: number;
  technologies: string[];
}

// Project Portfolio Data
const projects: Project[] = [
  {
    id: "ecommerce-mern",
    title: "E-commerce Platform",
    category: "Web Development",
    technology: "MERN Stack",
    complexity: "Advanced",
    shortDescription: "Full-featured e-commerce platform with admin panel, payment gateway, and user management.",
    description: "A comprehensive e-commerce solution built with MongoDB, Express.js, React, and Node.js. Features include user authentication, product catalog, shopping cart, order management, payment integration, and admin dashboard.",
    features: [
      { title: "User Authentication", description: "JWT-based secure login and registration system" },
      { title: "Product Management", description: "Complete CRUD operations for products with image upload" },
      { title: "Shopping Cart", description: "Dynamic cart with real-time price calculations" },
      { title: "Payment Gateway", description: "Stripe/PayPal integration for secure payments" },
      { title: "Admin Dashboard", description: "Comprehensive admin panel for order and user management" }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe API"],
    image: "/window.svg"
  },
  {
    id: "social-media-react",
    title: "Social Media Platform",
    category: "Web Development",
    technology: "React + Firebase",
    complexity: "Intermediate",
    shortDescription: "Instagram-like social platform with posts, likes, comments, and real-time chat.",
    description: "A modern social media application with real-time features, built using React and Firebase. Includes post sharing, user interactions, real-time messaging, and responsive design.",
    features: [
      { title: "Real-time Posts", description: "Upload and share posts with images and captions" },
      { title: "User Interactions", description: "Like, comment, and follow system" },
      { title: "Live Chat", description: "Real-time messaging between users" },
      { title: "User Profiles", description: "Customizable user profiles with bio and posts" },
      { title: "Responsive Design", description: "Mobile-first responsive interface" }
    ],
    technologies: ["React.js", "Firebase", "Material-UI", "Cloud Firestore", "Firebase Auth"],
    image: "/globe.svg"
  },
  {
    id: "task-management-vue",
    title: "Project Management Tool",
    category: "Web Development",
    technology: "Vue.js + Laravel",
    complexity: "Advanced",
    shortDescription: "Collaborative project management platform with team features and task tracking.",
    description: "A comprehensive project management solution built with Vue.js frontend and Laravel backend. Features team collaboration, task management, file sharing, and progress tracking.",
    features: [
      { title: "Team Collaboration", description: "Multi-user workspace with role-based permissions" },
      { title: "Task Management", description: "Create, assign, and track tasks with deadlines" },
      { title: "File Sharing", description: "Upload and share project files securely" },
      { title: "Progress Tracking", description: "Visual progress charts and analytics" },
      { title: "Notifications", description: "Real-time notifications for task updates" }
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Vuex", "Bootstrap Vue"],
    image: "/file.svg"
  },
  {
    id: "mobile-todo-react-native",
    title: "Mobile Todo App",
    category: "Mobile Development",
    technology: "React Native",
    complexity: "Basic",
    shortDescription: "Cross-platform mobile app for task management with offline support.",
    description: "A clean and intuitive mobile todo application built with React Native. Features offline functionality, push notifications, and synchronization across devices.",
    features: [
      { title: "Offline Support", description: "Work without internet, sync when connected" },
      { title: "Push Notifications", description: "Reminders for important tasks" },
      { title: "Categories", description: "Organize tasks with custom categories" },
      { title: "Dark Mode", description: "Eye-friendly dark theme option" },
      { title: "Cross-platform", description: "Works on both iOS and Android" }
    ],
    technologies: ["React Native", "AsyncStorage", "Push Notifications", "SQLite"],
    image: "/next.svg"
  },
  {
    id: "data-visualization-python",
    title: "Sales Analytics Dashboard",
    category: "Data Science",
    technology: "Python + Streamlit",
    complexity: "Intermediate",
    shortDescription: "Interactive dashboard for sales data analysis with machine learning predictions.",
    description: "A comprehensive sales analytics platform built with Python and Streamlit. Features data visualization, predictive analytics, and interactive dashboards for business insights.",
    features: [
      { title: "Data Visualization", description: "Interactive charts and graphs using Plotly" },
      { title: "Predictive Analytics", description: "ML models for sales forecasting" },
      { title: "Real-time Updates", description: "Live data refresh and monitoring" },
      { title: "Export Reports", description: "Generate PDF and Excel reports" },
      { title: "User Dashboard", description: "Customizable dashboard layouts" }
    ],
    technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Scikit-learn", "SQLite"],
    image: "/vercel.svg"
  },
  {
    id: "unity-2d-game",
    title: "2D Platformer Game",
    category: "Game Development",
    technology: "Unity + C#",
    complexity: "Intermediate",
    shortDescription: "Engaging 2D platformer game with multiple levels and power-ups.",
    description: "A classic 2D platformer game built with Unity engine. Features multiple levels, character animations, sound effects, and a complete game progression system.",
    features: [
      { title: "Multiple Levels", description: "10+ challenging levels with increasing difficulty" },
      { title: "Character Animation", description: "Smooth sprite animations and transitions" },
      { title: "Sound System", description: "Background music and sound effects" },
      { title: "Power-ups", description: "Collectible items and special abilities" },
      { title: "High Scores", description: "Local leaderboard system" }
    ],
    technologies: ["Unity", "C#", "2D Physics", "Animation System", "Audio Manager"],
    image: "/window.svg"
  }
];

// Services Data
const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Full-stack web applications using modern frameworks and technologies.",
    description: "We build comprehensive web applications using cutting-edge technologies like React, Vue, Angular, Node.js, Laravel, and more. From simple websites to complex web platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600 dark:text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iconBgColor: "bg-blue-100 dark:bg-blue-900/30",
    projects: 50,
    technologies: ["React.js", "Vue.js", "Angular", "Node.js", "Laravel", "Django", "Spring Boot", "ASP.NET"]
  },
  {
    id: "mobile-development", 
    title: "Mobile Development", 
    shortDescription: "Cross-platform and native mobile applications for iOS and Android.",
    description: "Native and cross-platform mobile apps using React Native, Flutter, and native technologies. Complete with backend integration and modern UI/UX design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-purple-600 dark:text-purple-400">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconBgColor: "bg-purple-100 dark:bg-purple-900/30",
    projects: 25,
    technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Firebase", "API Integration"]
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    shortDescription: "Machine learning models, data visualization, and analytics dashboards.",
    description: "Advanced data science projects including machine learning models, predictive analytics, data visualization dashboards, and AI-powered applications.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-green-600 dark:text-green-400">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2z" />
      </svg>
    ),
    iconBgColor: "bg-green-100 dark:bg-green-900/30",
    projects: 20,
    technologies: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "Streamlit", "Tableau", "Power BI"]
  },
  {
    id: "game-development",
    title: "Game Development",
    shortDescription: "2D/3D games using Unity, Unreal Engine, and web-based game frameworks.",
    description: "Engaging games for various platforms including mobile, web, and desktop. From simple 2D games to complex 3D experiences with complete gameplay mechanics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-red-600 dark:text-red-400">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBgColor: "bg-red-100 dark:bg-red-900/30",
    projects: 15,
    technologies: ["Unity", "Unreal Engine", "C#", "C++", "JavaScript", "HTML5 Canvas", "Three.js"]
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showStepInfo, setShowStepInfo] = useState<number | null>(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
  // Add state for approved reviews
  const [approvedReviews, setApprovedReviews] = useState<any[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project_type: '',
    technology: '',
    complexity: '',
    timeline: '',
    budget: '',
    description: '',
    features: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Review form state
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project_title: '',
    rating: 5,
    review_text: ''
  });
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewMessage, setReviewMessage] = useState({ type: '', text: '' });

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'Game Development'];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Fallback testimonials for when no approved reviews exist
  const fallbackTestimonials = [
    {
      name: "Arjun P.",
      role: "CSE, IIT Delhi",
      rating: 5,
      text: "Amazing MERN project! Got 95% marks. Code quality was perfect!",
      avatar: "AP",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Priya S.",
      role: "IT, VIT Vellore", 
      rating: 5,
      text: "React Native app delivered in 4 days. Worked perfectly on both platforms!",
      avatar: "PS",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Rahul K.",
      role: "CSE, NIT Trichy",
      rating: 5,
      text: "ML project was outstanding! Beautiful visualizations and detailed docs.",
      avatar: "RK", 
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Sneha M.",
      role: "CSE, BITS Pilani",
      rating: 5,
      text: "Flutter app with amazing UI. Explained everything perfectly!",
      avatar: "SM",
      gradient: "from-pink-500 to-red-600"
    },
    {
      name: "Vikram A.",
      role: "IT, Anna University",
      rating: 5,
      text: "Django project with perfect documentation. Got A+ grade!",
      avatar: "VA",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  // Function to fetch approved reviews
  const fetchApprovedReviews = async () => {
    try {
      setIsLoadingReviews(true);
      const response = await fetch('/api/reviews/public');
      const data = await response.json();
      
      if (data.reviews && data.reviews.length > 0) {
        // Transform approved reviews to match testimonial format
        const transformedReviews = data.reviews.map((review: any, index: number) => {
          const gradients = [
            "from-blue-500 to-purple-600",
            "from-purple-500 to-pink-600", 
            "from-green-500 to-blue-600",
            "from-pink-500 to-red-600",
            "from-indigo-500 to-purple-600",
            "from-yellow-500 to-orange-600",
            "from-teal-500 to-cyan-600"
          ];
          
          return {
            name: review.name,
            role: review.company || "Verified Customer",
            rating: review.rating,
            text: review.review_text,
            avatar: review.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2),
            gradient: gradients[index % gradients.length],
            project_title: review.project_title
          };
        });
        setApprovedReviews(transformedReviews);
      } else {
        // Use fallback testimonials if no approved reviews
        setApprovedReviews(fallbackTestimonials);
      }
    } catch (error) {
      console.error('Error fetching approved reviews:', error);
      // Use fallback testimonials on error
      setApprovedReviews(fallbackTestimonials);
    } finally {
      setIsLoadingReviews(false);
    }
  };

  // Function to refresh reviews (can be called when needed)
  const refreshReviews = async () => {
    await fetchApprovedReviews();
  };

  // Get the testimonials to display (approved reviews or fallback)
  const testimonials = approvedReviews.length > 0 ? approvedReviews : fallbackTestimonials;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsProjectModalOpen(false);
        setShowStepInfo(null);
        setShowReviewForm(false);
        setShowSuccessModal(false);
      }
    };

    // Fetch approved reviews on component mount
    fetchApprovedReviews();

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Periodically refresh reviews to catch newly approved ones
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      fetchApprovedReviews();
    }, 60000); // Refresh every minute

    return () => clearInterval(refreshInterval);
  }, []);

  // Smooth scroll handler for navigation links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll testimonials - updated to work with dynamic reviews
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReview(true);
    setReviewMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewForm),
      });

      const data = await response.json();

      if (data.success) {
        setReviewMessage({
          type: 'success',
          text: 'Thank you for your review! It will be published after approval.'
        });
        // Reset form
        setReviewForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          project_title: '',
          rating: 5,
          review_text: ''
        });
        // Close the review form
        setShowReviewForm(false);
      } else {
        setReviewMessage({
          type: 'error',
          text: data.error || 'Failed to submit review. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setReviewMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmittingReview(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteForm),
      });

      const data = await response.json();

      if (data.success) {
        // Show beautiful success modal
        setShowSuccessModal(true);
        // Reset form
        setQuoteForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          project_type: '',
          technology: '',
          complexity: '',
          timeline: '',
          budget: '',
          description: '',
          features: ''
        });
        // Auto-hide modal after 5 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 5000);
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.error || 'Failed to submit quote request. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({ ...prev, [name]: value }));
  };

  const handleReviewInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const toggleBackToTop = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', toggleBackToTop);
    return () => window.removeEventListener('scroll', toggleBackToTop);
  }, []);

  // Back to top scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <main className="flex-1">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Simple & Clean Edu Infra Logo */}
            <Link href="#home" className="flex items-center gap-3 group" aria-label="Edu Infra Home">
              <div className={`${scrolled ? 'w-10 h-10 lg:w-11 lg:h-11' : 'w-11 h-11 lg:w-12 lg:h-12'} rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold ${scrolled ? 'text-lg' : 'text-xl'} shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Simple EI Monogram */}
                <div className="relative z-10 font-black tracking-tight">
                  EI
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className={`${scrolled ? 'text-lg lg:text-xl' : 'text-xl lg:text-2xl'} font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent transition-all duration-300 leading-tight tracking-tight`}>
                  Edu Infra
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                  Projects & Solutions
                </span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              <Link 
                href="#home" 
                className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-300 relative group overflow-hidden hover:bg-blue-50 dark:hover:bg-blue-900/20"
                aria-label="Go to Home section"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link 
                href="#services" 
                className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-300 relative group overflow-hidden hover:bg-purple-50 dark:hover:bg-purple-900/20"
                aria-label="Go to Services section"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  Services
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link 
                href="#portfolio" 
                className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all duration-300 relative group overflow-hidden hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                aria-label="Go to Portfolio section"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Portfolio
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link 
                href="#process" 
                className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-semibold transition-all duration-300 relative group overflow-hidden hover:bg-teal-50 dark:hover:bg-teal-900/20"
                aria-label="Go to Process section"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  Process
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-green-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link 
                href="#testimonials" 
                className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-semibold transition-all duration-300 relative group overflow-hidden hover:bg-amber-50 dark:hover:bg-amber-900/20"
                aria-label="Go to Reviews section"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Reviews
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              {/* Enhanced CTA Buttons */}
              <div className="ml-6 flex items-center space-x-3">
                <a 
                  href="https://wa.me/918408088454?text=Hi!%20I%20want%20to%20start%20my%20final%20year%20project" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-xl transition-all duration-300 group border border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg hover:shadow-green-500/20"
                  aria-label="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                <Link 
                  href="#contact" 
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-sm rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 relative overflow-hidden group border border-blue-500/20"
                  aria-label="Get your project started"
                >
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Get Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </nav>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group shadow-md border border-gray-200 dark:border-gray-700"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''} group-hover:bg-blue-600 dark:group-hover:bg-blue-400`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''} group-hover:bg-blue-600 dark:group-hover:bg-blue-400`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} group-hover:bg-blue-600 dark:group-hover:bg-blue-400`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-x-0 top-full transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-8'
        }`}>
          <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* 2x2 Grid Navigation */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Link 
                  href="#home" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-200/50 dark:border-blue-700/50 hover:from-blue-500/20 hover:to-blue-600/10 transition-all duration-400 group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                  aria-label="Go to Home section"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Home</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">Welcome page</span>
                </Link>

                <Link 
                  href="#services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-200/50 dark:border-purple-700/50 hover:from-purple-500/20 hover:to-purple-600/10 transition-all duration-400 group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                  aria-label="Go to Services section"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Services</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">What we offer</span>
                </Link>

                <Link 
                  href="#portfolio" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-200/50 dark:border-indigo-700/50 hover:from-indigo-500/20 hover:to-indigo-600/10 transition-all duration-400 group hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10"
                  aria-label="Go to Portfolio section"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                      <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Portfolio</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">Our work</span>
                </Link>

                <Link 
                  href="#process" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-teal-500/10 to-teal-600/5 border border-teal-200/50 dark:border-teal-700/50 hover:from-teal-500/20 hover:to-teal-600/10 transition-all duration-400 group hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10"
                  aria-label="Go to Process section"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Process</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">How we work</span>
                </Link>
              </div>

              {/* Enhanced Mobile CTA Section */}
              <div className="space-y-4">
                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/918408088454?text=Hi!%20I%20want%20to%20start%20my%20final%20year%20project" 
                  target="_blank"
                  rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-6 py-5 bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-600/20 border border-green-300/50 dark:border-green-700/50 text-green-700 dark:text-green-300 rounded-3xl font-bold transition-all duration-400 hover:from-green-500/30 hover:via-green-500/20 hover:to-green-600/30 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 group"
                  aria-label="Chat on WhatsApp"
                  >
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  💬 Chat on WhatsApp
                  </a>

                {/* Get Project Button - Single Line */}
                  <Link 
                    href="#contact" 
                    onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-6 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white w-full hover:scale-105 transition-all duration-400 text-lg font-bold rounded-3xl shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden group border border-blue-500/20"
                  aria-label="Get your project started"
                >
                  <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                    <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    🚀 Get Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Code Elements */}
          <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
            <div className="w-32 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg rotate-12 flex items-center justify-center text-white font-mono text-xs animate-float">
              &lt;/html&gt;
            </div>
          </div>
          <div className="absolute top-40 right-20 opacity-15 dark:opacity-10">
            <div className="w-28 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg -rotate-12 flex items-center justify-center text-white font-mono text-xs animate-float" style={{animationDelay: '1s'}}>
              React.js
            </div>
          </div>
          <div className="absolute bottom-32 left-1/4 opacity-25 dark:opacity-15">
            <div className="w-24 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg rotate-6 flex items-center justify-center text-white font-mono text-xs animate-float" style={{animationDelay: '2s'}}>
              Python
            </div>
          </div>
          <div className="absolute top-60 right-1/3 opacity-20 dark:opacity-10">
            <div className="w-20 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg -rotate-6 flex items-center justify-center text-white font-mono text-xs animate-float" style={{animationDelay: '0.5s'}}>
              AI/ML
            </div>
        </div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-600 dark:text-gray-400 mt-16 mb-8 lg:mb-6 border border-gray-200/50 dark:border-gray-700/50 shadow-md animate-fade-in">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>🚀 50+ Projects Delivered Successfully</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-8 lg:mb-6 animate-fade-in animate-delay-200">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                Get Your Dream
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                  Final Year Project
                <div className="absolute -bottom-4 lg:-bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 lg:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>
              </span>
              </h1>
              
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 lg:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in animate-delay-300 font-light">
              Premium projects with complete source code, documentation & support
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 justify-center items-center mb-16 lg:mb-10 animate-fade-in animate-delay-500">
              <Link 
                href="#portfolio" 
                className="group relative px-8 lg:px-8 py-4 lg:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg lg:text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 overflow-hidden border border-blue-500/20"
              >
                <span className="relative z-10 flex items-center gap-3 lg:gap-3">
                  <svg className="w-6 h-6 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  🚀 View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>

              <a 
                href="https://wa.me/918408088454?text=Hi!%20I%20want%20to%20start%20my%20final%20year%20project" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 lg:gap-3 px-8 lg:px-8 py-4 lg:py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold text-lg lg:text-lg rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:scale-105"
              >
                <svg className="w-6 h-6 lg:w-6 lg:h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                💬 Chat Now
              </a>
              </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 max-w-4xl mx-auto mb-16 lg:mb-10 animate-fade-in animate-delay-700">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300"></div>
                <div className="relative p-6 lg:p-6 text-center">
                  <div className="text-4xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 lg:mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-semibold">Projects Delivered</div>
                </div>
                </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors duration-300"></div>
                <div className="relative p-6 lg:p-6 text-center">
                  <div className="text-4xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 lg:mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400 font-semibold">Expert Support</div>
              </div>
            </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl group-hover:from-green-500/20 group-hover:to-teal-500/20 transition-colors duration-300"></div>
                <div className="relative p-6 lg:p-6 text-center">
                  <div className="text-4xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2 lg:mb-2">95%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-semibold">Success Rate</div>
                  </div>
              </div>
                </div>

            {/* Technology Icons */}
            <div className="mb-20 lg:mb-0 animate-fade-in animate-delay-1000">
              <p className="text-sm lg:text-sm text-gray-500 dark:text-gray-400 mb-6 lg:mb-4 font-medium">Powered by Latest Technologies</p>
              <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 lg:gap-2 px-4 lg:px-4 py-2 lg:py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                  <div className="w-6 h-6 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                      </div>
                  <span className="text-sm lg:text-sm font-medium text-gray-700 dark:text-gray-300">React</span>
                      </div>
                <div className="flex items-center gap-2 lg:gap-2 px-4 lg:px-4 py-2 lg:py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                  <div className="w-6 h-6 lg:w-6 lg:h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                      </div>
                  <span className="text-sm lg:text-sm font-medium text-gray-700 dark:text-gray-300">Python</span>
                    </div>
                <div className="flex items-center gap-2 lg:gap-2 px-4 lg:px-4 py-2 lg:py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                  <div className="w-6 h-6 lg:w-6 lg:h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <span className="text-sm lg:text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                  </div>
                <div className="flex items-center gap-2 lg:gap-2 px-4 lg:px-4 py-2 lg:py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                  <div className="w-6 h-6 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                </div>
                  <span className="text-sm lg:text-sm font-medium text-gray-700 dark:text-gray-300">AI/ML</span>
              </div>
                <div className="flex items-center gap-2 lg:gap-2 px-4 lg:px-4 py-2 lg:py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm">
                  <div className="w-6 h-6 lg:w-6 lg:h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">J</span>
                  </div>
                  <span className="text-sm lg:text-sm font-medium text-gray-700 dark:text-gray-300">Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expert Development Services for <span className="gradient-text">Every Technology</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${service.iconBgColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  {service.icon}
                </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {service.projects}+ Projects
                  </span>
                    </div>
                    <span className="text-xs bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full font-semibold shadow-md">
                    Available
                  </span>
                </div>
                  
                  <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium">
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                      <span className="text-xs text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer">
                      +{service.technologies.length - 3} more
                    </span>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Project <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our collection of successfully delivered projects. Each one is built with industry best practices, 
              clean code, and comprehensive documentation.
            </p>
            
            {/* Category Filter - Mobile Horizontal Scroll */}
            <div className="mb-12">
              <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                    className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover-card group">
                {/* Project Image with Design Preview */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  
                  {/* Design Preview Based on Category */}
                  {project.category === "Web Development" && (
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="w-32 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 relative overflow-hidden">
                        <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <div className="p-2 space-y-1">
                          <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                          <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                  </div>
                      </div>
                    </div>
                  )}
                  
                  {project.category === "Mobile Development" && (
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="w-16 h-28 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 relative overflow-hidden">
                        <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <div className="p-1 space-y-1">
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {project.category === "Data Science" && (
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="w-32 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 relative overflow-hidden p-2">
                        <div className="flex items-end justify-between h-full space-x-1">
                          <div className="w-3 bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{height: '60%'}}></div>
                          <div className="w-3 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t" style={{height: '80%'}}></div>
                          <div className="w-3 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t" style={{height: '40%'}}></div>
                          <div className="w-3 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t" style={{height: '70%'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {project.category === "Game Development" && (
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="w-32 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg relative overflow-hidden">
                        <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-red-500 rounded"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">GAME</div>
                      </div>
                    </div>
                  )}
                  
                  {!["Web Development", "Mobile Development", "Data Science", "Game Development"].includes(project.category) && (
                  <Image src={project.image} alt={project.title} width={80} height={80} className="relative z-10 opacity-50 group-hover:opacity-70 transition-opacity" />
                  )}
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.complexity === 'Basic' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                      project.complexity === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                      'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    }`}>
                      {project.complexity}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.technology}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => openProjectModal(project)}
                    className="w-full btn-secondary text-sm py-2"
                  >
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}

      {/* Project Delivery Process Section */}
      <section id="process" className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Project Delivery Process</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From idea to delivery - a streamlined 5-step journey to your perfect project
            </p>
          </div>

          {/* Modern Roadmap Design */}
          <div className="relative">
            {/* Connecting Path */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-indigo-500 via-green-500 to-pink-500 rounded-full hidden md:block"></div>
            
            {/* Mobile Path */}
            <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-indigo-500 via-green-500 to-pink-500 rounded-full md:hidden"></div>

            <div className="space-y-8 md:space-y-16">
              {/* Step 1 - Contact Us */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                        1
                      </div>
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-blue-100 dark:border-blue-900/50 relative">
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-800 border-l border-t border-blue-100 dark:border-blue-900/50 transform rotate-45"></div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Contact Us</h3>
                        <button 
                          onClick={() => setShowStepInfo(showStepInfo === 1 ? null : 1)}
                          className="w-8 h-8 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-all hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Share your project idea via WhatsApp or email
                      </p>
                      <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">2 min</span>
                        <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">24/7</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-blue-100 dark:border-blue-900/50 relative max-w-md ml-auto">
                        <div className="absolute -right-3 top-8 w-6 h-6 bg-white dark:bg-gray-800 border-r border-t border-blue-100 dark:border-blue-900/50 transform rotate-45"></div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Contact Us</h3>
                          <button 
                            onClick={() => setShowStepInfo(showStepInfo === 1 ? null : 1)}
                            className="w-10 h-10 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-all hover:scale-110"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Share your project idea via WhatsApp or email
                        </p>
                        <div className="flex gap-3">
                          <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">2 min</span>
                          <span className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">24/7</span>
                    </div>
                  </div>
                </div>
                    <div className="relative flex-shrink-0 mx-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10">
                    1
                  </div>
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="flex-1"></div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Get Quote */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                        2
                      </div>
                      <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-purple-100 dark:border-purple-900/50 relative">
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-800 border-l border-t border-purple-100 dark:border-purple-900/50 transform rotate-45"></div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Get Quote</h3>
                        <button 
                          onClick={() => setShowStepInfo(showStepInfo === 2 ? null : 2)}
                          className="w-8 h-8 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 transition-all hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Receive detailed quote with timeline & features
                      </p>
                      <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">30 min</span>
                        <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">Fixed Price</span>
                    </div>
                  </div>
                </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="flex-1"></div>
                    <div className="relative flex-shrink-0 mx-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10">
                    2
                  </div>
                      <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
                </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-purple-100 dark:border-purple-900/50 relative max-w-md">
                        <div className="absolute -left-3 top-8 w-6 h-6 bg-white dark:bg-gray-800 border-l border-t border-purple-100 dark:border-purple-900/50 transform rotate-45"></div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Get Quote</h3>
                          <button 
                            onClick={() => setShowStepInfo(showStepInfo === 2 ? null : 2)}
                            className="w-10 h-10 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 transition-all hover:scale-110"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </button>
              </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Receive detailed quote with timeline & features
                        </p>
                        <div className="flex gap-3">
                          <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">30 min</span>
                          <span className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">Fixed Price</span>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Payment */}
                <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                    3
                  </div>
                      <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20 animation-delay-2000"></div>
                </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-indigo-100 dark:border-indigo-900/50 relative">
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-800 border-l border-t border-indigo-100 dark:border-indigo-900/50 transform rotate-45"></div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Payment & Start</h3>
                        <button 
                          onClick={() => setShowStepInfo(showStepInfo === 3 ? null : 3)}
                          className="w-8 h-8 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:hover:bg-indigo-800/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-all hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Secure payment & immediate project kickoff
                      </p>
                      <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium">Instant</span>
                        <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">Secure</span>
                      </div>
                    </div>
              </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-900/50 relative max-w-md ml-auto">
                        <div className="absolute -right-3 top-8 w-6 h-6 bg-white dark:bg-gray-800 border-r border-t border-indigo-100 dark:border-indigo-900/50 transform rotate-45"></div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Payment & Start</h3>
                          <button 
                            onClick={() => setShowStepInfo(showStepInfo === 3 ? null : 3)}
                            className="w-10 h-10 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:hover:bg-indigo-800/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-all hover:scale-110"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Secure payment & immediate project kickoff
                        </p>
                        <div className="flex gap-3">
                          <span className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">Instant</span>
                          <span className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">Secure</span>
                    </div>
                  </div>
                </div>
                    <div className="relative flex-shrink-0 mx-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10">
                        3
                      </div>
                      <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20 animation-delay-2000"></div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </div>
              </div>

              {/* Step 4 - Development */}
                <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                    4
                  </div>
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 animation-delay-3000"></div>
                </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-green-100 dark:border-green-900/50 relative">
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-800 border-l border-t border-green-100 dark:border-green-900/50 transform rotate-45"></div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-green-600 dark:text-green-400">Development</h3>
                        <button 
                          onClick={() => setShowStepInfo(showStepInfo === 4 ? null : 4)}
                          className="w-8 h-8 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 transition-all hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Daily progress updates with live demos
                      </p>
                      <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">3-5 Days</span>
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">Live Updates</span>
                      </div>
                    </div>
              </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="flex-1"></div>
                    <div className="relative flex-shrink-0 mx-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10">
                        4
                      </div>
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 animation-delay-3000"></div>
                    </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-green-100 dark:border-green-900/50 relative max-w-md">
                        <div className="absolute -left-3 top-8 w-6 h-6 bg-white dark:bg-gray-800 border-l border-t border-green-100 dark:border-green-900/50 transform rotate-45"></div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Development</h3>
                          <button 
                            onClick={() => setShowStepInfo(showStepInfo === 4 ? null : 4)}
                            className="w-10 h-10 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 transition-all hover:scale-110"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Daily progress updates with live demos
                        </p>
                        <div className="flex gap-3">
                          <span className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">3-5 Days</span>
                          <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">Live Updates</span>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
              </div>

              {/* Step 5 - Delivery */}
                <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                    5
                  </div>
                      <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-20 animation-delay-4000"></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-pink-100 dark:border-pink-900/50 relative">
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-800 border-l border-t border-pink-100 dark:border-pink-900/50 transform rotate-45"></div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400">Delivery & Support</h3>
                        <button 
                          onClick={() => setShowStepInfo(showStepInfo === 5 ? null : 5)}
                          className="w-8 h-8 bg-pink-100 hover:bg-pink-200 dark:bg-pink-900/30 dark:hover:bg-pink-800/50 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 transition-all hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Complete package with lifetime support
                      </p>
                      <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-full text-xs font-medium">Complete</span>
                        <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">Lifetime</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-pink-100 dark:border-pink-900/50 relative max-w-md ml-auto">
                        <div className="absolute -right-3 top-8 w-6 h-6 bg-white dark:bg-gray-800 border-r border-t border-pink-100 dark:border-pink-900/50 transform rotate-45"></div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">Delivery & Support</h3>
                          <button 
                            onClick={() => setShowStepInfo(showStepInfo === 5 ? null : 5)}
                            className="w-10 h-10 bg-pink-100 hover:bg-pink-200 dark:bg-pink-900/30 dark:hover:bg-pink-800/50 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 transition-all hover:scale-110"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Complete package with lifetime support
                        </p>
                        <div className="flex gap-3">
                          <span className="px-4 py-2 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">Complete</span>
                          <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">Lifetime</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0 mx-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10">
                        5
                      </div>
                      <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-20 animation-delay-4000"></div>
                </div>
                <div className="flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Summary */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">🚀 Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join 500+ students who got their dream projects delivered on time with complete satisfaction
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/918408088454?text=Hi!%20I%20want%20to%20start%20my%20final%20year%20project" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  💬 Start WhatsApp Chat
                </a>
                <Link 
                  href="#portfolio"
                  className="bg-purple-500/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-500/30 transition-colors"
                >
                  📁 View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Info Modals */}
      {showStepInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
            onClick={() => setShowStepInfo(null)}
          ></div>
          
          <div className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl z-10 relative overflow-hidden">
            {/* Modal Header */}
            <div className={`p-6 ${
              showStepInfo === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
              showStepInfo === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
              showStepInfo === 3 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
              showStepInfo === 4 ? 'bg-gradient-to-r from-green-500 to-green-600' :
              'bg-gradient-to-r from-pink-500 to-pink-600'
            } text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {showStepInfo}
                  </div>
                  <h3 className="text-xl font-bold">
                    {showStepInfo === 1 ? 'Contact Us' :
                     showStepInfo === 2 ? 'Get Quote & Plan' :
                     showStepInfo === 3 ? 'Payment & Start' :
                     showStepInfo === 4 ? 'Development' :
                     'Delivery & Support'}
                  </h3>
                </div>
                <button 
                  onClick={() => setShowStepInfo(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                </div>
              </div>

            {/* Modal Content */}
            <div className="p-6">
              {showStepInfo === 1 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 text-lg">How to Contact Us:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                      <div>
                        <p className="font-semibold">WhatsApp (Recommended)</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">+91 8408088454 - Instant response</p>
              </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">eduinfra.contact@gmail.com</p>
              </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                      <div>
                        <p className="font-semibold">Instagram</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">@xrohia</p>
              </div>
            </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
          </div>
                      <div>
                        <p className="font-semibold">Twitter</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">@xrohia</p>
        </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">What to Include:</h5>
                    <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                      <li>• Your project topic/domain</li>
                      <li>• Preferred technology stack</li>
                      <li>• Timeline requirements</li>
                      <li>• Budget expectations</li>
                      <li>• Any specific features needed</li>
                    </ul>
                  </div>
                </div>
              )}

              {showStepInfo === 2 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 text-lg">What You'll Receive:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                      <div>
                        <p className="font-semibold">Detailed Quote Document</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Fixed pricing with no hidden charges</p>
              </div>
            </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
          </div>
                      <div>
                        <p className="font-semibold">Project Timeline</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Realistic delivery schedule (3-5 days)</p>
        </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Quote Includes:</h5>
                    <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                      <li>• Technology stack breakdown</li>
                      <li>• Feature-wise cost analysis</li>
                      <li>• Milestone delivery schedule</li>
                      <li>• Support & maintenance terms</li>
                    </ul>
                  </div>
                </div>
              )}

              {showStepInfo === 3 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">Secure Payment Options:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">UPI</span>
                      </div>
                      <p className="text-sm font-semibold">UPI/PhonePe/GPay</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">₹</span>
                      </div>
                      <p className="text-sm font-semibold">Bank Transfer</p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Payment Security:</h5>
                    <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                      <li>• 100% secure payment gateway</li>
                      <li>• Money-back guarantee</li>
                      <li>• Work starts immediately after payment</li>
                      <li>• Payment receipt & invoice provided</li>
                    </ul>
                  </div>
                </div>
              )}

              {showStepInfo === 4 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-green-600 dark:text-green-400 text-lg">Development Process:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold">Daily Progress Updates</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Screenshots & live demo links via WhatsApp</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold">Live Testing Access</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Test features as they're completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">What You Get Daily:</h5>
                    <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                      <li>• Progress screenshots</li>
                      <li>• Feature completion status</li>
                      <li>• Live demo links to test</li>
                      <li>• Next day's development plan</li>
                    </ul>
                  </div>
                </div>
              )}

              {showStepInfo === 5 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-pink-600 dark:text-pink-400 text-lg">Complete Package Includes:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-pink-100 dark:bg-pink-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Complete source code</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-pink-100 dark:bg-pink-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Project documentation & report</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-pink-100 dark:bg-pink-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Video explanation & demo</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-pink-100 dark:bg-pink-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Setup & deployment guide</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Lifetime Support:</h5>
                    <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                      <li>• Free bug fixes & updates</li>
                      <li>• Deployment assistance</li>
                      <li>• Academic presentation help</li>
                      <li>• WhatsApp support anytime</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Student Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 px-4 md:px-6 lg:px-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl md:max-w-6xl mx-auto px-2 md:px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              What Students Say About <span className="gradient-text">Our Projects</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-3xl mx-auto">
              Real feedback from computer science students who got their dream projects
            </p>
            {isLoadingReviews && (
              <div className="mt-3 text-sm text-blue-600 dark:text-blue-400">
                Loading latest reviews...
              </div>
            )}
          </div>
          
          {/* Modern Review Cards Section */}
          <div className="relative mb-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentReviewIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-full flex justify-center items-center px-4"
                  >
                    {/* Modern Card Design */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 md:p-6 shadow-xl border border-gray-100 dark:border-gray-800 review-card-modern relative overflow-hidden w-full max-w-sm md:max-w-lg">
                      {/* Gradient Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                      
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>

                      {/* User Profile Section */}
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg flex-shrink-0`}>
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
                            {testimonial.role}
                          </p>
                          {/* Star Rating */}
                          <div className="flex items-center gap-1 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg 
                                key={star} 
                                className={`w-3 h-3 md:w-4 md:h-4 ${star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="relative">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base italic mb-4">
                          {testimonial.text}
                        </p>
                      </div>

                      {/* Project Badge */}
                      {testimonial.project_title && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-2">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 truncate">
                              Project: {testimonial.project_title}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            {testimonials.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentReviewIndex(prev => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )}
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 z-20 group"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Next Button */}
                <button
                  onClick={() => setCurrentReviewIndex(prev => 
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 z-20 group"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Elegant Progress Indicators */}
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentReviewIndex 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8 shadow-lg' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-2'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Stats and Add Review Button */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="inline-flex items-center gap-3 md:gap-4 bg-white dark:bg-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">98%</div>
              <div className="text-left">
                <div className="font-semibold text-sm md:text-base">Student Satisfaction</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{testimonials.length > 5 ? `${testimonials.length}+ reviews` : '500+ completed projects'}</div>
              </div>
            </div>
            
            <button
              onClick={() => setShowReviewForm(true)}
              className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 md:px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
              </svg>
              Share Your Experience
            </button>
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
            onClick={() => setShowReviewForm(false)}
          ></div>
          
          <div className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl z-10 relative overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ⭐
                  </div>
                  <h3 className="text-xl font-bold">Share Your Experience</h3>
                </div>
                <button 
                  onClick={() => setShowReviewForm(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              
              <form onSubmit={handleReviewSubmit} className="space-y-4 md:space-y-6">
                {/* Display review submission message */}
                {reviewMessage.text && (
                  <div className={`p-3 md:p-4 rounded-lg mb-4 text-sm ${
                    reviewMessage.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-700' 
                      : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-700'
                  }`}>
                    {reviewMessage.text}
                  </div>
                )}

                {/* Name and Email - Horizontal */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={reviewForm.name}
                      onChange={handleReviewInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={reviewForm.email}
                      onChange={handleReviewInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and College - Horizontal */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={reviewForm.phone}
                      onChange={handleReviewInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="+91 8408088454"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">College/Company</label>
                    <input
                      type="text"
                      name="company"
                      value={reviewForm.company}
                      onChange={handleReviewInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="Your college or company"
                    />
                  </div>
                </div>

                {/* Project Title and Rating - Horizontal */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">Project Title</label>
                    <input
                      type="text"
                      name="project_title"
                      value={reviewForm.project_title}
                      onChange={handleReviewInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="Project we worked on"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">Rating *</label>
                    <select
                      name="rating"
                      value={reviewForm.rating}
                      onChange={handleReviewInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ Excellent (5 stars)</option>
                      <option value={4}>⭐⭐⭐⭐ Very Good (4 stars)</option>
                      <option value={3}>⭐⭐⭐ Good (3 stars)</option>
                      <option value={2}>⭐⭐ Fair (2 stars)</option>
                      <option value={1}>⭐ Poor (1 star)</option>
                    </select>
                  </div>
                </div>
                
                {/* Review Text - Full width */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">Your Review *</label>
                  <textarea
                    name="review_text"
                    value={reviewForm.review_text}
                    onChange={handleReviewInputChange}
                    required
                    rows={3}
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md resize-none"
                    placeholder="Share your experience with our service..."
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="pt-2 md:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmittingReview}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 md:px-6 py-2.5 md:py-3.5 text-sm md:text-base font-bold rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmittingReview ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Review...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Submit Your Review
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Your <span className="gradient-text">Dream Project?</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                Don't let your final year project stress you out. Contact us today for a free consultation 
                and let our experts build your perfect project.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-1">Phone / WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 8408088454
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available 24/7 for urgent queries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      eduinfra.contact@gmail.com
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium mb-1">Social Media</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Instagram: @xrohia | Twitter: @xrohia
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Follow us for updates</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://wa.me/918408088454" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a href="mailto:eduinfra.contact@gmail.com" className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="tel:+918408088454" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="https://instagram.com/xrohia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 md:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Request Your Project Quote</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Get a detailed quote within 2 hours with our expert consultation</p>
              </div>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-4 md:space-y-6">
                {/* Submit Message */}
                {submitMessage.text && (
                  <div className={`p-4 rounded-lg border ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-700 dark:text-green-400'
                      : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}

                {/* Name and Email - Horizontal on all devices */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={quoteForm.name}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={quoteForm.email}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                {/* Phone and College - Horizontal on all devices */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={quoteForm.phone}
                      onChange={handleQuoteInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="+91 8408088454"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      College/University
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={quoteForm.company}
                      onChange={handleQuoteInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="Your college name"
                    />
                  </div>
                </div>
                
                {/* Project Type and Technology - Horizontal on all devices */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="project_type" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Project Type *
                    </label>
                    <select
                      id="project_type"
                      name="project_type"
                      value={quoteForm.project_type}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <option value="">Select project type</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Data Science/ML">Data Science/ML</option>
                      <option value="Game Development">Game Development</option>
                      <option value="Desktop Application">Desktop Application</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="technology" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Preferred Technology *
                    </label>
                    <select
                      id="technology"
                      name="technology"
                      value={quoteForm.technology}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <option value="">Select technology</option>
                      <option value="MERN Stack">MERN Stack</option>
                      <option value="MEAN Stack">MEAN Stack</option>
                      <option value="Django">Django</option>
                      <option value="Laravel">Laravel</option>
                      <option value="React Native">React Native</option>
                      <option value="Flutter">Flutter</option>
                      <option value="Python (ML/AI)">Python (ML/AI)</option>
                      <option value="Unity">Unity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Complexity and Timeline - Horizontal on all devices */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="complexity" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Project Complexity *
                    </label>
                    <select
                      id="complexity"
                      name="complexity"
                      value={quoteForm.complexity}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <option value="">Select complexity</option>
                      <option value="Basic">Basic</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={quoteForm.timeline}
                      onChange={handleQuoteInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3 days">1-3 days</option>
                      <option value="4-7 days">4-7 days</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="3-4 weeks">3-4 weeks</option>
                      <option value="1+ month">1+ month</option>
                    </select>
                  </div>
                </div>

                {/* Budget - Single line */}
                <div>
                  <label htmlFor="budget" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={quoteForm.budget}
                    onChange={handleQuoteInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                    <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                    <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                    <option value="Let's discuss">Let's discuss</option>
                  </select>
                </div>
                
                {/* Project Description - Single line */}
                <div>
                  <label htmlFor="description" className="block text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={quoteForm.description}
                    onChange={handleQuoteInputChange}
                    rows={3}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md resize-none"
                    placeholder="Describe your project requirements, features needed, and any specific guidelines from your college..."
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="pt-2 md:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl text-base md:text-lg font-bold hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                          </svg>
                          Get Free Project Quote
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                </div>
                
                {/* Response Time Notice */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-full">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-xs md:text-sm text-green-700 dark:text-green-400 font-medium">
                      ⚡ Quick Response: We'll get back to you within 2 hours!
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300">
                  EI
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Edu Infra
                  </span>
                  <span className="text-xs text-gray-400 font-medium tracking-wide">
                    Projects & Solutions
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Expert final year project development for computer science students. High-quality, original projects with complete documentation and support.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Data Science & ML
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Game Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-400">MERN & MEAN Stack</span>
                </li>
                <li>
                  <span className="text-gray-400">React Native & Flutter</span>
                </li>
                <li>
                  <span className="text-gray-400">Python & Django</span>
                </li>
                <li>
                  <span className="text-gray-400">Laravel & CodeIgniter</span>
                </li>
                <li>
                  <span className="text-gray-400">Unity & Unreal Engine</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+91 8408088454</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">eduinfra.contact@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span className="text-gray-400">@xrohia (Instagram & Twitter)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Edu Infra. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {isProjectModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
            onClick={closeProjectModal}
          ></div>
          
          <div className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl z-10 relative no-scrollbar">
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{selectedProject.technology}</p>
                </div>
                <button 
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h4 className="font-medium">{feature.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Category:</span>
                        <span className="font-medium">{selectedProject.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Complexity:</span>
                        <span className={`font-medium ${
                          selectedProject.complexity === 'Basic' ? 'text-green-600' :
                          selectedProject.complexity === 'Intermediate' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>{selectedProject.complexity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Delivery Time:</span>
                        <span className="font-medium">3-5 Days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link href="#contact" onClick={closeProjectModal} className="flex-1 btn-primary text-center">
                  Request This Project
                </Link>
                <Link href="https://wa.me/918408088454" target="_blank" className="flex-1 btn-secondary text-center">
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Beautiful Success Modal with Animation */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
            onClick={() => setShowSuccessModal(false)}
          ></div>

          {/* Confetti Animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 3 + 's',
                  animationDuration: (3 + Math.random() * 2) + 's'
                }}
              >
                <div 
                  className={`w-2 h-2 ${
                    ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-yellow-500', 'bg-indigo-500'][Math.floor(Math.random() * 6)]
                  } transform rotate-45`}
                ></div>
              </div>
            ))}
          </div>

          {/* Success Modal */}
          <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-modal-enter">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Quote Submitted Successfully!</h3>
                </div>
                <button 
                  onClick={() => setShowSuccessModal(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="inline-flex items-center bg-green-50 dark:bg-green-900/20 rounded-full px-4 py-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">Success!</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Your project request has been received. We'll get back to you within <span className="font-bold text-blue-600 dark:text-blue-400">2 hours</span>!
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-sm">What happens next:</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-white font-bold">1</span>
                      </div>
                      <span>Expert review of your requirements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-white font-bold">2</span>
                      </div>
                      <span>Detailed quote & timeline preparation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-white font-bold">3</span>
                      </div>
                      <span>Comprehensive proposal delivery</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    Continue
                  </button>
                  <a
                    href="https://wa.me/918408088454?text=Hi!%20I%20just%20submitted%20a%20quote%20request"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => setShowSuccessModal(false)}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </main>
    </>
  );
}

// Google Analytics Utility for EduInfra - Rohit Gunthal
// Measurement ID: G-SLSCQ1TYEQ
// Stream ID: 11860039418

export const GA_MEASUREMENT_ID = 'G-SLSCQ1TYEQ';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: 'Rohit Gunthal - Final Year Projects Developer',
      page_location: 'https://eduinfra.vercel.app',
      developer_name: 'Rohit Gunthal',
      company_name: 'EduInfra Solutions',
      send_page_view: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: true,
      custom_map: {
        'custom_parameter_1': 'developer_name',
        'custom_parameter_2': 'project_category',
        'custom_parameter_3': 'technology_stack',
        'custom_parameter_4': 'lead_source'
      }
    });
  }
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: title,
      developer_name: 'Rohit Gunthal'
    });
  }
};

// Track events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      developer_name: 'Rohit Gunthal',
      company_name: 'EduInfra Solutions',
      ...parameters
    });
  }
};

// Track project views
export const trackProjectView = (projectType, technology, complexity = 'unknown') => {
  trackEvent('project_view', {
    project_type: projectType,
    technology: technology,
    complexity: complexity,
    event_category: 'Project Interaction',
    event_label: `Rohit Gunthal Projects - ${projectType}`
  });
};

// Track quote requests (lead generation)
export const trackQuoteRequest = (projectType, technology, budget, course, timeline) => {
  trackEvent('generate_lead', {
    project_type: projectType,
    technology: technology,
    budget_range: budget,
    course_type: course,
    timeline: timeline,
    lead_source: 'EduInfra Website',
    developer_contact: 'Rohit Gunthal',
    currency: 'INR',
    value: budget,
    event_category: 'Lead Generation',
    event_label: `Rohit Gunthal Quote - ${projectType}`
  });
};

// Track review submissions
export const trackReviewSubmit = (rating, projectType, course) => {
  trackEvent('review_submit', {
    review_rating: rating,
    project_type: projectType,
    course_type: course,
    event_category: 'Review',
    event_label: `Rohit Gunthal Review - ${rating} stars`
  });
};

// Track contact interactions
export const trackContactClick = (contactMethod, source = 'website') => {
  const contactDetails = {
    whatsapp: { number: '+91-8408088454', platform: 'WhatsApp' },
    phone: { number: '+91-8408088454', platform: 'Phone' },
    email: { address: 'eduinfra.contact@gmail.com', platform: 'Email' }
  };

  const details = contactDetails[contactMethod] || {};
  
  trackEvent(`${contactMethod}_click`, {
    contact_method: contactMethod,
    contact_source: source,
    ...details,
    event_category: 'Contact',
    event_label: `Rohit Gunthal ${details.platform || contactMethod}`
  });
};

// Track social media clicks
export const trackSocialClick = (platform, url) => {
  trackEvent('social_click', {
    social_platform: platform,
    social_url: url,
    event_category: 'Social',
    event_label: `Rohit Gunthal ${platform}`
  });
};

// Track admin interactions
export const trackAdminLogin = (success, username = 'unknown') => {
  trackEvent('admin_login', {
    login_success: success,
    username: username,
    event_category: 'Admin',
    event_label: 'Rohit Gunthal Admin Access'
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
    event_category: 'Engagement',
    event_label: `Rohit Gunthal Page Engagement - ${depth}%`
  });
};

// Track time on page
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', {
    time_threshold: seconds,
    event_category: 'Engagement',
    event_label: `Rohit Gunthal Time Engagement - ${seconds}s`
  });
};

// Track form interactions
export const trackFormStart = (formType) => {
  trackEvent('form_start', {
    form_type: formType,
    event_category: 'Form',
    event_label: `Rohit Gunthal Form - ${formType} Started`
  });
};

export const trackFormComplete = (formType, success = true) => {
  trackEvent('form_complete', {
    form_type: formType,
    form_success: success,
    event_category: 'Form',
    event_label: `Rohit Gunthal Form - ${formType} ${success ? 'Success' : 'Failed'}`
  });
};

// Track downloads (if any)
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    event_category: 'Download',
    event_label: `Rohit Gunthal Download - ${fileName}`
  });
};

// Track search functionality (if implemented)
export const trackSearch = (searchTerm, resultCount) => {
  trackEvent('search', {
    search_term: searchTerm,
    search_results: resultCount,
    event_category: 'Search',
    event_label: `Rohit Gunthal Search - ${searchTerm}`
  });
};

// Track video interactions (if any videos are added)
export const trackVideoPlay = (videoTitle, videoType = 'demo') => {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_type: videoType,
    event_category: 'Video',
    event_label: `Rohit Gunthal Video - ${videoTitle}`
  });
};

// Enhanced E-commerce tracking for project sales
export const trackPurchase = (projectType, technology, amount, transactionId) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: amount,
    currency: 'INR',
    items: [{
      item_id: `${projectType}_${technology}`,
      item_name: `${projectType} Project by Rohit Gunthal`,
      item_category: 'Final Year Project',
      item_variant: technology,
      developer: 'Rohit Gunthal',
      price: amount,
      quantity: 1
    }],
    event_category: 'E-commerce',
    event_label: `Rohit Gunthal Sale - ${projectType}`
  });
};

// Track user preferences and behavior
export const trackUserPreference = (preferenceType, preferenceValue) => {
  trackEvent('user_preference', {
    preference_type: preferenceType,
    preference_value: preferenceValue,
    event_category: 'User Behavior',
    event_label: `Rohit Gunthal User Preference - ${preferenceType}`
  });
};

// Track error events
export const trackError = (errorType, errorMessage, errorLocation) => {
  trackEvent('error_event', {
    error_type: errorType,
    error_message: errorMessage,
    error_location: errorLocation,
    event_category: 'Error',
    event_label: `Rohit Gunthal Error - ${errorType}`
  });
};

// Export all tracking functions for easy import
export const analytics = {
  initGA,
  trackPageView,
  trackEvent,
  trackProjectView,
  trackQuoteRequest,
  trackReviewSubmit,
  trackContactClick,
  trackSocialClick,
  trackAdminLogin,
  trackScrollDepth,
  trackTimeOnPage,
  trackFormStart,
  trackFormComplete,
  trackDownload,
  trackSearch,
  trackVideoPlay,
  trackPurchase,
  trackUserPreference,
  trackError
}; 
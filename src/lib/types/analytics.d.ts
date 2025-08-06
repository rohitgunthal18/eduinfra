// Google Analytics 4 TypeScript declarations for EduInfra - Rohit Gunthal

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        [key: string]: any;
        page_title?: string;
        page_location?: string;
        developer_name?: string;
        company_name?: string;
        send_page_view?: boolean;
        allow_google_signals?: boolean;
        allow_ad_personalization_signals?: boolean;
        custom_map?: { [key: string]: string };
        project_type?: string;
        technology?: string;
        budget_range?: string;
        course_type?: string;
        timeline?: string;
        lead_source?: string;
        developer_contact?: string;
        currency?: string;
        value?: string | number;
        event_category?: string;
        event_label?: string;
        contact_method?: string;
        contact_source?: string;
        social_platform?: string;
        social_url?: string;
        login_success?: boolean;
        username?: string;
        scroll_depth?: number;
        time_threshold?: number;
        form_type?: string;
        form_success?: boolean;
        review_rating?: number;
        time_on_page?: number;
        [param: string]: any;
      }
    ) => void;
    dataLayer: any[];
    trackProjectView?: (projectType: string, technology: string, complexity?: string) => void;
    trackQuoteRequest?: (projectType: string, technology: string, budget: string, course: string, timeline?: string) => void;
    trackContactForm?: (formType: string, contactMethod?: string) => void;
    trackPhoneClick?: () => void;
    trackWhatsAppClick?: () => void;
    trackEmailClick?: () => void;
    trackAdminLogin?: (success: boolean, username?: string) => void;
  }
}

export {};

// Analytics event parameters interface
export interface AnalyticsEventParams {
  developer_name?: string;
  company_name?: string;
  project_type?: string;
  technology?: string;
  complexity?: string;
  budget_range?: string;
  course_type?: string;
  timeline?: string;
  lead_source?: string;
  developer_contact?: string;
  currency?: string;
  value?: string | number;
  event_category?: string;
  event_label?: string;
  contact_method?: string;
  contact_source?: string;
  social_platform?: string;
  social_url?: string;
  login_success?: boolean;
  username?: string;
  scroll_depth?: number;
  time_threshold?: number;
  form_type?: string;
  form_success?: boolean;
  review_rating?: number;
  time_on_page?: number;
  [key: string]: any;
}

// Google Analytics Configuration interface
export interface GAConfig {
  page_title?: string;
  page_location?: string;
  developer_name?: string;
  company_name?: string;
  send_page_view?: boolean;
  allow_google_signals?: boolean;
  allow_ad_personalization_signals?: boolean;
  custom_map?: { [key: string]: string };
}

// E-commerce item interface for project purchases
export interface AnalyticsItem {
  item_id: string;
  item_name: string;
  item_category: string;
  item_variant?: string;
  developer?: string;
  price: number;
  quantity: number;
}

// Purchase event parameters
export interface PurchaseEventParams extends AnalyticsEventParams {
  transaction_id: string;
  items: AnalyticsItem[];
}

// Analytics utility constants
export const ANALYTICS_CONSTANTS = {
  MEASUREMENT_ID: 'G-SLSCQ1TYEQ',
  DEVELOPER_NAME: 'Rohit Gunthal',
  COMPANY_NAME: 'EduInfra Solutions',
  WEBSITE_URL: 'https://eduinfra.vercel.app',
  CONTACT_PHONE: '+91-8408088454',
  CONTACT_EMAIL: 'eduinfra.contact@gmail.com',
} as const; 
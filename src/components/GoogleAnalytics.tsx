'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, initGA, trackScrollDepth, trackTimeOnPage, trackContactClick, trackSocialClick } from '../lib/analytics';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize GA when component mounts
    initGA();

    // Track scroll depth
    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    const trackedScrolls = new Set();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        scrollThresholds.forEach(threshold => {
          if (maxScroll >= threshold && !trackedScrolls.has(threshold)) {
            trackedScrolls.add(threshold);
            trackScrollDepth(threshold);
          }
        });
      }
    };

    // Track time on page
    const timeThresholds = [30, 60, 120, 300]; // seconds
    const trackedTimes = new Set();
    
    timeThresholds.forEach(threshold => {
      setTimeout(() => {
        if (!trackedTimes.has(threshold)) {
          trackedTimes.add(threshold);
          trackTimeOnPage(threshold);
        }
      }, threshold * 1000);
    });

    // Track clicks on contact and social elements
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;

      const href = link.href;

      // Track contact clicks
      if (href.includes('whatsapp') || href.includes('wa.me')) {
        trackContactClick('whatsapp', 'website');
      } else if (href.includes('tel:')) {
        trackContactClick('phone', 'website');
      } else if (href.includes('mailto:')) {
        trackContactClick('email', 'website');
      }
      
      // Track social media clicks
      else if (href.includes('linkedin.com')) {
        trackSocialClick('linkedin', href);
      } else if (href.includes('twitter.com') || href.includes('x.com')) {
        trackSocialClick('twitter', href);
      } else if (href.includes('instagram.com')) {
        trackSocialClick('instagram', href);
      } else if (href.includes('facebook.com')) {
        trackSocialClick('facebook', href);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (window.gtag) {
          window.gtag('event', 'page_exit', {
            developer_name: 'Rohit Gunthal',
            time_on_page: timeOnPage,
            event_category: 'Engagement',
            event_label: 'Rohit Gunthal Page Exit'
          });
        }
      }
    };

    const startTime = Date.now();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* Google Analytics 4 - EduInfra by Rohit Gunthal */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
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

            // Enhanced E-commerce configuration
            gtag('config', '${GA_MEASUREMENT_ID}', {
              custom_map: {
                'custom_parameter_1': 'developer_name',
                'custom_parameter_2': 'project_type',
                'custom_parameter_3': 'budget_range',
                'custom_parameter_4': 'technology'
              }
            });

            // Track initial page load
            gtag('event', 'page_load', {
              developer_name: 'Rohit Gunthal',
              page_location: window.location.href,
              page_title: document.title,
              event_category: 'Page Load',
              event_label: 'Rohit Gunthal Website Load'
            });

            // Track user agent and device info
            gtag('event', 'device_info', {
              developer_name: 'Rohit Gunthal',
              user_agent: navigator.userAgent,
              screen_resolution: screen.width + 'x' + screen.height,
              viewport_size: window.innerWidth + 'x' + window.innerHeight,
              language: navigator.language,
              platform: navigator.platform,
              event_category: 'Technical',
              event_label: 'Rohit Gunthal Device Info'
            });

            // Track connection type if available
            if (navigator.connection) {
              gtag('event', 'connection_info', {
                developer_name: 'Rohit Gunthal',
                connection_type: navigator.connection.effectiveType,
                connection_downlink: navigator.connection.downlink,
                event_category: 'Technical',
                event_label: 'Rohit Gunthal Connection Info'
              });
            }
          `,
        }}
      />

      {/* Enhanced User Behavior Tracking */}
      <Script
        id="enhanced-behavior-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Track form interactions
            document.addEventListener('focusin', function(e) {
              if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
                const form = e.target.closest('form');
                if (form) {
                  const formType = form.id || form.className || 'unknown';
                  gtag('event', 'form_field_focus', {
                    developer_name: 'Rohit Gunthal',
                    form_type: formType,
                    field_name: e.target.name || e.target.id || 'unknown',
                    event_category: 'Form Interaction',
                    event_label: 'Rohit Gunthal Form Field Focus'
                  });
                }
              }
            });

            // Track button clicks
            document.addEventListener('click', function(e) {
              if (e.target.tagName === 'BUTTON' || e.target.type === 'submit') {
                gtag('event', 'button_click', {
                  developer_name: 'Rohit Gunthal',
                  button_text: e.target.textContent || e.target.value || 'unknown',
                  button_type: e.target.type || 'button',
                  event_category: 'UI Interaction',
                  event_label: 'Rohit Gunthal Button Click'
                });
              }
            });

            // Track search queries (if search functionality exists)
            const searchInputs = document.querySelectorAll('input[type="search"], input[name*="search"], input[id*="search"]');
            searchInputs.forEach(input => {
              input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && this.value.trim()) {
                  gtag('event', 'search_query', {
                    developer_name: 'Rohit Gunthal',
                    search_term: this.value.trim(),
                    event_category: 'Search',
                    event_label: 'Rohit Gunthal Search Query'
                  });
                }
              });
            });

            // Track modal/popup interactions
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                  if (node.nodeType === 1) { // Element node
                    if (node.classList && (node.classList.contains('modal') || node.classList.contains('popup'))) {
                      gtag('event', 'modal_open', {
                        developer_name: 'Rohit Gunthal',
                        modal_type: node.id || node.className || 'unknown',
                        event_category: 'UI Interaction',
                        event_label: 'Rohit Gunthal Modal Open'
                      });
                    }
                  }
                });
              });
            });

            observer.observe(document.body, { childList: true, subtree: true });

            // Track error events
            window.addEventListener('error', function(e) {
              gtag('event', 'javascript_error', {
                developer_name: 'Rohit Gunthal',
                error_message: e.message,
                error_filename: e.filename,
                error_line: e.lineno,
                error_column: e.colno,
                event_category: 'Error',
                event_label: 'Rohit Gunthal JavaScript Error'
              });
            });

            // Track unhandled promise rejections
            window.addEventListener('unhandledrejection', function(e) {
              gtag('event', 'promise_rejection', {
                developer_name: 'Rohit Gunthal',
                rejection_reason: e.reason.toString(),
                event_category: 'Error',
                event_label: 'Rohit Gunthal Promise Rejection'
              });
            });
          `,
        }}
      />
    </>
  );
} 
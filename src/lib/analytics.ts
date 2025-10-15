import { ANALYTICS_CONFIG } from '@/constants/configs';

/**
 * Google Analytics Event Types
 */
export type GAEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

/**
 * Send event to Google Analytics
 * @param event - Event object with action, category, label, and value
 */
export const trackEvent = ({ action, category, label, value }: GAEvent) => {
  if (!ANALYTICS_CONFIG.google.enabled) {
    return;
  }

  // Check if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

/**
 * Track page view
 * @param url - Page URL to track
 */
export const trackPageView = (url: string) => {
  if (!ANALYTICS_CONFIG.google.enabled) {
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.google.trackingId, {
      page_path: url
    });
  }
};

/**
 * Pre-defined event tracking functions
 */
export const analytics = {
  // Contact form events
  contactFormSubmit: (success: boolean) => {
    trackEvent({
      action: success ? 'submit_success' : 'submit_error',
      category: 'Contact Form',
      label: success ? 'Form submitted successfully' : 'Form submission failed'
    });
  },

  // Navigation events
  navigationClick: (destination: string) => {
    trackEvent({
      action: 'click',
      category: 'Navigation',
      label: destination
    });
  },

  // Project events
  projectView: (projectName: string) => {
    trackEvent({
      action: 'view',
      category: 'Project',
      label: projectName
    });
  },

  projectLinkClick: (projectName: string, linkType: 'github' | 'demo') => {
    trackEvent({
      action: 'click',
      category: 'Project Link',
      label: `${projectName} - ${linkType}`
    });
  },

  // Social media events
  socialMediaClick: (platform: string) => {
    trackEvent({
      action: 'click',
      category: 'Social Media',
      label: platform
    });
  },

  // Download events
  cvDownload: () => {
    trackEvent({
      action: 'download',
      category: 'CV',
      label: 'Resume downloaded'
    });
  },

  // External link events
  externalLinkClick: (url: string) => {
    trackEvent({
      action: 'click',
      category: 'External Link',
      label: url
    });
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

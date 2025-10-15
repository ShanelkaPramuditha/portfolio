/**
 * Environment Configuration
 * Centralized configuration for all environment variables
 */

/**
 * Email Configuration (Resend)
 * Server-side only - used in API routes
 */
export const EMAIL_CONFIG = {
  resend: {
    apiKey: process.env.RESEND_API_KEY || '',
    fromEmail: process.env.FROM_EMAIL || '',
    toEmail: process.env.TO_EMAIL || ''
  }
} as const;

/**
 * Analytics Configuration
 * Google Analytics tracking
 */
export const ANALYTICS_CONFIG = {
  google: {
    trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_GA_TRACKING_ID
  }
} as const;

/**
 * Combined Environment Configuration
 * Use this for accessing all environment variables
 */
export const ENV_CONFIG = {
  // Email settings
  resend: EMAIL_CONFIG.resend,

  // Analytics settings
  analytics: ANALYTICS_CONFIG.google,

  // Environment info
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test'
} as const;

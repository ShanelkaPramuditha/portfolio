import Script from 'next/script';
import { ANALYTICS_CONFIG } from '@/constants/configs';

/**
 * Google Analytics Component
 * Handles GA4 tracking script injection
 */
export function GoogleAnalytics() {
    const { trackingId, enabled } = ANALYTICS_CONFIG.google;

    // Don't render if tracking is disabled or no tracking ID
    if (!enabled || !trackingId) {
        return null;
    }

    return (
        <>
            {/* Google Analytics Script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}

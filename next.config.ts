import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  },
  experimental: {
    ppr: 'incremental', // Enables Partial Prerendering
  },
  devIndicators: {
    appIsrStatus: true, // Show ISR status in development
    buildActivity: true, // Show build activity in development
    buildActivityPosition: 'bottom-right', // Position of the build activity indicator
  },
};

export default nextConfig;

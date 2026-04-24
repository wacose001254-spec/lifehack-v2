import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // We use 'as any' to bypass the strict type check for the eslint property
  // which is sometimes handled differently in Next 16 builds
} as any;

export default nextConfig;
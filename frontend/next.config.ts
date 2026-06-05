import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <-- ADD THIS BLOCK HERE
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  optimizeFonts: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

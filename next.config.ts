import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export
  trailingSlash: true, // Recommended for static exports
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

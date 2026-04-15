import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

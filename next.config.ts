//@ts-check
import withPlaiceholder from "@plaiceholder/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: { removeConsole: process.env.NODE_ENV === "production" },
  reactCompiler: { compilationMode: "infer" },
  experimental: {
    viewTransition: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "w*/**", // allow /w320/... or other sizes
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "mainfacts.com",
        pathname: "media/images/coats_of_arms/*", // allow coat of arms images
      },
    ],
  },
};

export default nextConfig;

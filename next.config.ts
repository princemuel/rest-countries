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
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "mainfacts.com",
        pathname: "**",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);

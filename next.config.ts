import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["vavilovastudio.ru", "localhost:3000"],
    },
  },
};

export default nextConfig;

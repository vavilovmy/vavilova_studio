import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["vavilovastudio.ru", "localhost:3000"],
    }, 
  }, images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '90.156.134.79',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

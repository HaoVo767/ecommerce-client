import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"], // Add this hostname here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig

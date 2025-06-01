import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com','images.unsplash.com', 'res.cloudinary.com'], // 👈 Add this line
  },
};

export default nextConfig;

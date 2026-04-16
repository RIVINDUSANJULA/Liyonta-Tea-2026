/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // <-- This completely stops the double-mount error
  // (Keep any other config you already have in here)
};

export default nextConfig;
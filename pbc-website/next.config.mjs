/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ytimg.com"],
  },
  experimental: {
    optimizePackageImports: ["@mui/icons-material"],
  },
};

export default nextConfig;

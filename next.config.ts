import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://lifechoice.duckdns.org/:path*',
      },
    ];
  },
};

export default nextConfig;

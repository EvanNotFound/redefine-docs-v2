import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "evan.beee.top",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "assets.ohevan.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default withMDX(config);

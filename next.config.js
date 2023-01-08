/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  plugins: [
    [
      "next-mdx-remote",
      {
        development: false,
      },
    ],
  ],
};

module.exports = nextConfig;

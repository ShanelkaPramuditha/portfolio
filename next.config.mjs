/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'socialify.git.ci',
      },
      // {
      //   protocol: 'https',
      //   hostname: '**.*',
      //   port: '',
      // },
    ],
  },
};

export default nextConfig;

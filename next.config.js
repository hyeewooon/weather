/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ];
  },
  rewrites: () => [
    {
      source: '/main',
      destination: 'http://api.weatherapi.com',
    },
  ],
};

module.exports = nextConfig;

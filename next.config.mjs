/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [{ source: "/discover", destination: "/about", permanent: true },
      { source: "/wholesale", destination: "/extracts", permanent: true },
    ];
  },
};

export default nextConfig;

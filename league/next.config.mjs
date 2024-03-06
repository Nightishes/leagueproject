/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        port: "",
        pathname: "/cdn/**",
      },
      {
        protocol: "http",
        hostname: "raw.communitydragon.org",
        port: "",
        pathname: "/pbe/**",
      },
      {
        protocol: "https",
        hostname: "cdn.communitydragon.org",
        port: "",
        pathname: "/latest/**",
      },
    ],
  },
};

export default nextConfig;

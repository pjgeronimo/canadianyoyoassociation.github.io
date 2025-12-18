import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // remove trailing slash for navbar active highlight
  trailingSlash: false,

  // fix archived endpoints
  async redirects() {
    return [
      {
        source: "/2023",
        destination: "/2023/index.html",
        permanent: true
      },
      {
        source: "/crto2024",
        destination: "/crto2024/index.html",
        permanent: true
      },
      {
        source: "/2024",
        destination: "/2024/index.html",
        permanent: true
      },
      {
        source: "/2025",
        destination: "/2025/index.html",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

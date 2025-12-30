import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // remove trailing slash for navbar active highlight
  trailingSlash: false,
};

export default nextConfig;

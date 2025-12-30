import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // remove trailing slash for navbar active highlight
  trailingSlash: false,

  // set base path and asset prefix for GitHub Pages
  basePath: process.env.PAGES_BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.PAGES_BASE_PATH,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

// On GitHub Pages the site may live under a sub-path like /gabriela-portfolio.
// The deploy workflow passes that path in PAGES_BASE_PATH. Locally it is empty.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

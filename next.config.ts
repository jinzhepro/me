import type { NextConfig } from "next";

/**
 * Next.js 配置文件
 */
const nextConfig: NextConfig = {
  /** 图片配置 */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

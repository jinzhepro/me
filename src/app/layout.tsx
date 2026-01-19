import type { Metadata, Viewport } from "next";
import config from "@/data/config.json";
import "./globals.css";
import HeartClickEffect from "@/components/HeartClickEffect";

/**
 * 页面元数据配置
 */
export const metadata: Metadata = {
  title: config.metadata.title.default,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  authors: config.metadata.authors,
  creator: config.metadata.creator,
  openGraph: config.metadata.openGraph,
  twitter: config.metadata.twitter,
  robots: config.metadata.robots,
};

/**
 * 视窗配置
 */
export const viewport: Viewport = {
  width: config.viewport.width,
  initialScale: config.viewport.initialScale,
  maximumScale: config.viewport.maximumScale,
};

/**
 * 根布局组件
 * 为整个应用提供基础布局和样式
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">
        <noscript>
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#fef3cd",
            }}
          >
            请启用 JavaScript 以获得最佳浏览体验。
          </div>
        </noscript>
        <HeartClickEffect />
        {children}
      </body>
    </html>
  );
}

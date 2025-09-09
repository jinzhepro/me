import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * 页面元数据配置
 */
export const metadata: Metadata = {
  title: "张晋哲 - 全栈开发工程师 | 在线简历",
  description:
    "张晋哲的个人在线简历，全栈开发工程师，专注于React、Next.js、Node.js等现代Web技术栈",
  keywords: [
    "张晋哲",
    "全栈开发",
    "React",
    "Next.js",
    "TypeScript",
    "简历",
    "前端工程师",
  ],
  authors: [{ name: "张晋哲" }],
  creator: "张晋哲",
  openGraph: {
    title: "张晋哲 - 全栈开发工程师",
    description: "专业的全栈开发工程师，拥有丰富的React和Node.js开发经验",
    type: "website",
    locale: "zh_CN",
    siteName: "张晋哲的个人简历",
  },
  twitter: {
    card: "summary_large_image",
    title: "张晋哲 - 全栈开发工程师",
    description: "专业的全栈开发工程师，拥有丰富的React和Node.js开发经验",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * 视窗配置
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        {children}
      </body>
    </html>
  );
}

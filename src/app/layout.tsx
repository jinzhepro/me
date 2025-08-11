import type { Metadata } from "next";
import "./globals.css";

/**
 * 页面元数据配置
 */
export const metadata: Metadata = {
  title: "张三 - 全栈开发工程师 | 在线简历",
  description:
    "张三的个人在线简历，全栈开发工程师，专注于React、Next.js、Node.js等现代Web技术栈",
  keywords: [
    "张三",
    "全栈开发",
    "React",
    "Next.js",
    "TypeScript",
    "简历",
    "前端工程师",
  ],
  authors: [{ name: "张三" }],
  creator: "张三",
  openGraph: {
    title: "张三 - 全栈开发工程师",
    description: "专业的全栈开发工程师，拥有丰富的React和Node.js开发经验",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "张三 - 全栈开发工程师",
    description: "专业的全栈开发工程师，拥有丰富的React和Node.js开发经验",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

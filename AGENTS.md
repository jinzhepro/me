# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 项目概述

这是一个基于 Next.js 15 的个人简历网站，使用 TypeScript、Tailwind CSS 和 shadcn/ui 组件库构建。

## 构建和开发命令

- `npm run dev` - 启动开发服务器（使用 Turbopack）
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查

## 项目特定配置

### 路径别名

- `@/*` 映射到 `./src/*`
- `@/components` 映射到组件目录
- `@/lib` 映射到工具函数目录
- `@/data` 映射到数据文件目录

### 组件库配置

- 使用 shadcn/ui 组件库（New York 风格）
- 基础颜色：slate
- 图标库：lucide-react
- CSS 变量：已启用

### 动画系统

- 使用自定义动画系统（src/lib/animations.ts）
- 滚动触发动画：使用 `animate-on-scroll` 类
- 页面加载动画：ProfileCard 立即显示，其他组件等待滚动触发
- 支持减少动画偏好设置

### 数据管理

- 所有静态数据存储在 `src/data/` 目录的 JSON 文件中
- 配置文件：`src/data/config.json` 包含元数据和 SEO 设置
- 类型定义：`src/types/` 目录包含所有数据类型

### 样式系统

- 使用 Tailwind CSS v4
- 自定义 CSS 变量定义在 `src/app/globals.css` 中
- 响应式设计：移动端优先
- 黑白灰配色方案，强调简洁和专业

### 特殊注意事项

- 项目使用两个 Next.js 配置文件（next.config.js 和 next.config.ts），实际使用的是 .js 版本
- 图片远程模式已配置，仅允许 picsum.photos 域名
- 使用 Volta 管理 Node.js 版本（22.19.0）
- 所有组件都应支持服务端渲染（SSR）和客户端渲染（CSR）

# 项目概述

这是一个使用 Next.js 14、TypeScript 和 Tailwind CSS 构建的现代化个人在线简历网站。该项目旨在展示个人技能、工作经验和项目经历，具有现代设计和炫酷动画效果。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **组件**: Radix UI
- **构建工具**: Turbopack

# 构建和运行

## 安装依赖

```bash
npm install
```

## 启动开发服务器

```bash
npm run dev
```

## 构建生产版本

```bash
npm run build
```

## 启动生产服务器

```bash
npm start
```

## 代码检查

```bash
npm run lint
```

# 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # 可复用组件
│   └── Navigation.tsx     # 导航组件
├── data/                  # 静态数据文件
│   ├── projects.json      # 项目数据
│   ├── social.json        # 社交媒体数据
│   └── work.json          # 工作经历数据
└── ...
```

# 开发约定

- 使用 TypeScript 进行类型安全检查
- 使用 Tailwind CSS 进行样式开发
- 使用 Framer Motion 实现动画效果
- 组件化开发，提高代码复用性
- 遵循 Next.js 14 的 App Router 规范

# 部署

推荐使用 Vercel 进行部署，也可以使用其他平台进行部署。
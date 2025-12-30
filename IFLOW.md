# IFLOW 项目上下文

## 项目概述

这是一个使用 Next.js 15、TypeScript 和 Tailwind CSS 4 构建的现代化个人在线简历网站。项目采用简洁优雅的黑白灰配色方案，具有流畅的动画效果和完全响应式的设计。

### 核心技术栈

- **框架**: Next.js 16.1.1 (App Router) + React 19.1.0
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4 + shadcn/ui (New York 风格)
- **动画**: Framer Motion 12.23.12
- **图标**: Lucide React
- **UI 组件**: Radix UI (Avatar, Progress, Separator, Slot)

### 项目特点

- 简洁线框风格设计，黑白灰配色
- 完全响应式布局（桌面端、平板端、移动端）
- 流畅的滚动触发动画和微交互效果
- SEO 优化（结构化数据、Open Graph、Twitter Cards）
- 静态站点生成（SSG）

## 构建和运行

### 环境要求

- **Node.js**: 24.12.0 (通过 Volta 管理)
- **npm**: 需要支持工作区功能

### 可用命令

```bash
# 开发模式（使用 Turbopack 加速）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

### 开发服务器

运行 `npm run dev` 后，访问 http://localhost:3000

## 项目结构

```
me/
├── src/
│   ├── app/                    # Next.js App Router 目录
│   │   ├── globals.css         # 全局样式（包含线框风格样式定义）
│   │   ├── layout.tsx          # 根布局组件（元数据配置）
│   │   ├── page.tsx            # 主页面（整合所有组件）
│   │   ├── loading.tsx         # 加载状态页面
│   │   ├── error.tsx           # 错误页面
│   │   ├── not-found.tsx       # 404 页面
│   │   ├── sitemap.ts          # SEO 站点地图
│   │   └── manifest.ts         # PWA 配置
│   ├── components/             # React 组件
│   │   ├── ui/                # shadcn/ui 基础组件
│   │   │   ├── avatar.tsx     # 头像组件
│   │   │   ├── badge.tsx      # 徽章组件
│   │   │   ├── button.tsx     # 按钮组件
│   │   │   ├── card.tsx       # 卡片组件
│   │   │   ├── progress.tsx   # 进度条组件
│   │   │   └── separator.tsx  # 分隔线组件
│   │   ├── BackToTop.tsx      # 回到顶部按钮
│   │   ├── Education.tsx      # 教育背景展示
│   │   ├── Environment.tsx    # 工作环境展示
│   │   ├── Footer.tsx         # 页脚（已移除）
│   │   ├── JsonLd.tsx         # 结构化数据组件
│   │   ├── MobileMenu.tsx     # 移动端菜单
│   │   ├── Navigation.tsx     # 导航栏
│   │   ├── ProfileCard.tsx    # 个人信息卡片
│   │   ├── ProjectExperience.tsx  # 项目经验
│   │   ├── Skills.tsx         # 技能展示
│   │   ├── SocialMedia.tsx    # 社交媒体链接
│   │   └── WorkExperience.tsx # 工作经历
│   ├── data/                   # 数据文件（JSON 格式）
│   │   ├── config.json        # 全局配置（元数据、视口等）
│   │   ├── education.json     # 教育背景数据
│   │   ├── environment.json   # 工作环境数据
│   │   ├── footer.json        # 页脚数据（已弃用）
│   │   ├── navigation.json    # 导航配置
│   │   ├── profile.json       # 个人信息数据
│   │   ├── projects.json      # 项目数据
│   │   ├── skills.json        # 技能数据
│   │   ├── social.json        # 社交媒体数据
│   │   └── work.json          # 工作经历数据
│   ├── lib/                    # 工具函数
│   │   ├── animations.ts      # 动画工具函数
│   │   ├── demo-animations.ts # 演示动画
│   │   └── utils.ts           # 通用工具函数
│   └── types/                  # TypeScript 类型定义
│       ├── education.ts       # 教育背景类型
│       ├── environment.ts     # 工作环境类型
│       ├── footer.ts          # 页脚类型
│       ├── json.d.ts          # JSON 模块声明
│       ├── navigation.ts      # 导航类型
│       ├── profile.ts         # 个人信息类型
│       ├── project.ts         # 项目类型
│       ├── skills.ts          # 技能类型
│       ├── social.ts          # 社交媒体类型
│       └── work.ts            # 工作经历类型
├── public/                     # 静态资源
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── logo.JPG               # 个人头像
│   ├── next.svg
│   ├── robots.txt
│   └── ... (其他 SVG 图标)
├── .next/                      # Next.js 构建输出目录
├── components.json             # shadcn/ui 配置
├── eslint.config.mjs           # ESLint 配置
├── next.config.ts              # Next.js 配置
├── package.json                # 项目依赖和脚本
├── postcss.config.mjs          # PostCSS 配置
├── tsconfig.json               # TypeScript 配置
└── README.md                   # 项目说明文档
```

## 开发约定

### 代码风格

- **TypeScript**: 启用严格模式（`strict: true`）
- **组件**: 使用函数式组件 + Hooks
- **样式**: 使用 Tailwind CSS，配合自定义 CSS 变量
- **导入路径**: 使用 `@/` 别名引用 `src/` 目录下的文件

### 样式约定

项目采用简洁线框风格，核心样式定义在 `src/app/globals.css`：

- **配色**: 使用 OKLCH 颜色空间，黑白灰为主色调
- **边框层次**:
  - 主要交互元素（按钮、输入框）: 1.5px 边框
  - 卡片容器: 1px 边框
  - 次要元素（标签、社交媒体）: 0.5px 边框
- **圆角**: 统一使用 `var(--radius-md)` 等变量
- **动画**: 支持 `prefers-reduced-motion` 偏好

### 数据管理

- 所有可变内容存储在 `src/data/` 目录的 JSON 文件中
- 使用 TypeScript 类型定义确保类型安全
- 组件通过导入 JSON 文件获取数据

### 动画系统

动画工具函数位于 `src/lib/animations.ts`：

- `initScrollAnimations()`: 初始化滚动触发动画观察器
- `initPageAnimations()`: 初始化页面加载动画
- `smoothScrollTo()`: 平滑滚动到指定元素
- `prefersReducedMotion()`: 检查是否支持减少动画偏好
- `debounce()` / `throttle()`: 性能优化工具函数

动画类名在 `globals.css` 中定义：
- `.animate-fade-in-up`: 淡入向上动画
- `.animate-on-scroll`: 滚动触发动画（配合 `.visible` 类）

### 组件开发

- 使用 shadcn/ui 作为基础组件库
- 遵循组件单一职责原则
- 组件名称使用 PascalCase
- 文件名与组件名称一致

### SEO 最佳实践

- 使用结构化数据（Schema.org）通过 `JsonLd` 组件
- 在 `layout.tsx` 中配置元数据
- 自动生成 `sitemap.ts`
- 语义化 HTML 结构

## 修改个人信息

编辑 `src/data/` 目录下的 JSON 文件：

- **个人信息**: `profile.json`（包括联系方式）
- **工作经历**: `work.json`
- **项目经验**: `projects.json`
- **技能**: `skills.json`
- **教育背景**: `education.json`
- **社交媒体**: `social.json`
- **全局配置**: `config.json`

## 当前状态

- ✅ 已移除 Footer 组件，改为简洁版权信息
- ✅ 联系方式已整合到 ProfileCard（仅保留邮箱：jinzhepro@qq.com）
- ✅ 线框样式已优化（边框层次、圆角统一、阴影效果）
- ✅ 脚部区域已缩小

## 部署

项目可部署到 Vercel、Netlify 等静态站点托管平台。

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### 手动部署

```bash
npm run build
npm start
```

## 注意事项

- 项目使用 Volta 管理 Node.js 版本（24.12.0）
- 开发模式使用 Turbopack 提升构建速度
- 所有组件均为客户端组件（`"use client"`）
- 图片资源使用相对路径 `/logo.JPG`
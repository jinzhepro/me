# 张晋哲 - 现代化个人简历网站

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
</div>

<p align="center">
  一个使用 Next.js 15、TypeScript 和 Tailwind CSS 构建的现代化个人在线简历网站
</p>

<p align="center">
  <a href="#预览">🌐 在线预览</a> ·
  <a href="#特性">✨ 特性</a> ·
  <a href="#快速开始">🚀 快速开始</a> ·
  <a href="#技术栈">🛠️ 技术栈</a>
</p>

## 🌐 预览

📱 **[在线预览](https://me.jinzhepro.cc)** - 查看完整效果

## ✨ 特性

### 🎨 现代化设计

- **简洁优雅** - 采用现代 UI 设计原则，黑白灰配色方案
- **响应式布局** - 完美适配桌面端、平板端和移动端
- **语义化结构** - 良好的 HTML 语义化和 SEO 优化

### 🎭 交互体验

- **流畅动画** - 使用 Framer Motion 实现 60fps 流畅动画
- **平滑滚动** - 智能锚点导航和平滑滚动效果
- **微交互** - 悬停效果、点击反馈等细致微交互

### ⚡ 性能优化

- **静态生成** - 基于 Next.js 15 的静态站点生成
- **代码分割** - 自动代码分割和按需加载
- **构建优化** - Turbopack 极速构建和热更新

## 🛠️ 技术栈

### 核心框架

- **[Next.js 15.4.6](https://nextjs.org/)** - React 全栈框架，支持 App Router
- **[React 19.1.0](https://react.dev/)** - 用户界面构建库
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - 类型安全的 JavaScript

### 样式和 UI

- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - 原子化 CSS 框架
- **[Radix UI](https://www.radix-ui.com/)** - 无样式的可访问组件库
- **[Framer Motion 12.23](https://www.framer.com/motion/)** - 生产级动画库
- **[Lucide React](https://lucide.dev/)** - 现代化图标库

### 开发工具

- **[Turbopack](https://turbo.build/pack)** - 极速构建工具
- **[ESLint](https://eslint.org/)** - 代码质量检查
- **[Volta](https://volta.sh/)** - Node.js 版本管理

## 🚀 快速开始

### 系统要求

- **Node.js**: ≥ 18.0.0 (推荐 22.19.0)
- **npm**: ≥ 8.0.0 或 **yarn**: ≥ 1.22.0

### 安装步骤

1. **克隆项目**

   ```bash
   git clone https://github.com/jinzhepro/me.git
   cd me
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

3. **启动开发服务器**

   ```bash
   npm run dev
   ```

4. **访问应用**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 可用命令

```bash
npm run dev    # 开发模式
npm run build  # 构建生产版本
npm start      # 启动生产服务器
npm run lint   # 代码检查
```

## 📁 项目结构

```
me/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # 全局样式
│   │   ├── layout.tsx          # 根布局组件
│   │   ├── page.tsx            # 主页面组件
│   │   ├── loading.tsx         # 加载页面
│   │   ├── error.tsx           # 错误页面
│   │   ├── sitemap.ts          # 站点地图
│   │   └── manifest.ts         # PWA 配置
│   ├── components/             # React 组件
│   │   ├── ui/                # 基础 UI 组件
│   │   ├── Navigation.tsx     # 导航栏
│   │   ├── ProfileCard.tsx    # 个人信息卡片
│   │   ├── Skills.tsx         # 技能展示
│   │   └── ...                # 其他组件
│   ├── data/                   # 数据文件
│   │   ├── projects.json      # 项目数据
│   │   ├── work.json          # 工作经历数据
│   │   └── social.json        # 社交媒体数据
│   ├── lib/                    # 工具函数
│   └── types/                  # TypeScript 类型
└── public/                     # 静态资源
```

## 🎨 主要功能模块

### 1. 个人信息展示

- 头像和基本信息
- 社交媒体链接
- 联系方式

### 2. 技能展示

- 技能进度条动画
- 语言能力展示
- 技术栈标签

### 3. 工作经验

- 时间线布局
- 详细职位描述
- 公司和项目信息

### 4. 项目展示

- 项目卡片布局
- 技术栈标签
- 外部链接

### 5. 教育背景

- 学历信息
- 成绩展示

## 🎭 动画效果

- **页面加载动画** - 渐入效果
- **滚动触发动画** - 元素依次出现
- **悬停效果** - 卡片和按钮交互
- **背景粒子** - 动态粒子背景
- **技能条动画** - 进度条填充效果

## 📱 响应式设计

- **桌面端** (≥1024px) - 完整布局和导航
- **平板端** (768px-1023px) - 适配中等屏幕
- **移动端** (<768px) - 移动优化布局

## 🔧 自定义配置

### 个人信息配置

编辑 `src/data/` 目录下的 JSON 文件来更新个人信息：

- **工作经历**: `src/data/work.json`
- **项目经验**: `src/data/projects.json`
- **社交媒体**: `src/data/social.json`

### 主题定制

在 `src/app/globals.css` 中修改颜色变量：

```css
:root {
  --primary: oklch(0.61 0.18 240); /* 主色 */
  --success: oklch(0.58 0.18 140); /* 成功色 */
  --warning: oklch(0.79 0.12 80); /* 警告色 */
}
```

### SEO 配置

编辑 `src/app/layout.tsx` 中的元数据：

```typescript
export const metadata: Metadata = {
  title: "你的姓名 - 职位 | 在线简历",
  description: "你的简历描述",
  // ... 其他配置
};
```

## 🚀 部署

### Vercel 部署 (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jinzhepro/me)

**步骤**：

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 点击部署，自动完成

### 其他平台

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 🔍 SEO 和性能

### SEO 特性

- ✅ 结构化数据 (Schema.org)
- ✅ Open Graph 和 Twitter Cards
- ✅ 自动生成 sitemap.xml
- ✅ robots.txt 配置
- ✅ 语义化 HTML 结构

### 性能指标

- **First Contentful Paint**: ~1.2s
- **Largest Contentful Paint**: ~1.8s
- **Total Bundle Size**: ~159kB

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 邮箱: jinzhepro@qq.com
- GitHub: [jinzhepro](https://github.com/jinzhepro)
- 博客: [https://jinzhepro.github.io/](https://jinzhepro.github.io/)

---

⭐ 如果这个项目对你有帮助，请给个 Star！

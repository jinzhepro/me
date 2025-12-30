# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 项目文档规则（仅非显而易见部分）

### 项目结构理解

- `src/data/` 目录包含所有静态数据，修改内容时必须同时更新对应的类型定义
- `src/types/` 目录的类型定义必须与 JSON 数据结构完全匹配
- `src/lib/animations.ts` 包含所有动画逻辑，不要在组件中直接编写动画代码

### 组件文档

- 所有组件都有中文注释，说明其用途和特殊行为
- ProfileCard 组件有特殊的立即显示行为，与其他组件不同
- 导航组件使用固定定位，影响滚动偏移量（120px）

### 样式系统文档

- 使用 Tailwind CSS v4 新语法，与传统 v3 不同
- 颜色系统基于 OKLCH 色彩空间，定义在 `src/app/globals.css` 中
- 响应式设计采用移动端优先，注意断点设置

### 配置文件说明

- 项目有两个 Next.js 配置文件，实际使用 `next.config.js`
- `components.json` 定义了 shadcn/ui 的配置，包括路径别名
- `tsconfig.json` 中的路径别名与 `components.json` 保持一致

### 数据管理

- 所有内容数据都在 `src/data/` 目录的 JSON 文件中
- 配置数据在 `src/data/config.json`，包含 SEO 和元数据设置
- 修改数据时必须保持类型安全，参考 `src/types/` 中的接口定义

### 特殊功能

- 支持减少动画偏好设置，通过 `prefersReducedMotion()` 检测
- 图片优化仅允许 picsum.photos 域名的远程图片
- 使用 Volta 管理 Node.js 版本，确保环境一致性

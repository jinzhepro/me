# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 项目编码规则（仅非显而易见部分）

### 动画系统使用

- 必须使用 `src/lib/animations.ts` 中的动画函数，不要直接操作 CSS 动画
- 滚动触发动画使用 `animate-on-scroll` 类，配合 `initScrollAnimations()` 函数
- ProfileCard 立即显示，其他组件应等待滚动触发（使用 `animate-on-scroll` 类）
- 始终检查 `prefersReducedMotion()` 来尊重用户的动画偏好

### 组件开发规范

- 所有组件必须支持 SSR 和 CSR，使用 `"use client"` 指令时要谨慎
- 使用 `cn()` 函数（来自 `@/lib/utils`）合并 Tailwind 类名
- 组件导入顺序：React 相关 → 第三方库 → 本地组件 → 类型定义 → 工具函数
- 使用 shadcn/ui 组件时，遵循 New York 风格和 slate 配色方案

### 数据处理

- 所有静态数据必须从 `src/data/` 目录的 JSON 文件导入
- 类型定义必须与 `src/types/` 目录中的接口保持一致
- 修改数据结构时，必须同步更新对应的 TypeScript 类型定义

### 简洁线条风格样式约定

- 使用 Tailwind CSS v4 语法，遵循简洁线条风格设计原则
- 响应式设计采用移动端优先原则
- 颜色使用 CSS 变量，不要硬编码颜色值
- 所有交互元素使用边框变化而非阴影或变换效果
- 悬停状态仅改变边框颜色，避免复杂的变换和阴影
- 按钮和卡片使用适中圆角（0.5rem），平衡简洁与友好
- 进度条使用细线条（2px 高度）而非粗条状

### 性能优化

- 图片使用 Next.js Image 组件，远程图片仅允许 picsum.photos 域名
- 使用 Intersection Observer 实现懒加载和滚动触发动画
- 避免在服务端组件中使用浏览器 API

### 特殊注意事项

- 项目有两个 Next.js 配置文件，实际使用的是 `next.config.js`
- 使用 Volta 管理 Node.js 版本（22.19.0），不要使用其他版本管理器
- 所有组件必须支持中文内容，注意字体和排版优化
- 设计风格为简洁线条风格，避免渐变、阴影和复杂效果

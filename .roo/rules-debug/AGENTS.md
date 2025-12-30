# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 项目调试规则（仅非显而易见部分）

### 动画调试

- 滚动触发动画问题：检查 `src/lib/animations.ts` 中的 `initScrollAnimations()` 函数
- 动画不生效：确认元素是否添加了 `animate-on-scroll` 类
- 性能问题：检查 Intersection Observer 的阈值设置（当前为 0.1）
- 动画偏好：使用 `prefersReducedMotion()` 检查用户设置

### 样式调试

- CSS 变量问题：检查 `src/app/globals.css` 中的 `@theme inline` 部分
- 响应式问题：Tailwind CSS v4 使用新的语法，注意断点变化
- 动画性能：使用 Chrome DevTools 的 Performance 面板检查动画帧率

### 组件调试

- SSR/CSR 问题：检查组件是否正确使用 `"use client"` 指令
- 数据加载问题：确认 JSON 文件路径和类型定义是否匹配
- 路由问题：Next.js 15 使用 App Router，注意文件命名约定

### 构建调试

- 构建失败：检查 `next.config.js` 配置（注意不是 `next.config.ts`）
- 图片问题：确认远程图片域名是否在允许列表中（仅 picsum.photos）
- 类型错误：检查 `src/types/` 目录中的类型定义是否与数据结构一致

### 开发环境调试

- 热重载问题：开发服务器使用 Turbopack，可能有不同的行为
- Node.js 版本：确保使用 Volta 管理的 22.19.0 版本
- 端口冲突：默认使用 3000 端口，检查是否有其他服务占用

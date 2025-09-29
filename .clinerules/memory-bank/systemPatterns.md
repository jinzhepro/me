# 系统模式 (System Patterns)

## 系统架构

- **前端框架**: Next.js 15 with App Router
- **组件库**: React 19.1.0 组件化架构
- **样式系统**: Tailwind CSS 4.0 原子化 CSS
- **动画系统**: Framer Motion 动画库
- **UI 组件**: Radix UI 无障碍组件库

## 关键技术决策

- **服务端渲染**: 使用 Next.js SSG 静态生成提升性能
- **响应式设计**: 移动优先的响应式设计策略
- **组件复用**: 高度模块化的组件设计
- **数据驱动**: JSON 文件驱动的内容管理系统

## 设计模式

- **组件化模式**: 可复用的 UI 组件设计
- **上下文模式**: ThemeContext 进行主题管理
- **数据分离**: 将内容数据与组件逻辑分离
- **渐进增强**: 确保基础功能优先的开发策略

## 组件关系

- **Layout 组件**: src/app/layout.tsx - 全局布局
- **页面组件**: src/app/page.tsx - 主页面入口
- **UI 组件**: src/components/ - 可复用业务组件
- **基础组件**: src/components/ui/ - 基础 UI 组件

## 关键实现路径

1. **路由系统**: Next.js App Router 实现页面导航
2. **状态管理**: React Context API 进行状态管理
3. **样式系统**: Tailwind CSS + CSS 变量进行主题定制
4. **动画系统**: Framer Motion 实现交互动画
5. **数据管理**: JSON 文件 + TypeScript 类型定义

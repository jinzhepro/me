# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 项目架构规则（仅非显而易见部分）

### 架构设计原则

- 单页应用架构，所有内容在主页面上通过组件渲染
- 数据驱动设计：所有内容从 JSON 文件加载，便于维护和更新
- 组件化架构：每个功能区域都是独立组件，支持复用和测试

### 关键架构决策

- 使用 Next.js 15 App Router 而非 Pages Router
- 选择 Tailwind CSS v4 而非 v3，利用新语法和性能改进
- shadcn/ui 作为组件库，提供一致的设计系统
- 自定义动画系统而非第三方动画库，减少依赖

### 数据流架构

- 静态数据流：JSON 文件 → 类型定义 → 组件 props
- 无状态组件设计：所有组件都是纯函数，便于测试和维护
- 配置集中化：所有配置项在 `src/data/config.json` 中管理

### 性能架构

- 代码分割：按路由和组件自动分割
- 图片优化：Next.js Image 组件 + 域名白名单
- 动画性能：Intersection Observer + CSS transforms
- 懒加载：滚动触发动画减少初始渲染负担

### 样式架构

- 原子化 CSS：Tailwind CSS v4 提供高度可定制的样式系统
- 设计令牌：CSS 变量定义颜色、间距等设计系统
- 响应式架构：移动端优先的断点系统
- 主题系统：基于 CSS 变量的可切换主题（虽然当前只实现浅色）

### 扩展性考虑

- 类型安全：TypeScript 接口确保数据结构一致性
- 组件复用：通用组件在 `src/components/ui/` 中
- 工具函数：可复用逻辑在 `src/lib/` 中
- 配置驱动：通过修改 JSON 文件即可更新内容

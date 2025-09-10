# 系统架构模式

## 系统架构

- 采用 Next.js 14 App Router 架构
- 客户端渲染与服务端渲染混合模式
- 静态站点生成(SSG)优化性能
- 组件化架构设计

## 关键技术决策

- 使用 TypeScript 提供类型安全
- 采用 Tailwind CSS 进行原子化样式管理
- 使用 Shadcn UI 组件库提高开发效率
- 数据通过 JSON 文件静态管理
- 采用响应式设计适配多设备

## 设计模式

- 组件化开发模式
- 容器-展示组件分离模式
- 自定义 Hook 封装复用逻辑
- 上下文 API 管理全局状态
- 高阶组件封装通用功能

## 组件关系

- Layout 组件: 全局布局
- Navigation 组件: 导航栏
- ProfileCard 组件: 个人简介卡片
- Skills 组件: 技能展示
- ProjectExperience 组件: 项目经验
- WorkExperience 组件: 工作经历
- Footer 组件: 页脚信息

## 关键实现路径

1. 初始化 Next.js 项目结构
2. 配置 TypeScript 和 Tailwind CSS
3. 实现基础布局组件
4. 开发各功能模块组件
5. 集成数据展示
6. 优化性能和用户体验

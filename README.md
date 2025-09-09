# 现代炫酷在线简历

一个使用 Next.js 14、TypeScript 和 Tailwind CSS 构建的现代化个人在线简历网站。

## ✨ 特性

- 🎨 **现代设计** - 采用渐变背景和毛玻璃效果
- 🌟 **炫酷动画** - 使用 Framer Motion 实现流畅的动画效果
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎯 **平滑导航** - 智能导航栏，支持锚点跳转
- ⚡ **性能优化** - 基于 Next.js 14 和 Turbopack
- 🎭 **动态背景** - 粒子动画背景效果
- 🔧 **TypeScript** - 完整的类型安全支持

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **组件**: Radix UI
- **构建工具**: Turbopack

## 📦 安装和运行

1. **克隆项目**

   ```bash
   git clone <repository-url>
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

4. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

## 🎯 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # 可复用组件
│   └── Navigation.tsx     # 导航组件
└── ...
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

### 修改个人信息

编辑 `src/app/page.tsx` 文件中的以下内容：

```typescript
// 个人基本信息
const personalInfo = {
  name: "你的姓名",
  title: "你的职位",
  email: "your.email@example.com",
  phone: "+86 138 0013 8000",
  location: "你的城市",
};

// 技能列表
const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  // 添加更多技能...
];
```

### 修改主题颜色

在 `src/app/globals.css` 中调整 CSS 变量：

```css
:root {
  --primary-color: #8b5cf6;
  --secondary-color: #ec4899;
  --background-start: #0f172a;
  --background-end: #581c87;
}
```

## 🚀 部署

### Vercel 部署 (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

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

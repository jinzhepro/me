"use client";

import {
  Github,
  Mail,
  Globe,
  Heart,
  Code,
  Zap,
  User,
  Briefcase,
} from "lucide-react";

/**
 * 页脚组件
 * 展示版权信息、快速导航和社交媒体链接
 * 使用动画效果和增强的视觉设计提升用户体验
 */
const Footer: React.FC = () => {
  const footerLinks = [
    { name: "关于我", href: "#about", icon: User },
    { name: "工作经历", href: "#experience", icon: Briefcase },
    { name: "项目经验", href: "#projects", icon: Code },
    { name: "技能专长", href: "#skills", icon: Zap },
    { name: "社交媒体", href: "#social-media", icon: Globe },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/jinzhepro", icon: Github },
    { name: "博客", href: "https://jinzhepro.github.io/", icon: Globe },
  ];

  const contactLinks = [
    { name: "邮箱", href: "mailto:jinzhepro@qq.com", icon: Mail },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted to-muted/80 border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-center">
          {/* 快速导航 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent-warm" />
              快速导航
            </h3>
            <div className="space-y-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 interactive-item p-2 rounded-lg hover:bg-accent/10 hover:shadow-sm hover:scale-105"
                >
                  <link.icon className="h-3 w-3" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              社交媒体
            </h3>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 interactive-item p-2 rounded-lg hover:bg-accent/10 hover:shadow-sm hover:scale-105"
                >
                  <link.icon className="h-3 w-3" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent-warm" />
              联系方式
            </h3>
            <div className="space-y-2">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 interactive-item p-2 rounded-lg hover:bg-accent/10 hover:shadow-sm hover:scale-105"
                >
                  <link.icon className="h-3 w-3" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="separator mb-6" />

        {/* 版权信息 */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2025 张晋哲. 使用
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              VSCode
            </a>
            {" + "}
            <a
              href="https://github.com/cline/cline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Cline
            </a>
            {" + "}
            <a
              href="https://open.bigmodel.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              GLM-4.5
            </a>
            辅助开发.
          </p>
          <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
            <Heart className="h-3 w-3 text-red-500" />
            用心构建每一个项目
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

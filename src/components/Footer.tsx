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

// 从JSON文件导入数据和类型
import footerData from "@/data/footer.json";
import { FooterData, FooterLink } from "@/types/footer";

/**
 * 页脚组件
 * 展示版权信息、快速导航和社交媒体链接
 * 使用动画效果和增强的视觉设计提升用户体验
 */
const Footer: React.FC = () => {
  const {
    footerLinks,
    socialLinks,
    contactLinks,
    copyright,
    footerMessage,
  }: FooterData = footerData;

  // 图标映射：将字符串映射到React组件
  const iconMap = {
    Github,
    Mail,
    Globe,
    Code,
    Zap,
    User,
    Briefcase,
  };

  // 渲染链接项的函数
  const renderLinkItem = (
    link: FooterLink,
    index: number,
    isSocial: boolean = false
  ) => {
    const Icon = iconMap[link.icon as keyof typeof iconMap];
    return (
      <a
        key={index}
        href={link.href}
        target={isSocial ? "_blank" : undefined}
        rel={isSocial ? "noopener noreferrer" : undefined}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 p-1.5 rounded-lg hover:bg-accent/10"
      >
        <Icon className="h-3 w-3" />
        {link.name}
      </a>
    );
  };

  return (
    <footer className="bg-gradient-to-b from-muted to-muted/80 border-t border-border mt-12">
      <div className="container mx-auto px-4 py-6">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 justify-center">
          {/* 快速导航 */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent-warm" />
              快速导航
            </h3>
            <div className="space-y-2">
              {footerLinks.map((link, index) => renderLinkItem(link, index))}
            </div>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              社交媒体
            </h3>
            <div className="space-y-2">
              {socialLinks.map((link, index) =>
                renderLinkItem(link, index, true)
              )}
            </div>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent-warm" />
              联系方式
            </h3>
            <div className="space-y-2">
              {contactLinks.map((link, index) => renderLinkItem(link, index))}
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="separator mb-4" />

        {/* 版权信息 */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            {copyright.text}
            {copyright.links.map((link, index) => (
              <span key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-colors"
                >
                  {link.name}
                </a>
                {index < copyright.links.length - 1 && " + "}
              </span>
            ))}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5 flex items-center justify-center gap-1">
            <Heart className="h-3 w-3 text-red-500" />
            {footerMessage}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

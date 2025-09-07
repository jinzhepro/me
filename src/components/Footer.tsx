"use client";

import { motion } from "framer-motion";
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
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-muted to-muted/80 border-t border-border mt-12"
    >
      <div className="container mx-auto px-4 py-8">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-center">
          {/* 快速导航 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent-warm" />
              快速导航
            </h3>
            <div className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 interactive-item p-2 rounded-lg hover:bg-accent/10 hover:shadow-sm hover:scale-105"
                >
                  <link.icon className="h-3 w-3" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 社交媒体 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              社交媒体
            </h3>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 interactive-item p-2 rounded-lg hover:bg-accent/10 hover:shadow-sm hover:scale-105"
                >
                  <link.icon className="h-3 w-3" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent-warm" />
              联系方式
            </h3>
            <div className="space-y-2">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 interactive-item p-2 rounded-lg hover:bg-accent/10 hover:shadow-sm hover:scale-105"
                >
                  <link.icon className="h-3 w-3" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 分隔线 */}
        <div className="separator mb-6" />

        {/* 版权信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
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
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

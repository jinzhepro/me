"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Globe, ExternalLink } from "lucide-react";

/**
 * 社交媒体组件
 * 展示个人社交媒体和在线平台链接
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function SocialMedia() {
  const socialMediaLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "jinzhepro",
      action: "https://github.com/jinzhepro",
      description: "开源项目和代码",
      highlight: false,
    },
    {
      icon: Globe,
      label: "博客",
      value: "jinzhepro.github.io",
      action: "https://jinzhepro.github.io/",
      description: "技术文章分享",
      highlight: false,
    },
  ];

  const handleSocialAction = (action: string) => {
    if (action.startsWith("http")) {
      window.open(action, "_blank");
    }
  };

  interface SocialMediaLink {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
    action: string;
    description: string;
    highlight: boolean;
  }

  const SocialMediaCard = ({
    link,
    index,
  }: {
    link: SocialMediaLink;
    index: number;
  }) => {
    const Icon = link.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
        onClick={() => handleSocialAction(link.action)}
      >
        <div
          className={`p-4 rounded-lg border transition-all duration-300 interactive-item ${
            link.highlight
              ? "bg-gradient-to-br from-accent-warm/10 to-transparent border-accent-warm/30 hover:border-accent-warm hover:shadow-md"
              : "bg-muted/10 border-border hover:border-primary/50 hover:shadow-sm"
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  link.highlight
                    ? "bg-accent-warm/20 text-accent-warm"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {link.label}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {link.description}
                </p>
              </div>
            </div>
            {link.highlight && (
              <div className="h-2 w-2 bg-accent-warm rounded-full animate-pulse"></div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span
              className={`text-sm font-medium ${
                link.highlight ? "text-accent-warm" : "text-foreground"
              }`}
            >
              {link.value}
            </span>
            <button
              className={`p-1 rounded transition-all duration-200 ${
                link.highlight
                  ? "bg-accent-warm/20 hover:bg-accent-warm/30 text-accent-warm hover:text-accent-warm-foreground"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="social-media"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 animate-fade-in-up"
    >
      <Card className="card-hover">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Globe className="h-6 w-6 text-accent-warm" />
            社交媒体
          </CardTitle>
          <p className="text-muted-foreground">
            关注我的社交媒体，了解更多技术分享和项目动态
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialMediaLinks.map((link, index) => (
              <SocialMediaCard key={index} link={link} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

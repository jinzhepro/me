"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
/**
 * 社交媒体组件
 * 展示个人社交媒体和在线平台链接
 * 使用动画效果和增强的视觉设计提升用户体验
 */
import { SocialMediaLink as SocialMediaLinkType } from "@/types/social";
import socialData from "@/data/social.json";
import { Github, Globe, ExternalLink } from "lucide-react";

export default function SocialMedia() {
  // 图标映射：将字符串映射到React组件
  const iconMap = {
    Github,
    Globe,
  };

  const socialMediaLinks: SocialMediaLinkType[] =
    socialData as SocialMediaLinkType[];

  const handleSocialAction = (action: string) => {
    if (action.startsWith("http")) {
      window.open(action, "_blank");
    }
  };

  interface SocialMediaCardProps {
    link: SocialMediaLinkType;
  }

  const SocialMediaCard = ({ link }: SocialMediaCardProps) => {
    const Icon = iconMap[link.icon as keyof typeof iconMap];

    return (
      <div
        className="group social-card"
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
              <div className="h-2 w-2 bg-accent-warm rounded-lg animate-pulse"></div>
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
              className={`p-1 rounded-lg transition-all duration-200 focus:outline-none focus:ring-0 ${
                link.highlight
                  ? "bg-accent-warm/20 hover:bg-accent-warm/30 text-accent-warm hover:text-accent-warm-foreground"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <ExternalLink className="h-3 w-3" aria-label="外部链接图标" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="social-media"
      className="mt-8 animate-fade-in-up animate-on-scroll"
    >
      <Card className="card-hover">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Globe
              className="h-6 w-6 text-accent-warm"
              aria-label="社交媒体图标"
            />
            社交媒体
          </CardTitle>
          <p className="text-muted-foreground">
            关注我的社交媒体，了解更多技术分享和项目动态
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialMediaLinks.map((link, index) => (
              <SocialMediaCard key={index} link={link} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

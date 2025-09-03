"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Globe,
  MessageCircle,
  Copy,
  ExternalLink,
  Calendar,
  Users,
} from "lucide-react";

/**
 * 联系方式组件
 * 展示个人联系信息和沟通方式
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "邮箱",
      value: "jinzhepro@qq.com",
      action: "mailto:jinzhepro@qq.com",
      description: "工作邮箱，24小时内回复",
      highlight: true,
    },
    {
      icon: Phone,
      label: "微信",
      value: "jinzhepro",
      action: "copy",
      description: "扫码或搜索添加",
      highlight: true,
    },
    {
      icon: MapPin,
      label: "位置",
      value: "中国青岛",
      action: "map",
      description: "可远程协作",
      highlight: false,
    },
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
    {
      icon: MessageCircle,
      label: "在线沟通",
      value: "立即联系",
      action: "chat",
      description: "快速响应咨询",
      highlight: true,
    },
  ];

  const handleContactAction = (action: string, value: string) => {
    switch (action) {
      case "copy":
        navigator.clipboard.writeText(value);
        // 这里可以添加复制成功的提示
        break;
      case "chat":
        // 这里可以添加打开聊天窗口的逻辑
        break;
      default:
        if (action.startsWith("http")) {
          window.open(action, "_blank");
        } else if (action.startsWith("mailto:")) {
          window.location.href = action;
        }
    }
  };
  interface ContactMethod {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
    action: string;
    description: string;
    highlight: boolean;
  }

  const ContactCard = ({
    method,
    index,
  }: {
    method: ContactMethod;
    index: number;
  }) => {
    const Icon = method.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <div
          className={`p-4 rounded-lg border transition-all duration-300 interactive-item ${
            method.highlight
              ? "bg-gradient-to-br from-accent-warm/10 to-transparent border-accent-warm/30 hover:border-accent-warm hover:shadow-md"
              : "bg-muted/10 border-border hover:border-primary/50 hover:shadow-sm"
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  method.highlight
                    ? "bg-accent-warm/20 text-accent-warm"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {method.label}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {method.description}
                </p>
              </div>
            </div>
            {method.highlight && (
              <div className="h-2 w-2 bg-accent-warm rounded-full animate-pulse"></div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span
              className={`text-sm font-medium ${
                method.highlight ? "text-accent-warm" : "text-foreground"
              }`}
            >
              {method.value}
            </span>
            <button
              onClick={() => handleContactAction(method.action, method.value)}
              className={`p-1 rounded transition-all duration-200 ${
                method.highlight
                  ? "bg-accent-warm/20 hover:bg-accent-warm/30 text-accent-warm hover:text-accent-warm-foreground"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {method.action === "copy" ? (
                <Copy className="h-3 w-3" />
              ) : method.action.startsWith("http") ? (
                <ExternalLink className="h-3 w-3" />
              ) : (
                <MessageCircle className="h-3 w-3" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 animate-fade-in-up"
    >
      <Card className="card-hover">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Mail className="h-6 w-6 text-accent-warm" />
            联系方式
          </CardTitle>
          <p className="text-muted-foreground">
            欢迎通过以下方式与我联系，期待与您的合作交流
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          {/* 主要联系方式 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {contactMethods.slice(0, 3).map((method, index) => (
              <ContactCard key={index} method={method} index={index} />
            ))}
          </div>

          <div className="separator my-6" />

          {/* 其他联系方式 */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Users className="h-4 w-4" />
              更多联系方式
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactMethods.slice(3).map((method, index) => (
                <ContactCard
                  key={index + 3}
                  method={method}
                  index={index + 3}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

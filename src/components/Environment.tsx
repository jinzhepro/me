"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Monitor,
  Cpu,
  Mouse,
  Keyboard,
  Code,
  Settings,
  Zap,
  Globe,
  Puzzle,
  Star,
} from "lucide-react";

/**
 * 工作环境组件
 * 展示个人工作环境和开发工具配置
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function Environment() {
  const hardwareDevices = [
    { name: "电脑", value: "Mac Mini M4 32G", icon: Cpu, highlight: true },
    { name: "鼠标", value: "Logitech MX Master 3s", icon: Mouse },
    { name: "键盘", value: "Logitech K380", icon: Keyboard },
  ];

  const developmentTools = [
    { name: "编辑器", value: "VSCode", icon: Code, highlight: true },
    { name: "node版本管理", value: "Volta", icon: Settings },
    { name: "环境部署", value: "Docker", icon: Zap },
    { name: "AI工具", value: "cline", icon: Star, highlight: true },
  ];

  const software = [
    { name: "剪切板工具", value: "Maccy", icon: Settings },
    { name: "浏览器", value: "Edge", icon: Globe },
  ];

  const browserPlugins = [
    { name: "豆包", icon: "🤖", category: "AI助手" },
    { name: "ADGuard", icon: "🛡️", category: "安全防护" },
    { name: "iCloud密码", icon: "🔐", category: "密码管理" },
    { name: "React Developer Tools", icon: "⚛️", category: "开发工具" },
    { name: "Vue Devtools", icon: "💚", category: "开发工具" },
  ];

  interface EnvironmentItem {
    name: string;
    value?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
    highlight?: boolean;
    category?: string;
  }

  const EnvironmentSection = ({
    title,
    icon: Icon,
    items,
  }: {
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
    items: EnvironmentItem[];
  }) => (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 interactive-item"
            >
              <div className="flex items-center gap-2">
                {ItemIcon && (
                  <div className={`p-1 rounded`}>
                    {typeof ItemIcon === "string" ? (
                      <span className="text-sm">{ItemIcon}</span>
                    ) : (
                      <ItemIcon
                        className={`h-3 w-3 ${
                          item.highlight
                            ? "text-accent-warm"
                            : "text-muted-foreground"
                        }`}
                      />
                    )}
                  </div>
                )}
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs ${
                    item.highlight
                      ? "text-accent-warm font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.value}
                </span>
                {item.category && (
                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="environment" className="animate-fade-in-up animate-on-scroll">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-accent-warm" />
            工作环境
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 硬件设备 */}
          <EnvironmentSection
            title="硬件设备"
            icon={Cpu}
            items={hardwareDevices}
            delay={0.1}
          />

          <Separator className="my-4" />

          {/* 开发工具 */}
          <EnvironmentSection
            title="开发工具"
            icon={Code}
            items={developmentTools}
            delay={0.3}
          />

          <Separator className="my-4" />

          {/* 软件 */}
          <EnvironmentSection
            title="常用软件"
            icon={Settings}
            items={software}
            delay={0.5}
          />

          <Separator className="my-4" />

          {/* 浏览器插件 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-muted">
                <Puzzle className="h-4 w-4 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-semibold">浏览器插件</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {browserPlugins.map((plugin, index) => (
                <div
                  key={index}
                  className="tech-tag interactive-item flex items-center justify-between h-10 group"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-sm flex-shrink-0">{plugin.icon}</span>
                    <span className="text-sm font-medium truncate">
                      {plugin.name}
                    </span>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded flex-shrink-0 ml-2 group-hover:text-foreground ">
                    {plugin.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

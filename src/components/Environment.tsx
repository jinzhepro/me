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

// 从JSON文件导入数据和类型
import environmentData from "@/data/environment.json";
import { EnvironmentData, EnvironmentItem } from "@/types/environment";

/**
 * 工作环境组件
 * 展示个人工作环境和开发工具配置
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function Environment() {
  const { browserPlugins, sections }: EnvironmentData = environmentData;

  // 图标映射：将字符串映射到React组件
  const iconMap = {
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
  };

  interface EnvironmentSectionProps {
    title: string;
    icon: string;
    items: EnvironmentItem[];
  }

  const EnvironmentSection = ({
    title,
    icon,
    items,
  }: EnvironmentSectionProps) => {
    const Icon = iconMap[icon as keyof typeof iconMap];
    return (
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <h4 className="text-sm font-semibold">{title}</h4>
        </div>
        <div className="space-y-2">
          {items.map((item, index) => {
            const ItemIcon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 interactive-item"
              >
                <div className="flex items-center gap-2">
                  {item.icon && (
                    <div className={`p-1 rounded-lg`}>
                      {typeof item.icon === "string" &&
                      !iconMap[item.icon as keyof typeof iconMap] ? (
                        <span className="text-sm">{item.icon}</span>
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
                    <span className="text-xs bg-muted px-2 py-1 rounded-lg">
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
  };

  return (
    <section className="animate-fade-in-up">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-accent-warm" />
            工作环境
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 动态渲染环境部分 */}
          {sections.map((section, index) => (
            <EnvironmentSection
              key={index}
              title={section.title}
              icon={section.icon}
              items={section.items}
            />
          ))}

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
                  <span className="text-xs bg-muted px-2 py-1 rounded-lg flex-shrink-0 ml-2 group-hover:text-foreground ">
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

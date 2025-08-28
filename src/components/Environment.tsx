"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Monitor } from "lucide-react";

/**
 * 工作环境组件
 * 展示个人工作环境和开发工具配置
 */
export default function Environment() {
  const hardwareDevices = [
    { name: "电脑", value: "Mac Mini M4 32G" },
    { name: "鼠标", value: "Logitech MX Master 3s" },
    { name: "键盘", value: "Logitech K380" },
  ];

  const developmentTools = [
    { name: "编辑器", value: "VSCode" },
    { name: "node版本管理", value: "Volta" },
    { name: "环境部署", value: "Docker" },
    { name: "AI工具", value: "cline" },
  ];

  const software = [
    { name: "剪切板工具", value: "Maccy" },
    { name: "浏览器", value: "Edge" },
  ];

  const browserPlugins = [
    "豆包",
    "ADGuard",
    "iCloud密码",
    "React Developer Tools",
    "Vue Devtools",
  ];

  return (
    <section id="environment" className="animate-fade-in-up">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            工作环境
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* 硬件设备 */}
          <div>
            <h4 className="text-sm font-medium mb-3">硬件设备</h4>
            <div className="space-y-2">
              {hardwareDevices.map((device, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{device.name}:</span>
                  <span className="text-sm text-muted-foreground">
                    {device.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="separator" />

          {/* 开发工具 */}
          <div>
            <h4 className="text-sm font-medium mb-3">开发工具</h4>
            <div className="space-y-2">
              {developmentTools.map((tool, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{tool.name}:</span>
                  <span className="text-sm text-muted-foreground">
                    {tool.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="separator" />

          {/* 软件 */}
          <div>
            <h4 className="text-sm font-medium mb-3">软件</h4>
            <div className="space-y-2">
              {software.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{item.name}:</span>
                  <span className="text-sm text-muted-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="separator" />

          {/* 浏览器插件 */}
          <div>
            <h4 className="text-sm font-medium mb-3">浏览器插件</h4>
            <div className="flex flex-wrap gap-2">
              {browserPlugins.map((plugin, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {plugin}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

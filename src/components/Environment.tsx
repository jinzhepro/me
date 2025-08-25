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
    { name: "键盘", value: "Logitech K380" }
  ];

  const developmentTools = [
    { name: "编辑器", value: "Trae" },
    { name: "node版本管理", value: "Volta" },
    { name: "环境部署", value: "Docker" }
  ];

  const software = [
    { name: "剪切板工具", value: "Maccy" },
    { name: "截图录屏工具", value: "Longshot" },
    { name: "浏览器", value: "Edge" }
  ];

  const browserPlugins = [
    "豆包", "ADGuard", "iCloud密码", "React Developer Tools", "Vue Devtools"
  ];

  return (
    <section id="environment" className="animate-fade-in-up">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            工作环境
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 硬件设备 */}
          <div className="animate-fade-in-up">
            <h4 className="text-sm font-semibold mb-3">硬件设备</h4>
            <div className="space-y-2">
              {hardwareDevices.map((device, index) => (
                <div key={index} className="flex justify-between items-center animate-fade-in-up">
                  <span className="text-sm font-medium">{device.name}:</span>
                  <span className="text-sm text-muted-foreground">{device.value}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* 开发工具 */}
          <div className="animate-fade-in-up">
            <h4 className="text-sm font-semibold mb-3">开发工具</h4>
            <div className="space-y-2">
              {developmentTools.map((tool, index) => (
                <div key={index} className="flex justify-between items-center animate-fade-in-up">
                  <span className="text-sm font-medium">{tool.name}:</span>
                  <span className="text-sm text-muted-foreground">{tool.value}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* 软件 */}
          <div className="animate-fade-in-up">
            <h4 className="text-sm font-semibold mb-3">软件</h4>
            <div className="space-y-2">
              {software.map((item, index) => (
                <div key={index} className="flex justify-between items-center animate-fade-in-up">
                  <span className="text-sm font-medium">{item.name}:</span>
                  <span className="text-sm text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* 浏览器插件 */}
          <div className="animate-fade-in-up">
            <h4 className="text-sm font-semibold mb-3">浏览器插件</h4>
            <div className="flex flex-wrap gap-2">
              {browserPlugins.map((plugin, index) => (
                <Badge key={index} variant="secondary" className="animate-fade-in-up">{plugin}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
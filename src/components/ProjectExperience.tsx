"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

/**
 * 项目经验组件
 * 展示个人参与的重要项目和技术实现
 */
export default function ProjectExperience() {
  const projects = [
    {
      title: "texhub",
      description: "负责texhub的latex编辑器、编译器、反馈信息、用户管理的开发。项目整体对标overleaf，实现了latex的在线编辑、编译、分享等功能。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Docker"]
    },
    {
      title: "国贸集团内部匿名投票系统",
      description: "负责投票系统的设计与开发，实现匿名投票功能，保护用户隐私。提供实时投票结果统计和分析功能，集成导出投票结果功能。",
      technologies: ["Next.js", "Tailwind CSS", "Redis", "匿名投票"]
    },
    {
      title: "国贸集团内部出库管理系统",
      description: "负责出库管理系统的设计与开发，实现扫码出库、库存查询等功能。提供实时库存状态展示和报警功能，集成导出库存数据功能。",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "库存管理"]
    },
    {
      title: "国贸集团青云e购小程序",
      description: "负责青云e购小程序的设计与开发，实现商品展示、订单管理、支付功能等。提供用户友好的界面和操作流程，确保小程序的稳定性和性能。",
      technologies: ["Uniapp", "Vue2", "小程序", "电商平台"]
    },
    {
      title: "国贸集团青云e购后台",
      description: "负责青云e购后台的设计与开发，实现商品管理、订单管理、用户管理、主页装修等功能。为电商平台提供完整的后台管理解决方案。",
      technologies: ["Vue2", "iView", "后台管理", "电商系统"]
    }
  ];

  return (
    <section id="projects">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            项目经验
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">{project.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
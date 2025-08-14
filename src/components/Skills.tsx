"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Code } from "lucide-react";

/**
 * 技能专长组件
 * 展示个人技能水平和专业能力
 */
export default function Skills() {
  const frontendSkills = [
    { name: "React / Vue.js / Next.js", level: 90 },
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "HTML5 / CSS3", level: 85 },
    { name: "Sass / Tailwind CSS", level: 85 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express.js / Koa.js", level: 75 },
    { name: "PostgreSQL / MongoDB", level: 75 }
  ];

  const tools = [
    "Git", "GitHub", "GitLab", "Trae", "WebStorm", 
    "Docker", "Vercel", "Webpack", "Vite"
  ];

  return (
    <section id="skills">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            技能专长
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 前端技术 */}
          <div>
            <h4 className="text-sm font-semibold mb-3">前端技术</h4>
            <div className="space-y-3">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* 后端技术 */}
          <div>
            <h4 className="text-sm font-semibold mb-3">后端技术</h4>
            <div className="space-y-3">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* 开发工具 */}
          <div>
            <h4 className="text-sm font-semibold mb-3">开发工具</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge key={index} variant="outline">{tool}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
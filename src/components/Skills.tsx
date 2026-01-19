"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Server, Wrench } from "lucide-react";
import SkillBar from "@/components/SkillBar";
import skillsData from "@/data/skills.json";
import { SkillsData } from "@/types/skills";

/**
 * 技能专长组件
 * 展示个人技能水平和专业能力
 */
export default function Skills() {
  const { frontendSkills, backendSkills, tools }: SkillsData = skillsData;

  return (
    <section className="animate-fade-in-up">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Code className="h-5 w-5 text-accent-warm" />
            技能专长
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 前端技术 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">前端技术</h4>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* 后端技术 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary">
                <Server className="h-4 w-4 text-accent-warm" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">后端技术</h4>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          {/* 开发工具 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-muted">
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">开发工具</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <div key={index} className="tech-tag interactive-item">
                  <span className="mr-1">{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

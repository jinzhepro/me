"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Server, Wrench, Zap, Star, Shield } from "lucide-react";

// 从JSON文件导入数据和类型
import skillsData from "@/data/skills.json";
import { SkillsData, Skill } from "@/types/skills";

/**
 * 技能专长组件
 * 展示个人技能水平和专业能力
 * 使用自定义进度条和动画效果增强视觉体验
 */
export default function Skills() {
  const { frontendSkills, backendSkills, tools }: SkillsData = skillsData;

  const getSkillLevel = (level?: number) => {
    if (!level) return { text: "", color: "text-muted-foreground", icon: Zap };
    if (level >= 90)
      return { text: "精通", color: "text-accent-warm", icon: Star };
    if (level >= 80)
      return { text: "熟练", color: "text-primary", icon: Shield };
    if (level >= 70)
      return { text: "良好", color: "text-muted-foreground", icon: Zap };
    return { text: "了解", color: "text-muted-foreground", icon: Zap };
  };

  const SkillBar = ({ skill }: { skill: Skill }) => {
    const level = getSkillLevel(skill.level);
    const Icon = level.icon;

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {skill.level ? `${skill.level}%` : ""}
            </span>
            <Icon className={`h-3 w-3 ${level.color}`} />
          </div>
        </div>
        <div className="skill-progress">
          <div
            className="skill-progress-bar"
            style={{ width: skill.level ? `${skill.level}%` : "0%" }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="animate-fade-in-up animate-on-scroll">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-accent-warm" />
            技能专长
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 前端技术 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <h4 className="text-sm font-semibold">前端技术</h4>
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
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-accent-warm/10">
                <Server className="h-4 w-4 text-accent-warm" />
              </div>
              <h4 className="text-sm font-semibold">后端技术</h4>
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
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-muted">
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-semibold">开发工具</h4>
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

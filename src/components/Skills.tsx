"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Server, Wrench, Zap, Star, Shield } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [mounted, setMounted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // 确保只在客户端渲染交互效果
  useEffect(() => {
    setMounted(true);
  }, []);

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
    const isHovered = mounted && hoveredSkill === skill.name;

    return (
      <div
        className="space-y-2"
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
        suppressHydrationWarning
      >
        {/* 技能信息 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg" suppressHydrationWarning>
              {skill.icon}
            </span>
            <span className="text-sm font-medium" suppressHydrationWarning>
              {skill.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* 百分比显示 - 使用服务端一致的初始状态 */}
            <span
              className="text-xs text-muted-foreground"
              suppressHydrationWarning
            >
              {skill.level ? `${skill.level}%` : ""}
            </span>
            <Icon className={`h-3 w-3 ${level.color}`} />
          </div>
        </div>

        {/* 进度条容器 */}
        <div className="skill-progress">
          {/* 悬停高亮效果 - 客户端专属 */}
          {mounted && (
            <div
              className={`absolute inset-0 bg-foreground/5 transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              suppressHydrationWarning
            />
          )}

          {/* 进度条 */}
          <div
            className="skill-progress-bar"
            style={{ width: skill.level ? `${skill.level}%` : "0%" }}
            suppressHydrationWarning
          />
        </div>

        {/* 悬停时的详细描述 - 客户端专属 */}
        {mounted && isHovered && level.text && (
          <div className="absolute top-full left-0 mt-1 z-10 animate-fade-in">
            <span className="text-xs text-muted-foreground bg-background border border-border px-2 py-1 rounded-md shadow-sm">
              {level.text}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="animate-fade-in-up" suppressHydrationWarning>
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
                <div
                  key={index}
                  className="tech-tag interactive-item"
                  suppressHydrationWarning
                >
                  <span className="mr-1" suppressHydrationWarning>
                    {tool.icon}
                  </span>
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

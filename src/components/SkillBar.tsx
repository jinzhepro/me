"use client";

import { useState, useEffect } from "react";
import { Zap, Star, Shield } from "lucide-react";
import { Skill } from "@/types/skills";

interface SkillBarProps {
  skill: Skill;
}

/**
 * 获取技能等级信息
 */
function getSkillLevel(level?: number) {
  if (!level) return { text: "", color: "text-muted-foreground", icon: Zap };
  if (level >= 90) return { text: "精通", color: "text-accent-warm", icon: Star };
  if (level >= 80) return { text: "熟练", color: "text-primary", icon: Shield };
  if (level >= 70) return { text: "良好", color: "text-muted-foreground", icon: Zap };
  return { text: "了解", color: "text-muted-foreground", icon: Zap };
}

/**
 * 技能进度条组件
 * 展示单个技能的水平和进度
 */
export default function SkillBar({ skill }: SkillBarProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {/* 进度条容器 */}
      <div className="skill-progress">
        {/* 悬停高亮效果 - 客户端专属 */}
        {mounted && (
          <div
            className={`absolute inset-0 bg-foreground/5 transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* 进度条 */}
        <div
          className="skill-progress-bar"
          style={{ width: skill.level ? `${skill.level}%` : "0%" }}
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
}

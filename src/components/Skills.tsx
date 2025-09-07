"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Server, Wrench, Zap, Star, Shield } from "lucide-react";

/**
 * 技能专长组件
 * 展示个人技能水平和专业能力
 * 使用自定义进度条和动画效果增强视觉体验
 */
export default function Skills() {
  const frontendSkills = [
    { name: "React / Vue.js / Next.js", level: 90, icon: "⚛️" },
    { name: "JavaScript / TypeScript", level: 90, icon: "📜" },
    { name: "HTML5 / CSS3", level: 85, icon: "🎨" },
    { name: "Sass / Tailwind CSS", level: 85, icon: "🎯" },
    { name: "Expo", level: 80, icon: "📱" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "Express.js / Koa.js", level: 75, icon: "🚂" },
    { name: "PostgreSQL / MongoDB", level: 75, icon: "🗄️" },
  ];

  const tools = [
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "GitLab", icon: "🦊" },
    { name: "VSCode", icon: "💻" },
    { name: "Docker", icon: "🐳" },
    { name: "Vercel", icon: "▲" },
    { name: "Webpack", icon: "📦" },
    { name: "Vite", icon: "⚡" },
    { name: "Cline", icon: "🤖" },
  ];

  interface Skill {
    name: string;
    level: number; // 可选，因为 tools 中的项可能没有 level
    icon: string;
  }

  const getSkillLevel = (level: number) => {
    if (level >= 90)
      return { text: "精通", color: "text-accent-warm", icon: Star };
    if (level >= 80)
      return { text: "熟练", color: "text-primary", icon: Shield };
    if (level >= 70)
      return { text: "良好", color: "text-muted-foreground", icon: Zap };
    return { text: "了解", color: "text-muted-foreground", icon: Zap };
  };

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
    const level = getSkillLevel(skill.level);
    const Icon = level.icon;

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="space-y-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {skill.level}%
            </span>
            <Icon className={`h-3 w-3 ${level.color}`} />
          </div>
        </div>
        <div className="skill-progress">
          <motion.div
            className="skill-progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="animate-fade-in-up"
    >
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-accent-warm" />
            技能专长
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 前端技术 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <h4 className="text-sm font-semibold">前端技术</h4>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <Separator className="my-4" />

          {/* 后端技术 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-accent-warm/10">
                <Server className="h-4 w-4 text-accent-warm" />
              </div>
              <h4 className="text-sm font-semibold">后端技术</h4>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill}
                  index={index + frontendSkills.length}
                />
              ))}
            </div>
          </motion.div>

          <Separator className="my-4" />

          {/* 开发工具 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-muted">
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-semibold">开发工具</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="tech-tag interactive-item"
                >
                  <span className="mr-1">{tool.icon}</span>
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

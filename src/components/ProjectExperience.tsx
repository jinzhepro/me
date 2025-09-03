"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Star,
  Award,
} from "lucide-react";

/**
 * 项目经验组件
 * 展示个人参与的重要项目和技术实现
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function ProjectExperience() {
  const projects = [
    {
      title: "texhub",
      description:
        "负责texhub的latex编辑器、编译器、反馈信息、用户管理的开发。项目整体对标overleaf，实现了latex的在线编辑、编译、分享等功能。",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Docker",
      ],
      period: "2023.06 - 2024.01",
      achievements: ["在线LaTeX编辑器", "实时编译系统", "多用户协作"],
      impact: "提升学术写作效率50%",
      status: "已完成",
    },
    {
      title: "国贸集团内部匿名投票系统",
      description:
        "负责投票系统的设计与开发，实现匿名投票功能，保护用户隐私。提供实时投票结果统计和分析功能，集成导出投票结果功能。",
      technologies: ["Next.js", "Tailwind CSS", "Redis", "匿名投票"],
      period: "2023.03 - 2023.05",
      achievements: ["匿名投票机制", "实时统计", "数据导出"],
      impact: "服务1000+员工",
      status: "已完成",
    },
    {
      title: "国贸集团内部出库管理系统",
      description:
        "负责出库管理系统的设计与开发，实现扫码出库、库存查询等功能。提供实时库存状态展示和报警功能，集成导出库存数据功能。",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "库存管理"],
      period: "2022.12 - 2023.02",
      achievements: ["扫码出库", "实时库存", "预警系统"],
      impact: "减少出库错误率80%",
      status: "已完成",
    },
    {
      title: "国贸集团青云e购小程序",
      description:
        "负责青云e购小程序的设计与开发，实现商品展示、订单管理、支付功能等。提供用户友好的界面和操作流程，确保小程序的稳定性和性能。",
      technologies: ["Uniapp", "Vue2", "小程序", "电商平台"],
      period: "2022.08 - 2022.11",
      achievements: ["商品展示", "订单管理", "支付集成"],
      impact: "日活用户500+",
      status: "已完成",
    },
    {
      title: "国贸集团青云e购后台",
      description:
        "负责青云e购后台的设计与开发，实现商品管理、订单管理、用户管理、主页装修等功能。为电商平台提供完整的后台管理解决方案。",
      technologies: ["Vue2", "iView", "后台管理", "电商系统"],
      period: "2022.05 - 2022.07",
      achievements: ["商品管理", "订单处理", "数据统计"],
      impact: "管理商品1000+SKU",
      status: "已完成",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已完成":
        return "bg-green-100 text-green-800";
      case "进行中":
        return "bg-blue-100 text-blue-800";
      case "规划中":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="animate-fade-in-up"
    >
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-accent-warm" />
            项目经验
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border hover:border-accent-warm/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* 项目标题 */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-warm transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* 项目描述 */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* 项目成果 */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Award className="h-4 w-4 text-accent-warm" />
                    核心成果
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 项目影响 */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* 技术栈 */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">技术栈</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

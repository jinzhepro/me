"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle,
  Award,
} from "lucide-react";

/**
 * 工作经历组件
 * 展示个人工作经历和职业发展历程
 * 使用动画效果和增强的视觉设计提升用户体验
 */
import { WorkExperience as WorkExperienceType } from "@/types/work";
import workData from "@/data/work.json";

export default function WorkExperience() {
  const experiences: WorkExperienceType[] = workData as WorkExperienceType[];
  const getStatusColor = (status: string) => {
    switch (status) {
      case "当前职位":
        return "bg-green-100 text-green-800";
      case "已离职":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="animate-fade-in-up" suppressHydrationWarning>
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase
              className="h-5 w-5 text-accent-warm"
              aria-label="工作经历图标"
            />
            工作经历
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-warm to-transparent"></div>

                {/* 内容卡片 */}
                <div className="ml-6 p-4 rounded-lg bg-gradient-to-r from-card to-muted/20 border border-border hover:border-accent-warm/30 transition-all duration-300 interactive-item">
                  {/* 头部信息 */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg group-hover:text-accent-warm transition-colors">
                          {exp.title}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(
                            exp.status
                          )}`}
                        >
                          {exp.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="h-3 w-3" aria-label="公司图标" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-accent-warm mt-2 sm:mt-0">
                      <Calendar className="h-3 w-3" aria-label="时间图标" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* 职责列表 */}
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <CheckCircle
                        className="h-4 w-4 text-primary"
                        aria-label="职责图标"
                      />
                      主要职责
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-warm mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 成就标签 */}
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <Award
                        className="h-4 w-4 text-accent-warm"
                        aria-label="成就图标"
                      />
                      关键成就
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <span key={idx} className="tech-tag">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < experiences.length - 1 && (
                <div>
                  <Separator className="my-4" />
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

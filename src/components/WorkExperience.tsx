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
import { WorkExperience as WorkExperienceType } from "@/types/work";
import workData from "@/data/work.json";
import { getStatusColor } from "@/lib/statusColor";

/**
 * 工作经历组件
 * 展示个人工作经历和职业发展历程
 */
export default function WorkExperience() {
  const experiences: WorkExperienceType[] = workData as WorkExperienceType[];

  return (
    <section className="animate-fade-in-up">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Briefcase
              className="h-5 w-5 text-accent-warm"
              aria-label="工作经历图标"
            />
            工作经历
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* 时间线 */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>

              {/* 内容卡片 */}
              <div className="ml-6 p-5 rounded-lg border border-border hover:border-accent-warm/40 transition-all duration-300 interactive-item">
                {/* 头部信息 */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg group-hover:text-accent-warm transition-colors">
                        {exp.title}
                      </h3>
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium ${getStatusColor(
                          exp.status
                        )}`}
                      >
                        {exp.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-3.5 w-3.5" aria-label="公司图标" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2 sm:mt-0">
                    <Calendar className="h-3.5 w-3.5" aria-label="时间图标" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* 职责列表 */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1.5">
                    <CheckCircle
                      className="h-4 w-4 text-primary"
                      aria-label="职责图标"
                    />
                    主要职责
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent-warm mt-1.5">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 成就标签 */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1.5">
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
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

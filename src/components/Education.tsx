"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen, Star } from "lucide-react";

// 从JSON文件导入数据和类型
import educationData from "@/data/education.json";
import { EducationData } from "@/types/education";

/**
 * 教育背景组件
 * 展示个人教育经历和学历信息
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function Education() {
  const { educations }: EducationData = educationData;

  return (
    <div className="animate-fade-in-up" suppressHydrationWarning>
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent-warm" />
            教育背景
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {educations.map((education, index) => (
            <div key={index} className="group">
              <div className="relative p-4 rounded-lg bg-gradient-to-r from-card to-muted/20 border border-border hover:border-accent-warm/30 transition-all duration-300 interactive-item">
                {/* 主要信息 */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg group-hover:text-accent-warm transition-colors">
                      {education.degree}
                    </h3>
                    <Star className="h-4 w-4 text-accent-warm" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{education.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-accent-warm">
                    <Calendar className="h-3 w-3" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

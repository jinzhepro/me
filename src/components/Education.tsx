"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen, Star } from "lucide-react";

/**
 * 教育背景组件
 * 展示个人教育经历和学历信息
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function Education() {
  const educations = [
    {
      degree: "计算机科学与技术",
      school: "北京理工大学",
      period: "2018-2021",
      level: "本科",
      achievements: ["专业课程优秀", "项目实践丰富"],
      courses: ["数据结构", "算法设计", "软件工程", "数据库系统"],
    },
    {
      degree: "计算机应用技术",
      school: "山东轻工职业学院",
      period: "2014-2017",
      level: "专科",
      achievements: ["技能竞赛获奖", "优秀毕业生"],
      courses: ["程序设计", "Web开发", "数据库", "计算机网络"],
    },
  ];

  return (
    <div className="animate-fade-in-up animate-on-scroll">
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

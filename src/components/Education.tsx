"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

/**
 * 教育背景组件
 * 展示个人教育经历和学历信息
 */
export default function Education() {
  const educations = [
    {
      degree: "计算机科学与技术",
      school: "北京理工大学",
      period: "2018-2021"
    },
    {
      degree: "计算机应用技术",
      school: "山东轻工职业学院",
      period: "2014-2017"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          教育背景
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {educations.map((education, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-semibold">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">{education.school}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
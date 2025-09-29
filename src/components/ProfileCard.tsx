"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code } from "lucide-react";

// 从JSON文件导入数据和类型
import profileData from "@/data/profile.json";
import { ProfileData } from "@/types/profile";

/**
 * 个人信息卡片组件
 * 展示个人基本信息、联系方式、技能标签和社交链接
 * 使用动画效果增强视觉吸引力
 */
export default function ProfileCard() {
  const {
    name,
    title,
    experience,
    description,
    avatar,
    avatarAlt,
    skills,
  }: ProfileData = profileData;

  return (
    <div>
      <Card className="mb-8 card-hover overflow-hidden">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 头像区域 */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="m-auto">
                <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
                  <AvatarImage src={avatar} alt={avatarAlt} />
                  <AvatarFallback>{name}</AvatarFallback>
                </Avatar>
                {/* <div className="absolute -bottom-2 -right-2 bg-accent-warm text-accent-warm-foreground rounded-full p-2">
                  <Trophy className="h-4 w-4" />
                </div> */}
              </div>
            </div>

            {/* 主要信息区域 */}
            <div className="lg:col-span-9">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-accent-warm bg-clip-text text-transparent">
                      {name}
                    </h1>
                    <p className="text-lg text-muted-foreground flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      {title}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="tech-tag">{experience}</span>
                  </div>
                </div>

                <p className="text-foreground mb-6 leading-relaxed text-base">
                  {description}
                </p>

                {/* 技能标签 */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    核心技能
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

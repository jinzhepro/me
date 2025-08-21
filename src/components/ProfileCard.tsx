"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Phone, MapPin, Download, BookOpen } from "lucide-react";

/**
 * 个人信息卡片组件
 * 展示个人基本信息、联系方式和社交链接
 */
export default function ProfileCard() {
  return (
    <Card className="mb-8 transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Avatar className="w-32 h-32 transition-transform duration-300 hover:scale-105">
            <AvatarImage src="/logo.JPG" alt="张晋哲" />
            <AvatarFallback>张晋哲</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 transition-colors duration-300">张晋哲</h1>
            <p className="text-xl text-muted-foreground mb-4 transition-colors duration-300">全栈工程师</p>
            <p className="text-foreground mb-6 leading-relaxed transition-colors duration-300">
              拥有8年以上软件开发经验的全栈工程师，专注于前端技术栈和用户体验设计。
              熟练掌握现代Web开发技术，致力于构建高质量、可维护的软件产品。
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300">
                <Mail className="h-4 w-4" />
                <span>jinzhepro@qq.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300">
                <MapPin className="h-4 w-4" />
                <span>中国青岛</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300">
                <Phone className="h-4 w-4" />
                <span>微信: jinzhepro</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:shadow-md">
                <a href="https://jinzhepro.github.io/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  博客
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:shadow-md">
                <a href="https://github.com/jinzhepro" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
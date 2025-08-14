"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

/**
 * 个人信息卡片组件
 * 展示个人基本信息、联系方式和社交链接
 */
export default function ProfileCard() {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/logo.JPG" alt="张晋哲" />
            <AvatarFallback>张晋哲</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">张晋哲</h1>
            <p className="text-xl text-gray-600 mb-4">全栈工程师</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              拥有8年以上软件开发经验的全栈工程师，专注于前端技术栈和用户体验设计。
              熟练掌握现代Web开发技术，致力于构建高质量、可维护的软件产品。
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>jinzhepro@qq.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>中国青岛</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>微信: jinzhepro</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                下载简历
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
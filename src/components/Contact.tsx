"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * 联系方式组件
 * 展示个人联系信息和沟通方式
 */
export default function Contact() {
  return (
    <section id="contact" className="mt-8 animate-fade-in-up">
      <Card className="card-hover">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Mail className="h-5 w-5" />
            联系方式
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm">邮箱</p>
                <a
                  href="mailto:jinzhepro@qq.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  jinzhepro@qq.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm">微信</p>
                <p className="text-sm text-muted-foreground">jinzhepro</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm">位置</p>
                <p className="text-sm text-muted-foreground">中国青岛</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

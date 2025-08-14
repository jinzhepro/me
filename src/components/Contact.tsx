"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * 联系方式组件
 * 展示个人联系信息和沟通方式
 */
export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "邮箱",
      value: "jinzhepro@qq.com"
    },
    {
      icon: Phone,
      label: "微信",
      value: "jinzhepro"
    },
    {
      icon: MapPin,
      label: "位置",
      value: "中国青岛"
    }
  ];

  return (
    <section id="contact" className="mt-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            联系方式
          </CardTitle>
          <CardDescription>
            如果您对我的经历感兴趣，欢迎随时联系我
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                  <IconComponent className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">{contact.label}</p>
                    <p className="text-sm text-gray-600">{contact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

/**
 * 工作经历组件
 * 展示个人工作经历和职业发展历程
 */
export default function WorkExperience() {
  const experiences = [
    {
      title: "高级前端工程师",
      company: "经控集团青云通公司",
      period: "2022.08 - 至今",
      responsibilities: [
        "负责公司独立站前端开发",
        "完成独立站商城端、运营端、商家端的开发工作",
        "完成商城端的 Vue 3升级工作",
        "完成其他端的优化工作"
      ],
    },
    {
      title: "前端工程师",
      company: "灵犀科技有限公司",
      period: "2021.05 - 2022.07",
      responsibilities: [
        "开发运管、精准施策、营商环境等多个后台管理系统",
        "开发青岛大屏、烟台大屏等多个大屏系统",
        "开发灵犀超链，一个工商查询系统"
      ],
    },
    {
      title: "前端组长",
      company: "青岛中易万合科技集团股份有限公司",
      period: "2020.03 - 2021.04",
      responsibilities: [
        "负责前端组的需求评审、接口文档等前置工作",
        "负责前端的任务排期、技术分享等团队管理工作",
        "开发百成优品小程序，总用户50k+，日活5k+",
        "对商家后台从0到1的整体改版，增加订单、商品、活动等功能"
      ],
    },
    {
      title: "前端开发",
      company: "众安在线财产保险股份有限公司",
      period: "2017.09 - 2020.01",
      responsibilities: [
        "开发医美保险、航空险、手机险、宠物险、车险等多个险种",
        "开发中国首款与运动相关的保险产品，超千万用户",
        "负责web页面、H5(hybrid)、小程序的开发及迭代",
        "后期负责前端面试、技术分享工作"
      ],
    }
  ];

  return (
    <section id="experience">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            工作经历
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>• {responsibility}</li>
                  ))}
                </ul>
              </div>
              {index < experiences.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
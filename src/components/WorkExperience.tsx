"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle,
  TrendingUp,
  Award,
} from "lucide-react";

/**
 * 工作经历组件
 * 展示个人工作经历和职业发展历程
 * 使用动画效果和增强的视觉设计提升用户体验
 */
export default function WorkExperience() {
  const experiences = [
    {
      title: "高级前端工程师",
      company: "经控集团青云通公司",
      period: "2022.08 - 至今",
      status: "当前职位",
      responsibilities: [
        "负责公司独立站前端开发",
        "完成独立站商城端、运营端、商家端的开发工作",
        "完成商城端的 Vue 3升级工作",
        "完成其他端的优化工作",
      ],
      achievements: ["技术升级", "全栈开发", "系统优化"],
    },
    {
      title: "前端工程师",
      company: "灵犀科技有限公司",
      period: "2021.05 - 2022.07",
      status: "已离职",
      responsibilities: [
        "开发运管、精准施策、营商环境等多个后台管理系统",
        "开发青岛大屏、烟台大屏等多个大屏系统",
        "开发灵犀超链，一个工商查询系统",
      ],
      achievements: ["多系统开发", "数据可视化", "工商查询"],
    },
    {
      title: "前端组长",
      company: "青岛中易万合科技集团股份有限公司",
      period: "2020.03 - 2021.04",
      status: "已离职",
      responsibilities: [
        "负责前端组的需求评审、接口文档等前置工作",
        "负责前端的任务排期、技术分享等团队管理工作",
        "开发百成优品小程序，总用户50k+，日活5k+",
        "对商家后台从0到1的整体改版，增加订单、商品、活动等功能",
      ],
      achievements: ["团队管理", "小程序开发", "系统重构"],
    },
    {
      title: "前端开发",
      company: "众安在线财产保险股份有限公司",
      period: "2017.09 - 2020.01",
      status: "已离职",
      responsibilities: [
        "开发医美保险、航空险、手机险、宠物险、车险等多个险种",
        "开发中国首款与运动相关的保险产品，超千万用户",
        "负责web页面、H5(hybrid)、小程序的开发及迭代",
        "后期负责前端面试、技术分享工作",
      ],
      achievements: ["多险种开发", "千万用户产品", "技术分享"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "当前职位":
        return "bg-green-100 text-green-800";
      case "已离职":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="animate-fade-in-up"
    >
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent-warm" />
            工作经历
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-warm to-transparent"></div>

                {/* 内容卡片 */}
                <div className="ml-6 p-4 rounded-lg bg-gradient-to-r from-card to-muted/20 border border-border hover:border-accent-warm/30 transition-all duration-300 interactive-item">
                  {/* 头部信息 */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg group-hover:text-accent-warm transition-colors">
                          {exp.title}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            exp.status
                          )}`}
                        >
                          {exp.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="h-3 w-3" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-accent-warm mt-2 sm:mt-0">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* 职责列表 */}
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      主要职责
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-warm mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 成就标签 */}
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <Award className="h-4 w-4 text-accent-warm" />
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

              {index < experiences.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Separator className="my-4" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  );
}

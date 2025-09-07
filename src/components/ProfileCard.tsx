"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code } from "lucide-react";

/**
 * 个人信息卡片组件
 * 展示个人基本信息、联系方式、技能标签和社交链接
 * 使用动画效果增强视觉吸引力
 */
export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="mb-8 card-hover overflow-hidden">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 头像区域 */}
            <motion.div
              className="lg:col-span-3 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="m-auto">
                <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
                  <AvatarImage src="/logo.JPG" alt="张晋哲" />
                  <AvatarFallback>张晋哲</AvatarFallback>
                </Avatar>
                {/* <div className="absolute -bottom-2 -right-2 bg-accent-warm text-accent-warm-foreground rounded-full p-2">
                  <Trophy className="h-4 w-4" />
                </div> */}
              </div>
            </motion.div>

            {/* 主要信息区域 */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-accent-warm bg-clip-text text-transparent">
                      张晋哲
                    </h1>
                    <p className="text-lg text-muted-foreground flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      全栈工程师
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="tech-tag">8年+经验</span>
                  </div>
                </div>

                <p className="text-foreground mb-6 leading-relaxed text-base">
                  拥有8年以上软件开发经验的全栈工程师，专注于前端技术栈和用户体验设计。
                  熟练掌握现代Web开发技术，致力于构建高质量、可维护的软件产品。
                </p>

                {/* 技能标签 */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    核心技能
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vue</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">UI/UX</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

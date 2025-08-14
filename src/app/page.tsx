"use client";

import Navigation from "@/components/Navigation";
import ProfileCard from "@/components/ProfileCard";
import WorkExperience from "@/components/WorkExperience";
import ProjectExperience from "@/components/ProjectExperience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * 主页面组件 - 个人简历网站
 * 使用shadcn/ui组件库，采用黑白灰配色方案
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <Navigation />

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 个人信息卡片 */}
        <ProfileCard />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧列 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 工作经历 */}
            <WorkExperience />

            {/* 项目经验 */}
            <ProjectExperience />
          </div>

          {/* 右侧列 */}
          <div className="space-y-8">
            {/* 技能 */}
            <Skills />

            {/* 教育背景 */}
            <Education />
          </div>
        </div>

        {/* 联系方式 */}
        <Contact />
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
}
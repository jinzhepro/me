"use client";

import Navigation from "@/components/Navigation";
import ProfileCard from "@/components/ProfileCard";
import WorkExperience from "@/components/WorkExperience";
import ProjectExperience from "@/components/ProjectExperience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Environment from "@/components/Environment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useEffect } from "react";

/**
 * 主页面组件 - 个人简历网站
 * 使用shadcn/ui组件库，采用黑白灰配色方案
 */
export default function Home() {
  useEffect(() => {
    // 为锚点链接添加平滑滚动
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <Navigation />

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 个人信息卡片 */}
        <section id="about">
          <ProfileCard />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧列 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 工作经历 */}
            <section id="experience">
              <WorkExperience />
            </section>

            {/* 项目经验 */}
            <section id="projects">
              <ProjectExperience />
            </section>
          </div>

          {/* 右侧列 */}
          <div className="space-y-8">
            {/* 技能 */}
            <section id="skills">
              <Skills />
            </section>

            {/* 教育背景 */}
            <Education />

            {/* 工作环境 */}
            <Environment />
          </div>
        </div>

        {/* 联系方式 */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* 页脚 */}
      <Footer />
      
      {/* 回到顶部按钮 */}
      <BackToTop />
    </div>
  );
}
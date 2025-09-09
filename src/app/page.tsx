"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ProfileCard from "@/components/ProfileCard";
import WorkExperience from "@/components/WorkExperience";
import ProjectExperience from "@/components/ProjectExperience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Environment from "@/components/Environment";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";
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
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = target.getAttribute("href")!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 120,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <JsonLd />
      {/* 导航栏 */}
      <Navigation />

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 个人信息卡片 */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileCard />
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧列 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 工作经历 */}
            <motion.section
              id="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="animate-fade-in-up"
            >
              <WorkExperience />
            </motion.section>

            {/* 项目经验 */}
            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="animate-fade-in-up"
            >
              <ProjectExperience />
            </motion.section>
          </div>

          {/* 右侧列 */}
          <div className="space-y-8">
            {/* 技能 */}
            <motion.section
              id="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="animate-fade-in-up"
            >
              <Skills />
            </motion.section>

            {/* 教育背景 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="animate-fade-in-up"
            >
              <Education />
            </motion.div>

            {/* 工作环境 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="animate-fade-in-up"
            >
              <Environment />
            </motion.div>
          </div>
        </div>

        {/* 社交媒体 */}
        <motion.section
          id="social-media"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="animate-fade-in-up"
        >
          <SocialMedia />
        </motion.section>
      </main>

      {/* 页脚 */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <Footer />
      </motion.footer>

      {/* 回到顶部按钮 */}
      <BackToTop />
    </div>
  );
}

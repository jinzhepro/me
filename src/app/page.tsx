"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import ProfileCard from "@/components/ProfileCard";
import JsonLd from "@/components/JsonLd";
import DynamicSection, { Skeletons } from "@/components/DynamicSection";
import { usePageAnimations } from "@/hooks/usePageAnimations";

/**
 * 主页面组件 - 个人简历网站
 * 使用shadcn/ui组件库，采用黑白灰配色方案
 */
export default function Home() {
  // 初始化动画
  usePageAnimations();

  return (
    <div className="min-h-screen">
      <JsonLd />
      {/* 导航栏 */}
      <Navigation />

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 个人信息卡片 - 立即显示 */}
        <section id="about" className="animate-fade-in-up">
          <ProfileCard />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧列 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 工作经历 - 滚动触发 */}
            <section
              id="experience"
              className="animate-fade-in-up animate-on-scroll"
              suppressHydrationWarning
            >
              <DynamicSection
                importFn={() => import("@/components/WorkExperience")}
                skeleton={Skeletons.list}
              />
            </section>

            {/* 项目经验 - 滚动触发 */}
            <section
              id="projects"
              className="animate-fade-in-up animate-on-scroll"
              suppressHydrationWarning
            >
              <DynamicSection
                importFn={() => import("@/components/ProjectExperience")}
                skeleton={Skeletons.grid}
              />
            </section>
          </div>

          {/* 右侧列 */}
          <div className="space-y-8">
            {/* 技能 - 滚动触发 */}
            <section
              id="skills"
              className="animate-fade-in-up animate-on-scroll"
              suppressHydrationWarning
            >
              <DynamicSection
                importFn={() => import("@/components/Skills")}
                skeleton={Skeletons.skills}
              />
            </section>

            {/* 教育背景 - 滚动触发 */}
            <div className="animate-fade-in-up animate-on-scroll" suppressHydrationWarning>
              <DynamicSection
                importFn={() => import("@/components/Education")}
                skeleton={Skeletons.card}
              />
            </div>

            {/* 工作环境 - 滚动触发 */}
            <div className="animate-fade-in-up animate-on-scroll" suppressHydrationWarning>
              <DynamicSection
                importFn={() => import("@/components/Environment")}
                skeleton={Skeletons.card}
              />
            </div>
          </div>
        </div>

        {/* 社交媒体 - 滚动触发 */}
        <section
          id="social-media"
          className="animate-fade-in-up animate-on-scroll"
          suppressHydrationWarning
        >
          <DynamicSection
            importFn={() => import("@/components/SocialMedia")}
            skeleton={Skeletons.socialCards}
          />
        </section>
      </main>

      {/* 简洁版权信息 */}
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 张晋哲 · 用心构建每一个项目
          </p>
        </div>
      </footer>

      {/* 回到顶部按钮 */}
      <DynamicSection
        importFn={() => import("@/components/BackToTop")}
        skeleton={null}
      />
    </div>
  );
}

import Navigation from "@/components/Navigation";
import ProfileCard from "@/components/ProfileCard";
import JsonLd from "@/components/JsonLd";
import PageEffects from "@/components/PageEffects";
import WorkExperience from "@/components/WorkExperience";
import ProjectExperience from "@/components/ProjectExperience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Environment from "@/components/Environment";
import SocialMedia from "@/components/SocialMedia";

/**
 * 主页面组件 - 个人简历网站
 * 使用shadcn/ui组件库，采用黑白灰配色方案
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <PageEffects />
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
            <section id="experience" className="animate-fade-in-up animate-on-scroll">
              <WorkExperience />
            </section>

            {/* 项目经验 - 滚动触发 */}
            <section id="projects" className="animate-fade-in-up animate-on-scroll">
              <ProjectExperience />
            </section>
          </div>

          {/* 右侧列 */}
          <div className="space-y-8">
            {/* 技能 - 滚动触发 */}
            <section id="skills" className="animate-fade-in-up animate-on-scroll">
              <Skills />
            </section>

            {/* 教育背景 - 滚动触发 */}
            <div className="animate-fade-in-up animate-on-scroll">
              <Education />
            </div>

            {/* 工作环境 - 滚动触发 */}
            <div className="animate-fade-in-up animate-on-scroll">
              <Environment />
            </div>
          </div>
        </div>

        {/* 社交媒体 - 滚动触发 */}
        <section id="social-media" className="animate-fade-in-up animate-on-scroll">
          <SocialMedia />
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

    </div>
  );
}

"use client";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  Award,
} from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import LinkedInCard from "@/components/LinkedInCard";
import SkillProgress from "@/components/SkillProgress";
import WorkExperience from "@/components/WorkExperience";
import PersonalInfo from "@/components/PersonalInfo";
import ProjectExperience from "@/components/ProjectExperience";

/**
 * 主页面组件 - LinkedIn风格在线简历
 * 现代化卡片设计，专注于专业展示和用户体验
 */
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--linkedin-gray-100)" }}
    >
      <Navigation />

      {/* 个人信息区域 */}
      <PersonalInfo
        name="张晋哲"
        position="全栈开发工程师"
        description="专注于现代Web技术，拥有8年+开发经验，擅长React、Vue、Next.js、Expo等技术栈"
        avatarSrc="/logo.JPG"
        contact={{
          email: "jinzhepro@qq.com",
          phone: "176-6967-5323",
          location: "青岛市",
        }}
        socialLinks={{
          github: "https://github.com/jinzhepro",
          linkedin: "https://linkedin.com/in/jinzhepro",
          email: "jinzhepro@qq.com",
        }}
      />

      {/* 关于我 */}
      <section id="about" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <LinkedInCard>
            <h2 className="linkedin-section-title">关于我</h2>
            <p className="linkedin-text-primary leading-relaxed">
              我是一名充满激情的前端开发工程师，拥有5年的Web开发经验。专注于创建用户友好、性能优异的现代化Web应用程序。
              熟练掌握React、Vue.js、TypeScript等前端技术栈，对用户体验设计有深入理解。
            </p>
          </LinkedInCard>
        </div>
      </section>

      {/* 技能专长 */}
      <section id="skills" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <LinkedInCard>
            <h2 className="linkedin-section-title">技能专长</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold linkedin-text-primary mb-4">
                  前端技术
                </h3>
                <div className="space-y-4">
                  <SkillProgress skill="React/Next.js" percentage={90} />
                  <SkillProgress skill="TypeScript" percentage={85} />
                  <SkillProgress skill="Vue.js" percentage={80} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold linkedin-text-primary mb-4">
                  工具与框架
                </h3>
                <div className="space-y-4">
                  <SkillProgress skill="Tailwind CSS" percentage={95} />
                  <SkillProgress skill="Git/GitHub" percentage={90} />
                  <SkillProgress skill="Webpack/Vite" percentage={75} />
                </div>
              </div>
            </div>
          </LinkedInCard>
        </div>
      </section>

      {/* 工作经验 */}
      <section id="experience" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="linkedin-section-title text-center mb-8">工作经验</h2>
          <div className="space-y-6">
            <WorkExperience
              position="前端开发工程师"
              duration="2022.08 - 至今"
              company="经控集团"
              responsibilities={[
                "负责公司网站前端开发",
                "负责领导安排的其他工作",
                "完成独立网站前端、运营端、商家端的开发工作",
                "完成网城端的Vue 3升级工作",
                "完成其他临时的优化工作",
              ]}
            />

            <WorkExperience
              position="前端开发工程师"
              duration="时间待定"
              company="灵犀科技有限公司"
              responsibilities={[
                "负责公司web端业务线前端开发，需求评审",
                "开发运营、精准施策、营销环境等多个后台管理系统",
                "开发营销大屏，网台大屏等多个大屏系统",
              ]}
            />

            <WorkExperience
              position="前端开发工程师"
              duration="2020.03 - 2021.04"
              company="青岛中易万合科技集团股份有限公司"
              responsibilities={[
                "负责前端网站的需求评审，接口文档的前端工作",
                "负责前端的任务期，技术分享等",
                "负责大部分前端开发",
                "对商家后台H5的整体改版，增加门店、商品、活动、物流、权限等主要功能",
                "开发平台合作，帮助公司运营人员管理店家",
                "开发自成品小程序，总用户50k+，日活5k+",
                "开发一系列活动：年度账单、抽卡等",
              ]}
            />

            <WorkExperience
              position="前端开发工程师"
              duration="2017.09 - 2020.01"
              company="众安在线财产保险股份有限公司"
              responsibilities={[
                "主要负责公司前端开发，工具数据封装，需求评审前端工作",
                "主要负责web页面，H5(hybrid)，小程序的开发及迭代",
                "后期负责前端测试，技术分享等",
                "为公司开发了医美保险、微空调、手机险、宠物险、车险等多个险种",
                "开发中国保险与运动相关的保险产品，超千万用户",
                "开发医保小程序",
                "开发多个后台管理系统",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 项目经验 */}
      <section id="projects" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="linkedin-section-title text-center mb-8">项目经验</h2>
          <div className="space-y-6">
            <ProjectExperience
              name="外贸独立站"
              role="前端开发"
              duration="2022.08-2023.05"
              description="为海淘集团新区跨境电商企业建造独立站，帮助企业实现9710电商出海，品牌出海，商城端使用vue3+bootstrap 搭建，商家运营端使用管理端使用Rview-design搭建，包含用户、店铺、商品、订单、支付等功能。"
              achievements={[
                "为新区近30家企业业务功能建立了独立站。"
              ]}
              technologies={["Vue3", "Bootstrap", "Rview-design"]}
            />

            <ProjectExperience
              name="运营管理系统"
              role="前端开发工程师"
              duration=""
              description="运营管理系统是一个多用户、分布式系统，主要用于政府业务，维护宇宙，用户，角色，权限相关。提下拥有多个子系统，精准施策，大屏，企业服务等系统，可独立使用。使用saber开发，json配置页面，可快速进行迭代开发。"
              achievements={[
                "完成多个专业业务模块(政务表单,树形组件等)",
                "封装若干组件(sider, tags等)"
              ]}
              technologies={["Saber", "JSON配置"]}
            />

            <ProjectExperience
              name="商家后台（平台后台）"
              role="前端开发工程师"
              duration="2020.04-2021.02"
              description="该项目是百货优品商家管理后台，可以实现对商品、订单、活动、套餐、权限管理的操作。"
              achievements={[
                "使用vue作为框架，组件化开发。",
                "实现商品sku类网格算法",
                "实现权限管理模块配置到button级。",
                "实现自定义的keep-alive"
              ]}
              technologies={["Vue", "组件化开发"]}
            />

            <ProjectExperience
              name="信贷平台"
              role="前端开发工程师"
              duration="2018.10-2019.11"
              description="金融营销平台的后台管理系统，前后端分离，前端单独部署。使用vue全家桶开发，数据模块使用vuex Modules管理应用状态，所有数据使用vue-router，法院对到组件内部，逻辑层大部分在store里实现，登录权限使用vue-router。"
              achievements={[
                "权限管理使用本地的权限和后端的权限对比实现",
                "使用commonsChunk对第三方库缓存",
                "区分不同类型使用不同路由配置到同一页面。"
              ]}
              technologies={["Vue", "Vuex", "Vue-router"]}
            />
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section id="education" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="linkedin-section-title text-center mb-8">教育背景</h2>
          <LinkedInCard>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold linkedin-text-primary">
                计算机科学与技术
              </h3>
              <div className="flex items-center gap-2 linkedin-text-secondary mt-2 md:mt-0">
                <Calendar className="w-4 h-4" />
                2015 - 2019
              </div>
            </div>
            <p className="linkedin-text-secondary mb-4">某某大学 · 本科</p>
            <p className="linkedin-text-primary">
              主修课程包括数据结构、算法设计、软件工程、数据库系统等。在校期间积极参与编程竞赛和开源项目。
            </p>
          </LinkedInCard>
        </div>
      </section>

      {/* 联系我 */}
      <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <LinkedInCard className="text-center">
            <h2 className="linkedin-section-title mb-6">联系我</h2>
            <p className="linkedin-text-secondary text-lg mb-6">
              如果您对我的经历感兴趣，欢迎与我联系！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-linkedin-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                下载简历
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-linkedin-blue text-linkedin-blue rounded-lg hover:bg-blue-50 transition-colors">
                <Mail className="w-4 h-4" />
                发送邮件
              </button>
            </div>
          </LinkedInCard>
        </div>
      </section>

      {/* 页脚 */}
      <footer
        className="py-8 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--linkedin-gray-200)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="linkedin-text-secondary">
            © 2024 张晋哲. 保留所有权利.
          </p>
        </div>
      </footer>
    </div>
  );
}

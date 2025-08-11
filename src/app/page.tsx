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
  User,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import BorderBox from "@/components/BorderBox";
import SkillProgress from "@/components/SkillProgress";

/**
 * 主页面组件 - 在线简历
 * 线框风格设计，专注于结构和内容展示
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 个人信息区域 */}
      <header
        id="home"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-300 flex justify-center"
      >
        <BorderBox variant="section" padding="large" margin="medium" className="max-w-4xl w-full text-center">
          <div className="mb-8">
            <BorderBox variant="thick" padding="small" className="w-32 h-32 mx-auto mb-6 border-gray-900">
              <BorderBox variant="default" padding="none" className="w-full h-full border-gray-400 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </BorderBox>
            </BorderBox>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-4">
              张三
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 border-l-4 border-gray-300 pl-4">
              全栈开发工程师 | React & Node.js 专家
            </p>
            <BorderBox variant="default" padding="medium" className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              专注于现代Web技术，拥有5年+开发经验，擅长React、Node.js、TypeScript等技术栈
            </BorderBox>
          </div>

          {/* 联系方式 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 border-t border-gray-300 pt-6">
            <BorderBox variant="contact" padding="small" className="flex items-center gap-2 text-gray-700">
              <Mail className="w-4 h-4" />
              zhangsan@example.com
            </BorderBox>
            <BorderBox variant="contact" padding="small" className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              138-0013-8000
            </BorderBox>
            <BorderBox variant="contact" padding="small" className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4" />
              北京市
            </BorderBox>
          </div>

          {/* 社交链接 */}
          <div className="flex justify-center gap-4">
            <BorderBox variant="contact" padding="small" className="text-gray-700">
              <Github className="w-5 h-5" />
            </BorderBox>
            <BorderBox variant="contact" padding="small" className="text-gray-700">
              <Linkedin className="w-5 h-5" />
            </BorderBox>
            <BorderBox variant="contact" padding="small" className="text-gray-700">
              <Mail className="w-5 h-5" />
            </BorderBox>
          </div>
        </BorderBox>
      </header>

      {/* 关于我 */}
      <section
        id="about"
        className="py-20 border-b border-gray-300 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <BorderBox variant="section" padding="large" margin="medium" className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b border-gray-300 pb-4">
            关于我
          </h2>
          <BorderBox variant="thick" padding="large" margin="medium">
            <BorderBox variant="default" padding="medium" className="text-gray-700 leading-relaxed text-lg text-center">
              我是一名充满激情的前端开发工程师，拥有5年的Web开发经验。专注于创建用户友好、性能优异的现代化Web应用程序。
              熟练掌握React、Vue.js、TypeScript等前端技术栈，对用户体验设计有深入理解。
            </BorderBox>
          </BorderBox>
        </BorderBox>
      </section>

      {/* 技能专长 */}
      <section
        id="skills"
        className="py-20 border-b border-gray-300 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <BorderBox variant="section" padding="large" margin="medium" className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b border-gray-300 pb-4">
            技能专长
          </h2>
          <div className="grid md:grid-cols-2 gap-8 m-4">
            <BorderBox variant="thick" padding="large">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-300 pb-2">
                前端技术
              </h3>
              <div className="space-y-4">
                <SkillProgress skill="React/Next.js" percentage={90} />
                <SkillProgress skill="TypeScript" percentage={85} />
                <SkillProgress skill="Vue.js" percentage={80} />
              </div>
            </BorderBox>

            <BorderBox variant="thick" padding="large">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-300 pb-2">
                工具与框架
              </h3>
              <div className="space-y-4">
                <SkillProgress skill="Tailwind CSS" percentage={95} />
                <SkillProgress skill="Git/GitHub" percentage={90} />
                <SkillProgress skill="Webpack/Vite" percentage={75} />
              </div>
            </BorderBox>
          </div>
        </BorderBox>
      </section>

      {/* 工作经验 */}
      <section
        id="experience"
        className="py-20 border-b border-gray-300 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <BorderBox variant="section" padding="large" margin="medium" className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b border-gray-300 pb-4">
            工作经验
          </h2>
          <div className="space-y-8 m-4">
            <BorderBox variant="thick" padding="large">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 border-b border-gray-300 pb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  高级前端开发工程师
                </h3>
                <BorderBox variant="default" padding="small" className="text-gray-600 mt-2 md:mt-0">
                  2021 - 至今
                </BorderBox>
              </div>
              <p className="text-gray-700 mb-4 border-l-4 border-gray-300 pl-4">
                ABC科技有限公司
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="border-l-2 border-gray-300 pl-3">
                  • 负责公司主要产品的前端架构设计和开发
                </li>
                <li className="border-l-2 border-gray-300 pl-3">
                  • 使用React、TypeScript构建高性能的Web应用
                </li>
                <li className="border-l-2 border-gray-300 pl-3">
                  • 优化应用性能，提升用户体验
                </li>
                <li className="border-l-2 border-gray-300 pl-3">
                  • 指导初级开发人员，参与代码审查
                </li>
              </ul>
            </BorderBox>

            <BorderBox variant="thick" padding="large">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 border-b border-gray-300 pb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  前端开发工程师
                </h3>
                <BorderBox variant="default" padding="small" className="text-gray-600 mt-2 md:mt-0">
                  2019 - 2021
                </BorderBox>
              </div>
              <p className="text-gray-700 mb-4 border-l-4 border-gray-300 pl-4">
                XYZ互联网公司
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="border-l-2 border-gray-300 pl-3">
                  • 参与多个Web项目的开发和维护
                </li>
                <li className="border-l-2 border-gray-300 pl-3">
                  • 使用Vue.js开发响应式用户界面
                </li>
                <li className="border-l-2 border-gray-300 pl-3">
                  • 与设计师和后端开发人员密切合作
                </li>
                <li className="border-l-2 border-gray-300 pl-3">
                  • 参与项目需求分析和技术方案制定
                </li>
              </ul>
            </BorderBox>
          </div>
        </BorderBox>
      </section>

      {/* 项目经验 */}
      <section
        id="projects"
        className="py-20 border-b border-gray-300 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <BorderBox variant="section" padding="large" margin="medium" className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b border-gray-300 pb-4">
            项目经验
          </h2>
          <div className="grid md:grid-cols-2 gap-8 justify-items-center m-4">
            <BorderBox variant="thick" padding="large">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                电商管理系统
              </h3>
              <p className="text-gray-700 mb-4 border-l-4 border-gray-300 pl-4">
                基于React和Node.js开发的全栈电商管理系统，包含商品管理、订单处理、用户管理等功能。
              </p>
              <div className="flex flex-wrap gap-2 mb-4 border-t border-gray-300 pt-4">
                <BorderBox variant="default" padding="small" className="text-gray-700 text-sm">
                  React
                </BorderBox>
                <BorderBox variant="default" padding="small" className="text-gray-700 text-sm">
                  Node.js
                </BorderBox>
                <BorderBox variant="default" padding="small" className="text-gray-700 text-sm">
                  MongoDB
                </BorderBox>
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-400 hover:border-gray-600"
              >
                查看项目 →
              </a>
            </BorderBox>

            <BorderBox variant="thick" padding="large">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                任务管理应用
              </h3>
              <p className="text-gray-700 mb-4 border-l-4 border-gray-300 pl-4">
                使用Vue.js开发的团队协作工具，支持任务分配、进度跟踪、团队沟通等功能。
              </p>
              <div className="flex flex-wrap gap-2 mb-4 border-t border-gray-300 pt-4">
                <BorderBox variant="default" padding="small" className="text-gray-700 text-sm">
                  Vue.js
                </BorderBox>
                <BorderBox variant="default" padding="small" className="text-gray-700 text-sm">
                  TypeScript
                </BorderBox>
                <BorderBox variant="default" padding="small" className="text-gray-700 text-sm">
                  Firebase
                </BorderBox>
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-400 hover:border-gray-600"
              >
                查看项目 →
              </a>
            </BorderBox>
          </div>
        </BorderBox>
      </section>

      {/* 教育背景 */}
      <section
        id="education"
        className="py-20 border-b border-gray-300 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <BorderBox variant="section" padding="large" margin="medium" className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b border-gray-300 pb-4">
            教育背景
          </h2>
          <BorderBox variant="thick" padding="large" margin="medium">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 border-b border-gray-300 pb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                计算机科学与技术
              </h3>
              <BorderBox variant="default" padding="small" className="text-gray-600 mt-2 md:mt-0">
                2015 - 2019
              </BorderBox>
            </div>
            <p className="text-gray-700 mb-4 border-l-4 border-gray-300 pl-4">
              某某大学 · 本科
            </p>
            <BorderBox variant="default" padding="medium" className="text-gray-700">
              主修课程包括数据结构、算法设计、软件工程、数据库系统等。在校期间积极参与编程竞赛和开源项目。
            </BorderBox>
          </BorderBox>
        </BorderBox>
      </section>

      {/* 联系我 */}
      <section
        id="contact"
        className="py-20 border-b border-gray-300 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <BorderBox variant="section" padding="large" margin="medium" className="max-w-4xl w-full text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-300 pb-4">
            联系我
          </h2>
          <BorderBox variant="default" padding="medium" margin="medium" className="text-gray-700 text-lg">
            如果您对我的经历感兴趣，欢迎与我联系！
          </BorderBox>
          <div className="flex flex-col sm:flex-row gap-4 justify-center border-t border-gray-300 pt-6 m-4">
            <BorderBox variant="thick" padding="medium" className="text-white hover:bg-gray-800 transition-colors bg-gray-900">
              下载简历
            </BorderBox>
            <BorderBox variant="thick" padding="medium" className="text-gray-900 hover:border-gray-600 transition-colors">
              发送邮件
            </BorderBox>
          </div>
        </BorderBox>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-300 flex justify-center">
        <BorderBox variant="default" padding="medium" margin="medium" className="max-w-4xl w-full text-center">
          <p className="text-gray-600">© 2024 张三. 保留所有权利.</p>
        </BorderBox>
      </footer>
    </div>
  );
}

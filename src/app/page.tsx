"use client";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  ArrowRight,
  Code,
  User,
  ChevronRight,
  Send,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/**
 * 自定义Hook - 滚动渐显效果
 * 检测元素是否进入视口，用于触发动画
 */
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一旦显示就不再隐藏
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // 当元素10%可见时触发
        rootMargin: '0px 0px -50px 0px' // 提前50px触发
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

/**
 * 自定义Hook - 多元素渐显效果
 * 为多个子元素提供依次渐显的动画效果
 */
function useStaggeredReveal(itemCount: number) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 依次显示每个元素，间隔200ms
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * 200);
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [itemCount]);

  return { ref, visibleItems };
}

/**
 * 主页面组件 - 个人简历网站
 * 基于HTML模板转换的React版本，保持原有设计风格
 */
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // 滚动渐显效果
  const aboutSection = useScrollReveal();
  const skillsSection = useScrollReveal();
  const experienceSection = useScrollReveal();
  const projectsSection = useScrollReveal();
  const contactSection = useScrollReveal();
  
  // 项目卡片渐显效果（3个项目）
  const projectCards = useStaggeredReveal(3);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部功能
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-50 text-gray-900 antialiased">
      {/* 导航栏 */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-gray-50/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600 flex items-center">
            <Code className="mr-2" size={24} />
            <span>张晋哲</span>
          </a>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="font-medium hover:text-blue-600 transition-all duration-300">关于我</a>
            <a href="#skills" className="font-medium hover:text-blue-600 transition-all duration-300">技能</a>
            <a href="#experience" className="font-medium hover:text-blue-600 transition-all duration-300">工作经历</a>
            <a href="#projects" className="font-medium hover:text-blue-600 transition-all duration-300">项目</a>
            <a href="#contact" className="font-medium hover:text-blue-600 transition-all duration-300">联系</a>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#about" className="font-medium py-2 hover:text-blue-600 transition-all duration-300">关于我</a>
              <a href="#skills" className="font-medium py-2 hover:text-blue-600 transition-all duration-300">技能</a>
              <a href="#experience" className="font-medium py-2 hover:text-blue-600 transition-all duration-300">工作经历</a>
              <a href="#projects" className="font-medium py-2 hover:text-blue-600 transition-all duration-300">项目</a>
              <a href="#contact" className="font-medium py-2 hover:text-blue-600 transition-all duration-300">联系</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 英雄区域 */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  我是<span className="text-blue-600">张晋哲</span>
                  <br />全栈工程师
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                  专注于构建优雅、高效的用户界面和交互体验，热衷于探索前端新技术和最佳实践。
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center">
                    <span>查看我的项目</span>
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                  <a href="#contact" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-300">
                    联系我
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image 
                      src="/logo.JPG" 
                      alt="张小明的照片" 
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                    <span className="text-sm font-medium">5+ 年经验</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 关于我 */}
        <section 
          id="about" 
          ref={aboutSection.ref}
          className={`py-20 bg-white transition-all duration-1000 ${
            aboutSection.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">关于我</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <User className="text-blue-600 mr-3" size={20} />
                    个人信息
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="w-24 font-medium text-gray-500">姓名:</span>
                      <span>张小明</span>
                    </li>
                    <li className="flex">
                      <span className="w-24 font-medium text-gray-500">职业:</span>
                      <span>前端工程师</span>
                    </li>
                    <li className="flex">
                      <span className="w-24 font-medium text-gray-500">邮箱:</span>
                      <a href="mailto:zhang@example.com" className="text-blue-600 hover:underline">zhang@example.com</a>
                    </li>
                    <li className="flex">
                      <span className="w-24 font-medium text-gray-500">地点:</span>
                      <span>上海</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">社交账号</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <Github size={16} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <Code size={16} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <Linkedin size={16} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-6">我是谁？</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  我是一名拥有5年经验的前端工程师，热衷于构建用户友好、性能卓越的Web应用。我对前端技术充满热情，不断学习和探索新的框架和工具。
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  我的技术栈以JavaScript为核心，精通React、Vue等现代前端框架，熟悉Webpack、Vite等构建工具，以及Tailwind CSS等CSS解决方案。我注重代码质量和用户体验，追求编写可维护、高性能的代码。
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  除了技术能力，我也具备良好的沟通能力和团队协作精神，能够与产品经理、设计师和后端工程师紧密合作，共同打造优秀的产品。
                </p>
                
                <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                  <Download className="mr-2" size={16} />
                  下载我的简历
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 技能 */}
        <section 
          id="skills" 
          ref={skillsSection.ref}
          className={`py-20 bg-gray-50 transition-all duration-1000 ${
            skillsSection.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">我的技能</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                多年的前端开发经验让我掌握了一系列Web开发技术，从基础到高级，不断拓展我的技术边界。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 技能详情 */}
              <div>
                <h3 className="text-xl font-semibold mb-6">前端技能</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">HTML5 & CSS3</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-in-out" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">JavaScript (ES6+)</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-in-out" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">React & Vue</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-in-out" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">TypeScript</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-in-out" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Node.js & Express</span>
                      <span>70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-in-out" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">UI/UX 设计</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-in-out" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Trae AI 开发</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-1500 ease-in-out" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-6">工具与方法</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Trae AI</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Git</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Webpack</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Vite</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Jest</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Cypress</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Docker</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">CI/CD</span>
                    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm">Figma</span>
                  </div>
                </div>
              </div>
              
              {/* 技能图表占位 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6">技术栈熟练度</h3>
                <div className="h-80 flex items-center justify-center text-gray-500">
                  <p>技能雷达图 (可集成Chart.js)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 工作经历 */}
        <section 
          id="experience" 
          ref={experienceSection.ref}
          className={`py-20 bg-white transition-all duration-1000 ${
            experienceSection.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">工作经历</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                我的职业发展历程，从初级开发者到资深前端工程师的成长轨迹。
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
                
                {/* 工作经历项目 */}
                <div className="space-y-12">
                  {/* 经历1 */}
                  <div className="relative flex items-center">
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                      <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">高级前端工程师</h3>
                          <span className="text-sm text-blue-600 font-medium">2022 - 至今</span>
                        </div>
                        <h4 className="text-lg text-blue-600 font-medium mb-3">科技创新有限公司</h4>
                        <ul className="text-gray-600 space-y-2">
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            负责公司核心产品的前端架构设计和技术选型
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            带领5人前端团队完成多个大型项目的开发
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            优化系统性能，页面加载速度提升40%
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            建立前端开发规范和代码审查流程
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">TypeScript</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">团队管理</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 经历2 */}
                  <div className="relative flex items-center md:flex-row-reverse">
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
                      <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">前端工程师</h3>
                          <span className="text-sm text-blue-600 font-medium">2020 - 2022</span>
                        </div>
                        <h4 className="text-lg text-blue-600 font-medium mb-3">互联网科技公司</h4>
                        <ul className="text-gray-600 space-y-2">
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            参与电商平台的前端开发和维护工作
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            开发响应式Web应用，支持多端适配
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            与后端团队协作，完成API接口对接
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            参与代码重构，提升代码质量和可维护性
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Vue.js</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">JavaScript</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Webpack</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Sass</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 经历3 */}
                  <div className="relative flex items-center">
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                      <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">初级前端开发者</h3>
                          <span className="text-sm text-blue-600 font-medium">2018 - 2020</span>
                        </div>
                        <h4 className="text-lg text-blue-600 font-medium mb-3">软件开发公司</h4>
                        <ul className="text-gray-600 space-y-2">
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            学习并掌握前端基础技术栈
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            参与企业官网和管理系统的开发
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            协助UI设计师完成页面还原工作
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="mr-2 mt-0.5 text-blue-500" size={16} />
                            学习版本控制和团队协作流程
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">HTML/CSS</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">jQuery</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Bootstrap</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Git</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 项目 */}
        <section 
          id="projects" 
          ref={projectsSection.ref}
          className={`py-20 bg-gray-50 transition-all duration-1000 ${
            projectsSection.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">我的项目</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                这些是我参与或独立开发的部分项目，展示了我的技术能力和解决问题的思路。
              </p>
            </div>
            
            <div ref={projectCards.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 项目1 */}
              <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                projectCards.visibleItems[0] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}>
                <div className="h-56 overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/project1/600/400" 
                    alt="电商平台前端重构项目" 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                    <span className="text-gray-500 text-sm">2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">电商平台前端重构</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    使用React和Redux重构了传统电商平台，优化了用户体验和页面加载速度，提升了30%的转化率。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Redux</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Tailwind</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                    查看详情 <ArrowRight className="ml-1" size={14} />
                  </a>
                </div>
              </div>
              
              {/* 项目2 */}
              <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                projectCards.visibleItems[1] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}>
                <div className="h-56 overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/project2/600/400" 
                    alt="数据可视化仪表盘" 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Vue</span>
                    <span className="text-gray-500 text-sm">2022</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">数据可视化仪表盘</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    开发了响应式数据可视化仪表盘，集成多种图表类型，支持实时数据更新和交互式分析。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Vue 3</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Vuex</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">D3.js</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Chart.js</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                    查看详情 <ArrowRight className="ml-1" size={14} />
                  </a>
                </div>
              </div>
              
              {/* 项目3 */}
              <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                projectCards.visibleItems[2] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}>
                <div className="h-56 overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/project3/600/400" 
                    alt="移动端社交应用" 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">React Native</span>
                    <span className="text-gray-500 text-sm">2022</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">移动端社交应用</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    使用React Native开发的跨平台社交应用，实现了实时聊天、动态发布、好友管理等功能。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">React Native</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Firebase</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Redux</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">WebSocket</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                    查看详情 <ArrowRight className="ml-1" size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-300">
                查看更多项目 <ChevronRight className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 联系 */}
        <section 
          id="contact" 
          ref={contactSection.ref}
          className={`py-20 bg-gray-50 transition-all duration-1000 ${
            contactSection.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                对我的工作感兴趣？有项目想合作？或者只是想聊聊天？请随时联系我！
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <h3 className="text-xl font-semibold mb-6">发送消息</h3>
                  
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600" 
                        placeholder="你的姓名"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">邮箱</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600" 
                        placeholder="你的邮箱"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">消息</label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600" 
                        placeholder="你想对我说的话..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <Send className="mr-2" size={16} />
                      发送消息
                    </button>
                  </form>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                  <h3 className="text-xl font-semibold mb-6">联系方式</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">邮箱</h4>
                        <p className="text-gray-600">
                          <a href="mailto:zhang@example.com" className="hover:text-blue-600 transition-all duration-300">zhang@example.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">电话</h4>
                        <p className="text-gray-600">+86 138 0000 0000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">地址</h4>
                        <p className="text-gray-600">上海市浦东新区科技园区</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">工作时间</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">周一至周五</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">周六</span>
                      <span>10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">周日</span>
                      <span>休息</span>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-gray-600">
                    我通常会在24小时内回复消息，如有紧急事务，请直接致电。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold flex items-center">
                <Code className="mr-2" size={24} />
                <span>张小明</span>
              </a>
              <p className="mt-2 text-gray-400">前端工程师 | 专注于用户体验和交互设计</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-xl">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-xl">
                <Code size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-xl">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-xl">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2023 张小明. 保留所有权利.</p>
          </div>
        </div>
      </footer>

      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

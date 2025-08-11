"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/**
 * LinkedIn风格的导航组件
 * 现代化的响应式设计，支持桌面端和移动端
 * 包含平滑滚动和当前区域高亮功能
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 导航菜单项
  const navItems = [
    { id: "home", label: "首页" },
    { id: "about", label: "关于" },
    { id: "skills", label: "技能" },
    { id: "experience", label: "经验" },
    { id: "projects", label: "项目" },
    { id: "contact", label: "联系" },
  ];

  /**
   * 平滑滚动到指定区域
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  /**
   * 监听滚动事件，更新当前活跃区域
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 桌面端导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-blue-600">
              张晋哲
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

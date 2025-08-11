"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/**
 * 导航组件
 * 简洁的响应式设计，支持桌面端和移动端
 * 包含平滑滚动和当前区域高亮功能
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 导航菜单项
  const navItems = [
    { id: "home", label: "首页" },
    { id: "about", label: "关于" },
    { id: "experience", label: "经验" },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-l border-r border-gray-300">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-900 border-r border-gray-300 pr-4">
              张三
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-2 ${
                    activeSection === item.id
                      ? "border-gray-900 text-gray-900"
                      : "border-gray-400 text-gray-700 hover:border-gray-600 hover:text-gray-900"
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
                className="text-gray-700 hover:text-gray-900 p-2 border border-gray-400 hover:border-gray-600"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端导航按钮 */}
      <button
        className="fixed top-6 right-6 z-50 md:hidden text-gray-900 p-3 border-2 border-gray-900 bg-white transition-colors hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-2 border-gray-400 border-l border-r border-gray-300">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors border-2 ${
                  activeSection === item.id
                    ? "border-gray-900 text-gray-900"
                    : "border-gray-400 text-gray-700 hover:border-gray-600 hover:text-gray-900"
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

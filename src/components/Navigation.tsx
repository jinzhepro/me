"use client";

import { Code } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

/**
 * 导航栏组件
 * 提供网站顶部导航功能
 */
export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/50 dark:bg-gray-800/50 backdrop-blur supports-[backdrop-filter]:bg-white/30 dark:supports-[backdrop-filter]:bg-gray-800/30 border-gray-100 dark:border-gray-800 transition-all duration-300 gradient-animation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
            <span className="text-xl font-bold transition-colors duration-300">张晋哲</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">关于</a>
              <a href="#experience" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">经历</a>
              <a href="#projects" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">项目</a>
              <a href="#skills" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">技能</a>
              <a href="#contact" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:-translate-y-0.5">联系</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
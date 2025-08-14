"use client";

import { Code } from "lucide-react";

/**
 * 导航栏组件
 * 提供网站顶部导航功能
 */
export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">张晋哲</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-gray-600 transition-colors">关于</a>
            <a href="#experience" className="text-sm font-medium hover:text-gray-600 transition-colors">经历</a>
            <a href="#projects" className="text-sm font-medium hover:text-gray-600 transition-colors">项目</a>
            <a href="#skills" className="text-sm font-medium hover:text-gray-600 transition-colors">技能</a>
            <a href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">联系</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
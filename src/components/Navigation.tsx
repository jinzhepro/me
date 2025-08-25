"use client";

import { Code } from "lucide-react";
import MobileMenu from "./MobileMenu";

/**
 * 导航栏组件
 * 提供网站顶部导航功能
 */
export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span className="text-lg font-medium">
              张晋哲
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-5">
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                关于
              </a>
              <a
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                经历
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                项目
              </a>
              <a
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                技能
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                联系
              </a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

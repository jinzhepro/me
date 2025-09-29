"use client";

import { Code } from "lucide-react";
import MobileMenu from "./MobileMenu";

// 从JSON文件导入数据和类型
import navigationData from "@/data/navigation.json";
import { NavigationData } from "@/types/navigation";

/**
 * 导航栏组件
 * 提供网站顶部导航功能
 */
export default function Navigation() {
  const { brand, navigationLinks }: NavigationData = navigationData;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span className="text-lg font-medium">{brand.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-5">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * 移动端菜单组件
 * 在小屏幕上显示汉堡菜单，点击后展开导航链接
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // 切换菜单开闭状态
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 关闭菜单
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="切换菜单"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-label="关闭菜单" />
        ) : (
          <Menu className="h-6 w-6" aria-label="打开菜单" />
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 z-50">
          <div className="flex flex-col space-y-2">
            <a
              href="#about"
              className="mobile-menu-item text-sm font-medium"
              onClick={closeMenu}
            >
              关于
            </a>
            <a
              href="#experience"
              className="mobile-menu-item text-sm font-medium"
              onClick={closeMenu}
            >
              经历
            </a>
            <a
              href="#projects"
              className="mobile-menu-item text-sm font-medium"
              onClick={closeMenu}
            >
              项目
            </a>
            <a
              href="#skills"
              className="mobile-menu-item text-sm font-medium"
              onClick={closeMenu}
            >
              技能
            </a>
            <a
              href="#education"
              className="mobile-menu-item text-sm font-medium"
              onClick={closeMenu}
            >
              教育背景
            </a>
            <a
              href="#environment"
              className="mobile-menu-item text-sm font-medium"
              onClick={closeMenu}
            >
              工作环境
            </a>
            <a
              href="#social-media"
              className="mobile-menu-item text-sm font-medium"
              onClick={closeMenu}
            >
              联系
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

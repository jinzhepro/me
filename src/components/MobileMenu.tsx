"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// 从JSON文件导入数据和类型
import navigationData from "@/data/navigation.json";
import { NavigationData } from "@/types/navigation";

/**
 * 移动端菜单组件
 * 在小屏幕上显示汉堡菜单，点击后展开导航链接
 * 支持展开/收起动画效果
 */
export default function MobileMenu() {
  const { mobileNavigationLinks }: NavigationData = navigationData;
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
    <div className="md:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="切换菜单"
        className="relative z-50"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 rotate-90" aria-label="关闭菜单" />
        ) : (
          <Menu className="h-6 w-6 transition-transform duration-300" aria-label="打开菜单" />
        )}
      </Button>

      {/* 菜单遮罩层 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 animate-fade-in"
          onClick={closeMenu}
        />
      )}

        {/* 菜单内容 */}
      <div
        className={`absolute top-14 right-0 w-64 bg-background border-b shadow-xl z-50 overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-1">
          {/* 移动端主题切换 */}
          <div className="flex items-center justify-between py-2 px-3">
            <span className="text-sm font-medium">主题</span>
            <ThemeToggle />
          </div>
          <div className="border-t border-border my-2" />

          {mobileNavigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="mobile-menu-item text-sm font-medium block animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

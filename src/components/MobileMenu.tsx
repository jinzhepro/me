"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// 从JSON文件导入数据和类型
import navigationData from "@/data/navigation.json";
import { NavigationData } from "@/types/navigation";

/**
 * 移动端菜单组件
 * 在小屏幕上显示汉堡菜单，点击后展开导航链接
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
            {mobileNavigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mobile-menu-item text-sm font-medium"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { Code, Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";

// 从JSON文件导入数据和类型
import navigationData from "@/data/navigation.json";
import { NavigationData } from "@/types/navigation";
import profileData from "@/data/profile.json";

/**
 * 导航栏组件
 * 提供网站顶部导航功能，支持active状态指示
 */
export default function Navigation() {
  const { brand, navigationLinks }: NavigationData = navigationData;
  const [activeSection, setActiveSection] = useState("about");

  // 监听滚动，更新active状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationLinks]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-accent-warm" />
            <span className="text-lg font-medium">{brand.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              {navigationLinks.map((link, index) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {/* Active状态指示器 */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-warm rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* 移动端快速拨号按钮 */}
            <a
              href={`tel:${profileData.contact.phone}`}
              className="md:hidden p-2 rounded-lg bg-secondary text-accent-warm hover:bg-secondary/80 transition-colors"
              aria-label="快速拨号"
            >
              <Phone className="h-5 w-5" />
            </a>

            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

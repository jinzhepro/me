"use client";

import { useState, useEffect } from "react";
import { initPageAnimations, initScrollAnimations } from "@/lib/animations";

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * 客户端专属组件包装器
 * 确保只在客户端渲染子组件，避免服务端/客户端 hydration 不匹配
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <div className="client-only">{children}</div> : <div className="client-only">{fallback}</div>;
}

/**
 * 使用页面动画的自定义 Hook
 * 封装动画初始化逻辑，解耦组件关注点
 */
export function usePageAnimations() {
  useEffect(() => {
    // 为锚点链接添加平滑滚动
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = target.getAttribute("href")!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 120,
            behavior: "smooth",
          });
        }
      }
    };

    // 初始化动画
    initPageAnimations();
    const scrollObserver = initScrollAnimations();

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      scrollObserver?.disconnect();
    };
  }, []);
}

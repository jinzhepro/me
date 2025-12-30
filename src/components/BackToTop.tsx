"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

/**
 * 回到顶部按钮组件
 * 当用户滚动页面时显示，点击可平滑滚动到页面顶部
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件，控制按钮显示/隐藏
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 平滑滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-8 right-8 h-10 w-10 rounded-lg p-0 shadow-lg z-50"
          onClick={scrollToTop}
          aria-label="回到顶部"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}

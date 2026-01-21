"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

/**
 * 主题切换按钮组件
 * 显示太阳图标（亮色模式）或月亮图标（暗色模式）
 */
export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // 避免水合不匹配，显示加载状态
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="size-9"
        aria-label="Theme toggle"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="size-9"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 rotate-0 scale-100 transition-all" />
      ) : (
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all" />
      )}
    </Button>
  );
}

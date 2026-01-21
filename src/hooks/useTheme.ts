"use client";

import { useEffect, useState } from "react";

/**
 * 主题类型定义
 */
type Theme = "light" | "dark";

/**
 * 获取当前系统偏好的主题
 * @returns 系统偏好主题
 */
function getSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * 主题状态管理 Hook
 * 支持：
 * - 手动切换主题
 * - 系统偏好跟随
 * - 本地存储持久化
 * - 页面加载时恢复主题
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // 初始化主题
  useEffect(() => {
    setMounted(true);
    // 优先从本地存储读取
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // 使用系统偏好
      setTheme(getSystemTheme());
    }
  }, []);

  // 同步主题到 DOM 和本地存储
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // 监听系统主题变化
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      // 仅在没有本地存储设置时跟随系统
      if (!localStorage.getItem("theme")) {
        const newTheme = mediaQuery.matches ? "dark" : "light";
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mounted]);

  /**
   * 切换主题
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  /**
   * 设置特定主题
   * @param newTheme 目标主题
   */
  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
    setTheme: setThemeValue,
    mounted,
  };
}

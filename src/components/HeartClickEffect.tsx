"use client";

import { useEffect, useCallback } from "react";

/**
 * 可爱的心形点击效果组件
 * 当用户点击页面任意位置时显示漂浮的心形 emoji
 *
 * @component
 * @example
 * <HeartClickEffect />
 */
export default function HeartClickEffect() {
  const createHeart = useCallback((x: number, y: number) => {
    // 随机选择心形 emoji
    const hearts = ["❤️", "💖", "💗", "💓", "🎵", "✨"];
    const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];

    // 创建心形元素
    const heart = document.createElement("span");
    heart.textContent = randomHeart;
    heart.className = "heart-float";

    // 设置位置（添加微小的随机偏移使效果更自然）
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    heart.style.left = `${x + offsetX}px`;
    heart.style.top = `${y + offsetY}px`;

    // 设置随机大小 (16px - 28px)
    const size = 16 + Math.random() * 12;
    heart.style.fontSize = `${size}px`;

    // 设置随机水平漂移方向
    const driftDirection = Math.random() > 0.5 ? 1 : -1;
    const driftAmount = (Math.random() - 0.5) * 40;
    heart.style.setProperty("--drift-x", `${driftAmount}px`);

    // 添加到 body
    document.body.appendChild(heart);

    // 动画结束后移除元素
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }, []);

  useEffect(() => {
    // 检查用户是否减少动画偏好
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // 点击事件处理函数
    const handleClick = (e: MouseEvent) => {
      // 忽略来自按钮和链接的点击，避免干扰原有交互
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        return;
      }

      createHeart(e.clientX, e.clientY);
    };

    // 触摸事件处理函数（移动端）
    const handleTouch = (e: TouchEvent) => {
      // 忽略来自按钮和链接的触摸
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        return;
      }

      // 只处理单指触摸
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        createHeart(touch.clientX, touch.clientY);
      }
    };

    // 添加事件监听器
    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleTouch, { passive: true });

    // 清理函数
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleTouch);
    };
  }, [createHeart]);

  return null;
}

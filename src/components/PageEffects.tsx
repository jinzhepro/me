"use client";

import { usePageAnimations } from "@/hooks/usePageAnimations";

/**
 * 页面动画副作用组件
 * 仅在客户端触发动画初始化逻辑
 */
export default function PageEffects() {
  usePageAnimations();
  return null;
}

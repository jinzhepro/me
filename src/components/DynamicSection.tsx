import dynamic from "next/dynamic";
import type { ComponentType, ReactNode } from "react";

interface DynamicSectionProps {
  importFn: () => Promise<{ default: ComponentType<unknown> }>;
  skeleton: ReactNode;
}

/**
 * 动态加载组件包装器
 * 提供统一的加载状态展示，避免重复的 loading 代码
 */
export default function DynamicSection({ importFn, skeleton }: DynamicSectionProps) {
  const Component = dynamic(importFn, {
    loading: () => skeleton,
  });

  return <Component />;
}

/**
 * 预定义的常用骨架屏模板
 */
export const Skeletons = {
  /**
   * 标准卡片骨架屏 - 适合单个大卡片
   */
  card: (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-muted rounded w-1/4 mb-6" />
      <div className="h-48 bg-muted rounded-lg" />
    </div>
  ),

  /**
   * 列表骨架屏 - 适合多个列表项
   */
  list: (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-muted rounded w-1/4 mb-6" />
      <div className="h-40 bg-muted rounded-lg" />
      <div className="h-40 bg-muted rounded-lg" />
    </div>
  ),

  /**
   * 网格骨架屏 - 适合双列网格布局
   */
  grid: (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-muted rounded w-1/4 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 bg-muted rounded-lg" />
        <div className="h-64 bg-muted rounded-lg" />
      </div>
    </div>
  ),

  /**
   * 社交媒体卡片骨架屏
   */
  socialCards: (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-muted rounded w-1/4 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-32 bg-muted rounded-lg" />
        <div className="h-32 bg-muted rounded-lg" />
      </div>
    </div>
  ),

  /**
   * 技能卡片骨架屏
   */
  skills: (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-muted rounded w-1/4 mb-6" />
      <div className="h-80 bg-muted rounded-lg" />
    </div>
  ),
};

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeartClickEffect = dynamic(() => import("@/components/HeartClickEffect"), {
  ssr: false,
});

const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});

/**
 * 延迟挂载非关键交互组件，减少首屏 JS 压力
 */
export default function DeferredInteractions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const win = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (
          callback: IdleRequestCallback,
          options?: IdleRequestOptions
        ) => number;
        cancelIdleCallback?: (handle: number) => void;
      };

    const mount = () => {
      if (!cancelled) {
        setMounted(true);
      }
    };

    if (win.requestIdleCallback) {
      idleId = win.requestIdleCallback(mount, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(mount, 1200);
    }

    return () => {
      cancelled = true;
      if (idleId) {
        win.cancelIdleCallback?.(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <HeartClickEffect />
      <BackToTop />
    </>
  );
}

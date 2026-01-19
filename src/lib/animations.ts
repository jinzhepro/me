/**
 * 滚动触发动画工具函数
 * 用于实现元素进入视口时的动画效果
 */

/**
 * 初始化滚动触发动画观察器
 * 使用延迟初始化确保在 hydration 完成后再执行
 */
export function initScrollAnimations() {
  if (typeof window === "undefined") return;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  const initObserver = () => {
    const elements = document.querySelectorAll(".animate-on-scroll:not(.observed)");
    elements.forEach((el) => {
      el.classList.add("observed");
      observer.observe(el);
    });
  };

  if (document.readyState === "complete") {
    initObserver();
  } else {
    window.addEventListener("load", initObserver, { once: true });
  }

  return observer;
}

/**
 * 初始化页面加载动画
 */
export function initPageAnimations() {
  if (typeof window === "undefined") return;

  // 页面加载时的淡入效果
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.classList.add("animate-fade-in");
  }

  // 延迟加载子元素动画 - 只对ProfileCard立即生效，其他组件等待滚动触发
  setTimeout(() => {
    // 只对ProfileCard区域立即应用动画
    const profileSection = document.querySelector("#about");
    if (profileSection) {
      profileSection.classList.add("animate-fade-in-up");
    }
  }, 100);
}

/**
 * 平滑滚动到指定元素
 * @param elementId 目标元素的ID
 * @param offset 偏移量（默认120px，适应固定导航栏）
 */
export function smoothScrollTo(elementId: string, offset = 120) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

/**
 * 检查是否支持减少动画偏好
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

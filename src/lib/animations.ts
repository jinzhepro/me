/**
 * 滚动触发动画工具函数
 * 用于实现元素进入视口时的动画效果
 */

/**
 * 初始化滚动触发动画观察器
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
        // 可选：动画完成后取消观察以减少性能开销
        // observer.unobserve(entry.target);
      } else {
        // 可选：离开视口时移除可见状态
        // entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // 观察所有带有 animate-on-scroll 类的元素
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => observer.observe(el));

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

/**
 * 防抖函数，用于优化滚动事件性能
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * 节流函数，用于优化滚动事件性能
 */
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * 为元素添加鼠标悬停缩放效果
 */
export function addHoverScaleEffect(element: HTMLElement, scale = 1.05) {
  element.addEventListener("mouseenter", () => {
    if (!prefersReducedMotion()) {
      element.style.transform = `scale(${scale})`;
    }
  });

  element.addEventListener("mouseleave", () => {
    if (!prefersReducedMotion()) {
      element.style.transform = "scale(1)";
    }
  });
}

/**
 * 为元素添加点击涟漪效果
 */
export function addRippleEffect(element: HTMLElement) {
  element.addEventListener("click", (e) => {
    if (prefersReducedMotion()) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // 添加样式（如果尚未添加）
    if (!document.querySelector("style#ripple-styles")) {
      const style = document.createElement("style");
      style.id = "ripple-styles";
      style.textContent = `
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    element.style.position = "relative";
    element.style.overflow = "hidden";
    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

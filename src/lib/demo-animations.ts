/**
 * 演示动画效果的工具函数
 * 用于展示UI改进后的动画效果
 */

/**
 * 演示卡片悬停效果
 */
export function demoCardHoverEffects() {
  const cards = document.querySelectorAll(".card-hover");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("demo-hover");
      setTimeout(() => {
        card.classList.remove("demo-hover");
      }, 1000);
    }, index * 500);
  });
}

/**
 * 演示技能进度条动画
 */
export function demoSkillProgress() {
  const progressBars = document.querySelectorAll(".skill-progress-bar");
  progressBars.forEach((bar, index) => {
    setTimeout(() => {
      const htmlBar = bar as HTMLElement;
      const currentWidth = htmlBar.style.width;
      htmlBar.style.width = "0%";
      setTimeout(() => {
        htmlBar.style.width = currentWidth;
      }, 100);
    }, index * 200);
  });
}

/**
 * 演示技术标签动画
 */
export function demoTechTags() {
  const techTags = document.querySelectorAll(".tech-tag");
  techTags.forEach((tag, index) => {
    setTimeout(() => {
      tag.classList.add("demo-pulse");
      setTimeout(() => {
        tag.classList.remove("demo-pulse");
      }, 600);
    }, index * 100);
  });
}

/**
 * 演示滚动触发动画
 */
export function demoScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("visible");
      setTimeout(() => {
        element.classList.remove("visible");
      }, 2000);
    }, index * 300);
  });
}

/**
 * 演示所有动画效果
 */
export function demoAllAnimations() {
  demoCardHoverEffects();
  setTimeout(demoSkillProgress, 1500);
  setTimeout(demoTechTags, 3000);
  setTimeout(demoScrollAnimations, 4500);
}

/**
 * 添加演示样式
 */
export function addDemoStyles() {
  if (typeof document === "undefined") return;

  const style = document.createElement("style");
  style.textContent = `
    .demo-hover {
      transform: translateY(-4px) scale(1.01) !important;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15) !important;
      border-color: oklch(0.61 0.18 240 / 0.3) !important;
    }
    
    .demo-pulse {
      animation: demo-pulse 0.6s ease-in-out;
    }
    
    @keyframes demo-pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }
      50% {
        transform: scale(1.1);
        box-shadow: 0 6px 12px rgba(239, 108, 0, 0.2);
      }
    }
    
    .demo-ripple {
      position: relative;
      overflow: hidden;
    }
    
    .demo-ripple::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: translate(-50%, -50%);
      animation: demo-ripple 0.6s linear;
    }
    
    @keyframes demo-ripple {
      to {
        width: 200px;
        height: 200px;
        opacity: 0;
      }
    }
  `;

  document.head.appendChild(style);
}

/**
 * 初始化演示功能
 */
export function initDemo() {
  if (typeof window === "undefined") return;

  addDemoStyles();

  // 添加演示按钮（仅在开发环境）
  if (process.env.NODE_ENV === "development") {
    const demoButton = document.createElement("button");
    demoButton.textContent = "演示动画效果";
    demoButton.className = "btn-simple fixed bottom-4 right-4 z-50";
    demoButton.onclick = demoAllAnimations;
    document.body.appendChild(demoButton);
  }
}

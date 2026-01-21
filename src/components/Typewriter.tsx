"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

/**
 * 打字机效果组件
 * 逐字显示文本，模拟打字效果
 * 支持打字完成后删除并循环
 */
export function Typewriter({ text, speed = 80, className = "" }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const isDeletingRef = useRef(false);
  const indexRef = useRef(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeletingRef.current) {
        // 打字阶段
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current++;
          timeout = setTimeout(type, speed);
        } else {
          // 打完字后等待一下，然后开始删除
          isDeletingRef.current = true;
          timeout = setTimeout(type, 2000);
        }
      } else {
        // 删除阶段
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayedText(text.slice(0, indexRef.current));
          timeout = setTimeout(type, speed / 2);
        } else {
          // 删除完后重新开始
          isDeletingRef.current = false;
          timeout = setTimeout(type, 500);
        }
      }
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [text, speed]);

  // 闪烁光标效果
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span
        className="inline-block w-2.5 h-5 ml-1 align-middle animate-pulse"
        style={{
          backgroundColor: "var(--foreground)",
          opacity: showCursor ? 1 : 0,
        }}
      />
    </span>
  );
}

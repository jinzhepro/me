"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface TypewriterClientProps {
  text: string;
  speed?: number;
}

const Typewriter = dynamic(
  () => import("@/components/Typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

/**
 * 客户端打字机包装器
 * 仅在客户端加载打字机效果，避免首屏水合开销
 */
export default function TypewriterClient({ text, speed }: TypewriterClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span>{text}</span>;
  }

  return <Typewriter text={text} speed={speed} />;
}

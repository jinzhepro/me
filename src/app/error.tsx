"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          出现了一些问题
        </h2>
        <p className="text-gray-600 mb-6">抱歉，页面加载时遇到了错误</p>
        <Button onClick={reset} variant="default">
          重试
        </Button>
      </div>
    </div>
  );
}

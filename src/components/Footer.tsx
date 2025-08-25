import React from 'react';

/**
 * 页脚组件 - 展示版权信息
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-6 mt-12 transition-colors">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 张晋哲. 使用 <a href="https://trae.ai" className="text-primary hover:underline">Trae AI</a> 辅助开发.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
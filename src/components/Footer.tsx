import React from 'react';

/**
 * 页脚组件 - 展示版权信息
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © 2025 张晋哲. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          本网站由
          <a 
            href="https://trae.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline ml-1 mr-1"
          >
            Trae AI
          </a>
          辅助开发
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

/**
 * 页脚组件 - 展示版权信息
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © 2024 张晋哲. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
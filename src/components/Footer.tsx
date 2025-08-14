import React from 'react';

/**
 * 页脚组件 - 展示版权信息
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-600">
          © 2024 张晋哲. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
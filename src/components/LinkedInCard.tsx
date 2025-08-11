import React from 'react';

interface LinkedInCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  hover?: boolean;
}

/**
 * LinkedIn风格的卡片组件
 * 提供统一的卡片样式，包括阴影、圆角和悬停效果
 */
const LinkedInCard: React.FC<LinkedInCardProps> = ({
  children,
  className = '',
  padding = 'medium',
  hover = true
}) => {
  const paddingClasses = {
    none: '',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8'
  };

  const baseClasses = 'linkedin-card';
  const hoverClasses = hover ? 'hover:shadow-lg' : '';
  const paddingClass = paddingClasses[padding];

  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

export default LinkedInCard;
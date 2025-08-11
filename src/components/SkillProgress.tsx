import React from 'react';

interface SkillProgressProps {
  skill: string;
  percentage: number;
  className?: string;
}

/**
 * LinkedIn风格的技能进度条组件
 * 用于展示技能熟练度的可视化进度条
 * @param skill - 技能名称
 * @param percentage - 熟练度百分比 (0-100)
 * @param className - 自定义样式类名
 */
const SkillProgress: React.FC<SkillProgressProps> = ({
  skill,
  percentage,
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="linkedin-text-primary font-medium text-sm">{skill}</span>
        <span className="linkedin-text-secondary text-xs">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
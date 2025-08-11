import React from 'react';
import BorderBox from './BorderBox';

interface SkillProgressProps {
  skill: string;
  percentage: number;
  className?: string;
}

/**
 * 技能进度条组件
 * 使用边框样式显示技能熟练度
 */
const SkillProgress: React.FC<SkillProgressProps> = ({
  skill,
  percentage,
  className = ''
}) => {
  return (
    <BorderBox variant="skill" padding="small" margin="small" className={className}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">{skill}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full border border-gray-400 h-2 mt-2">
        <div
          className="border-r-4 border-gray-600 h-2"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </BorderBox>
  );
};

export default SkillProgress;
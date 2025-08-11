import React from 'react';
import LinkedInCard from './LinkedInCard';
import { Building2, Calendar } from 'lucide-react';

interface WorkExperienceProps {
  position: string;
  duration: string;
  company: string;
  responsibilities: string[];
  className?: string;
}

/**
 * LinkedIn风格的工作经历组件
 * 用于展示单个工作经历的详细信息
 * @param position - 职位名称
 * @param duration - 工作持续时间
 * @param company - 公司名称
 * @param responsibilities - 职责列表
 * @param className - 自定义样式类名
 */
const WorkExperience: React.FC<WorkExperienceProps> = ({
  position,
  duration,
  company,
  responsibilities,
  className = ''
}) => {
  return (
    <LinkedInCard className={className}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold linkedin-text-primary mb-1">
            {position}
          </h3>
          <div className="flex items-center linkedin-text-secondary mb-2">
            <Building2 className="w-4 h-4 mr-2" />
            <span className="font-medium">{company}</span>
          </div>
          <div className="flex items-center linkedin-text-secondary text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
      
      <div className="linkedin-divider"></div>
      
      <div className="space-y-3">
        {responsibilities.map((responsibility, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
            <span className="linkedin-text-primary text-sm leading-relaxed">
              {responsibility}
            </span>
          </div>
        ))}
      </div>
    </LinkedInCard>
  );
};

export default WorkExperience;
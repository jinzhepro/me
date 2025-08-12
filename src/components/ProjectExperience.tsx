import React from "react";
import { Calendar, Edit, Trash2 } from "lucide-react";
import LinkedInCard from "./LinkedInCard";

/**
 * 项目经历组件的属性接口
 */
interface ProjectExperienceProps {
  /** 项目名称 */
  name: string;
  /** 项目角色 */
  role: string;
  /** 项目时间 */
  duration: string;
  /** 项目描述 */
  description: string;
  /** 项目业绩/成果 */
  achievements?: string[];
  /** 使用的技术栈 */
  technologies?: string[];
  /** 是否显示编辑和删除按钮 */
  showActions?: boolean;
  /** 自定义类名 */
  className?: string;
}

/**
 * 项目经历组件
 * 展示单个项目的详细信息，包括项目名称、角色、时间、描述、成果和技术栈
 */
const ProjectExperience: React.FC<ProjectExperienceProps> = ({
  name,
  role,
  duration,
  description,
  achievements = [],
  technologies = [],
  showActions = false,
  className = "",
}) => {
  /**
   * 处理编辑按钮点击事件
   */
  const handleEdit = () => {
    console.log(`编辑项目: ${name}`);
    // 这里可以添加编辑逻辑
  };

  /**
   * 处理删除按钮点击事件
   */
  const handleDelete = () => {
    console.log(`删除项目: ${name}`);
    // 这里可以添加删除逻辑
  };

  return (
    <LinkedInCard className={className}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold linkedin-text-primary mb-1">
            {name}
          </h3>
          <p className="text-lg linkedin-text-secondary mb-2">{role}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 linkedin-text-secondary text-sm">
            <Calendar className="w-4 h-4" />
            {duration}
          </div>

          {showActions && (
            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="编辑项目"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={handleDelete}
                className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                aria-label="删除项目"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold linkedin-text-primary mb-2">内容：</h4>
        <p className="linkedin-text-secondary leading-relaxed">{description}</p>
      </div>

      {achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold linkedin-text-primary mb-2">业绩：</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="linkedin-text-secondary text-sm flex items-start"
              >
                <span className="text-linkedin-blue mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}

      {technologies.length > 0 && (
        <div>
          <h4 className="font-semibold linkedin-text-primary mb-2">技术栈：</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-linkedin-blue text-white rounded-full text-sm bg-blue-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </LinkedInCard>
  );
};

export default ProjectExperience;

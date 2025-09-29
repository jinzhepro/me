/**
 * 教育背景数据类型定义
 */
export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  level: string;
  achievements: string[];
  courses: string[];
}

export interface EducationData {
  educations: EducationItem[];
}

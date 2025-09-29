/**
 * 技能数据类型定义
 */
export interface Skill {
  name: string;
  level?: number; // 可选，因为工具类技能可能没有等级
  icon: string;
}

export interface SkillsData {
  frontendSkills: Skill[];
  backendSkills: Skill[];
  tools: Omit<Skill, "level">[]; // 工具类技能不包含level字段
}

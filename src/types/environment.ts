/**
 * 工作环境数据类型定义
 */
export interface EnvironmentItem {
  name: string;
  value?: string;
  icon: string; // 图标名称，将在组件中映射到实际的React组件或emoji
  highlight?: boolean;
  category?: string;
}

export interface EnvironmentSection {
  title: string;
  icon: string;
  items: EnvironmentItem[];
}

export interface EnvironmentData {
  browserPlugins: {
    name: string;
    icon: string;
    category: string;
  }[];
  sections: EnvironmentSection[];
}

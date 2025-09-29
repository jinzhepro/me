/**
 * 个人信息数据类型定义
 */
export interface ProfileData {
  name: string;
  title: string;
  experience: string;
  description: string;
  avatar: string;
  avatarAlt: string;
  skills: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import LinkedInCard from "./LinkedInCard";

/**
 * 个人信息组件的属性接口
 */
interface PersonalInfoProps {
  /** 姓名 */
  name: string;
  /** 职位 */
  position: string;
  /** 个人简介 */
  description: string;
  /** 头像图片路径 */
  avatarSrc: string;
  /** 联系信息 */
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  /** 社交链接 */
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

/**
 * 个人信息组件
 * 展示个人基本信息、联系方式和社交链接
 */
const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  position,
  description,
  avatarSrc,
  contact,
  socialLinks = {},
}) => {
  /**
   * 处理社交链接点击事件
   * @param type - 社交平台类型
   * @param url - 链接地址
   */
  const handleSocialClick = (type: string, url?: string) => {
    if (!url) return;
    
    if (type === 'email') {
      window.location.href = `mailto:${url}`;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header id="home" className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <LinkedInCard className="text-center">
          <div className="relative">
            {/* 背景装饰 */}
            <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg -mx-6 -mt-6 mb-16"></div>

            {/* 头像 */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 linkedin-avatar bg-white p-1">
                <Image
                  src={avatarSrc}
                  alt={name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl sm:text-4xl font-bold linkedin-text-primary mb-2">
              {name}
            </h1>
            <p className="text-xl linkedin-text-secondary mb-4">
              {position}
            </p>
            <p className="linkedin-text-secondary max-w-2xl mx-auto mb-6">
              {description}
            </p>

            {/* 联系方式 */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 linkedin-text-secondary text-sm">
                <Mail className="w-4 h-4" />
                {contact.email}
              </div>
              <div className="flex items-center gap-2 linkedin-text-secondary text-sm">
                <Phone className="w-4 h-4" />
                {contact.phone}
              </div>
              <div className="flex items-center gap-2 linkedin-text-secondary text-sm">
                <MapPin className="w-4 h-4" />
                {contact.location}
              </div>
            </div>

            {/* 社交链接 */}
            <div className="flex justify-center gap-4">
              {socialLinks.github && (
                <button 
                  onClick={() => handleSocialClick('github', socialLinks.github)}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </button>
              )}
              {socialLinks.linkedin && (
                <button 
                  onClick={() => handleSocialClick('linkedin', socialLinks.linkedin)}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </button>
              )}
              {socialLinks.email && (
                <button 
                  onClick={() => handleSocialClick('email', socialLinks.email)}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-50 transition-colors"
                  aria-label="邮箱"
                >
                  <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </button>
              )}
            </div>
          </div>
        </LinkedInCard>
      </div>
    </header>
  );
};

export default PersonalInfo;
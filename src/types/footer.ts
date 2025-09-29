/**
 * 页脚数据类型定义
 */
export interface FooterLink {
  name: string;
  href: string;
  icon: string; // 图标名称，将在组件中映射到实际的React组件
}

export interface FooterData {
  footerLinks: FooterLink[];
  socialLinks: FooterLink[];
  contactLinks: FooterLink[];
  copyright: {
    text: string;
    links: {
      name: string;
      href: string;
    }[];
  };
  footerMessage: string;
}

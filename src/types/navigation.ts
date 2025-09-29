/**
 * 导航数据类型定义
 */
export interface NavigationLink {
  name: string;
  href: string;
  label: string;
}

export interface NavigationData {
  brand: {
    name: string;
    icon: string;
  };
  navigationLinks: NavigationLink[];
  mobileNavigationLinks: NavigationLink[];
}

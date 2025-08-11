import React from "react";

interface BorderBoxProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "thick"
    | "section"
    | "skill"
    | "email"
    | "phone"
    | "location";
  className?: string;
  padding?: "none" | "small" | "medium" | "large";
  margin?: "none" | "small" | "medium" | "large";
}

/**
 * 边框容器组件
 * 提供统一的边框样式，支持多种变体和自定义样式
 */
const BorderBox: React.FC<BorderBoxProps> = ({
  children,
  variant = "default",
  className = "",
  padding = "medium",
  margin = "none",
}) => {
  // 边框变体样式
  const variantStyles = {
    default: "border border-gray-300",
    thick: "border-2 border-gray-400",
    section: "border border-gray-300",
    skill: "border border-gray-300",
    email: "border border-gray-400 hover:border-gray-600 transition-colors",
    phone: "border border-gray-400 hover:border-gray-600 transition-colors",
    location: "border border-gray-400 hover:border-gray-600 transition-colors",
  };

  // 内边距样式
  const paddingStyles = {
    none: "",
    small: "p-2",
    medium: "p-4",
    large: "p-8",
  };

  // 外边距样式
  const marginStyles = {
    none: "",
    small: "m-2",
    medium: "m-4",
    large: "m-8",
  };

  const combinedClassName = [
    variantStyles[variant],
    paddingStyles[padding],
    marginStyles[margin],
    className,
    "rounded-lg p-1",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={combinedClassName}
      onClick={() => {
        if (variant === "email") {
          window.open("mailto:jinzhepro@qq.com");
        } else if (variant === "phone") {
          window.open("tel:17669675323");
        } else if (variant === "location") {
          window.open(
            "https://nominatim.openstreetmap.org/ui/search.html?city=%E9%9D%92%E5%B2%9B"
          );
        }
      }}
    >
      {children}
    </div>
  );
};

export default BorderBox;

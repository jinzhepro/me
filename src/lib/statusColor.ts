/**
 * 状态颜色工具函数
 * 提供通用的状态-颜色映射
 */

/**
 * 获取状态对应的颜色样式
 */
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    "当前职位": "bg-green-100 text-green-800",
    "已离职": "bg-gray-100 text-gray-800",
  };
  return colors[status] ?? "bg-gray-100 text-gray-800";
}

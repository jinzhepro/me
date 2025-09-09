import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          页面未找到
        </h2>
        <p className="text-gray-500 mb-8">抱歉，您访问的页面不存在</p>
        <Link
          href="/"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-block"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}

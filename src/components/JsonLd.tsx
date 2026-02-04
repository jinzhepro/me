export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "张晋哲",
    jobTitle: "全栈开发工程师",
    description: "专业的全栈开发工程师，拥有丰富的React和Node.js开发经验",
    url: "https://你的域名.com",
    email: "jinzhepro@qq.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "青岛",
      addressCountry: "CN",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Vue.js",
      "全栈开发",
      "前端工程",
    ],
    worksFor: {
      "@type": "Organization",
      name: "经控集团青云通公司",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "大学名称",
    },
    sameAs: ["https://github.com/jinzhepro", "https://jinzhepro.github.io/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "페이스펄",
    alternateName: "Faithful",
    url: "https://faithful.co.kr",
    logo: "https://faithful.co.kr/faithful-logo.svg",
    description:
      "최첨단 인공지능 기술과 창의적인 개발 솔루션으로 귀사의 브랜드 가치를 높이고 비즈니스 성장을 가속화합니다.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "인천",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-32-324-9633",
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean"],
    },
    sameAs: [
      // 소셜 미디어 링크가 있다면 여기에 추가
      // "https://www.facebook.com/faithful",
      // "https://www.linkedin.com/company/faithful",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "페이스펄 - Faithful",
    url: "https://faithful.co.kr",
    description:
      "최첨단 인공지능 기술과 창의적인 개발 솔루션으로 귀사의 브랜드 가치를 높이고 비즈니스 성장을 가속화합니다.",
    inLanguage: "ko-KR",
    publisher: {
      "@type": "Organization",
      name: "페이스펄",
      alternateName: "Faithful",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "페이스펄",
    alternateName: "Faithful",
    image: "https://faithful.co.kr/faithful-logo.svg",
    "@id": "https://faithful.co.kr",
    url: "https://faithful.co.kr",
    telephone: "+82-32-324-9633",
    address: {
      "@type": "PostalAddress",
      addressLocality: "인천",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4563,
      longitude: 126.7052,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      // 소셜 미디어 링크가 있다면 여기에 추가
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 정적 배포 설정
  output: 'export',

  // 이미지 최적화 비활성화 (정적 내보내기에서는 필수)
  images: {
    unoptimized: true,
  },

  // 트레일링 슬래시 추가 (GitHub Pages 권장)
  trailingSlash: true,

  // 압축 활성화
  compress: true,

  // 리액트 Strict Mode
  reactStrictMode: true,

  // 헤더에서 Next.js 버전 제거 (보안)
  poweredByHeader: false,
};

export default nextConfig;

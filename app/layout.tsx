import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "페이스펄 - Faithful | AI 기반 웹 개발 솔루션",
    template: "%s | 페이스펄 Faithful",
  },
  description: "최첨단 인공지능 기술과 창의적인 개발 솔루션으로 귀사의 브랜드 가치를 높이고 비즈니스 성장을 가속화합니다. AI 웹 개발, 기업 솔루션, 브랜드 구축 전문.",
  keywords: [
    "페이스펄",
    "Faithful",
    "인공지능",
    "AI",
    "웹 개발",
    "기업 솔루션",
    "브랜드 가치",
    "비즈니스 성장",
    "AI 개발",
    "웹 디자인",
    "기업 홈페이지",
    "인천",
    "한국",
  ],
  authors: [{ name: "Faithful" }],
  creator: "Faithful",
  publisher: "Faithful",
  alternates: {
    canonical: "https://faithful.co.kr",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://faithful.co.kr",
    siteName: "페이스펄 - Faithful",
    title: "페이스펄 - Faithful | AI 기반 웹 개발 솔루션",
    description: "최첨단 인공지능 기술과 창의적인 개발 솔루션으로 귀사의 브랜드 가치를 높이고 비즈니스 성장을 가속화합니다.",
    images: [
      {
        url: "https://faithful.co.kr/og-image.png",
        width: 1200,
        height: 630,
        alt: "페이스펄 - Faithful",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "페이스펄 - Faithful | AI 기반 웹 개발 솔루션",
    description: "최첨단 인공지능 기술과 창의적인 개발 솔루션으로 귀사의 브랜드 가치를 높이고 비즈니스 성장을 가속화합니다.",
    images: ["https://faithful.co.kr/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here", // Google Search Console에서 받은 코드로 교체 필요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}

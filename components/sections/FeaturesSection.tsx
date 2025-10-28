"use client"

import { Button } from "@/components/ui/button"
import { Code, Cloud, Brain, Zap, Shield, Users, ArrowRight, Check } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const features = [
  {
    icon: Zap,
    title: "빠른 구축",
    description: "전문가와 함께 지정된 시간 내에 프로젝트를 완료합니다",
    highlights: ["신속한 개발 프로세스", "애자일 방법론 적용", "실시간 진행상황 공유"],
    gradient: "from-[oklch(0.65_0.25_120)] to-[oklch(0.55_0.30_140)]",
    iconBg: "bg-gradient-to-br from-[oklch(0.65_0.25_120)] to-[oklch(0.55_0.30_140)]"
  },
  {
    icon: Code,
    title: "성숙한 컨셉",
    description: "각 공간의 콘텐츠와 가구 배치까지 준비된 설계",
    highlights: ["맞춤형 솔루션 설계", "확장 가능한 아키텍처", "미래 지향적 기술 스택"],
    gradient: "from-[oklch(0.55_0.25_235)] to-[oklch(0.60_0.20_280)]",
    iconBg: "bg-gradient-to-br from-[oklch(0.55_0.25_235)] to-[oklch(0.60_0.20_280)]"
  },
  {
    icon: Brain,
    title: "미래형 빌딩",
    description: "고객을 위해 준비한 미래지향적이고 현대적인 모델",
    highlights: ["AI/ML 통합", "자동화 프로세스", "스마트 분석 도구"],
    gradient: "from-[oklch(0.70_0.15_270)] to-[oklch(0.80_0.12_320)]",
    iconBg: "bg-gradient-to-br from-[oklch(0.70_0.15_270)] to-[oklch(0.80_0.12_320)]"
  }
]

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.98_0.01_250)] to-background" />
      
      {/* 장식용 도형들 */}
      <div className="absolute top-20 left-10 w-64 h-64 gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 섹션 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            주식회사 페이스펄 이 제공하는
            <span className="block text-gradient mt-2">특별한 기능들</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            우리는 항상 서비스를 이용하는 고객의 편안함을 제공하기 위해 최선을 다합니다
          </p>
        </div>

        {/* 메인 기능 카드 - Creatfix 스타일 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 카드 배경 글로우 효과 */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* 메인 카드 */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full hover-lift glass">
                  {/* 아이콘 */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* 제목과 설명 */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* 하이라이트 리스트 */}
                  <ul className="space-y-3 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${feature.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* 더 보기 버튼 */}
                  <Button 
                    variant="ghost"
                    className="group/btn p-0 h-auto font-semibold hover:bg-transparent"
                  >
                    <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      더 알아보기
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* 하단 CTA 섹션 */}
        <div className="text-center py-12 px-8 rounded-3xl bg-gradient-to-r from-[oklch(0.55_0.25_235)] to-[oklch(0.65_0.20_280)] relative overflow-hidden">
          {/* 장식용 패턴 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 border-8 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 border-8 border-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              프로젝트를 시작할 준비가 되셨나요?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              전문가 팀과 함께 귀사의 비즈니스를 한 단계 더 성장시켜보세요
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[oklch(0.55_0.25_235)] hover:bg-white/90 font-semibold px-8"
              >
                <Link href="#contact">
                  프로젝트 문의신청
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 hover:bg-white/20 font-semibold px-8"
              >
                <Link href="#projects">
                  포트폴리오 보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
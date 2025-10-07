"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 그라데이션 메시 배경 */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      {/* 메인 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.99_0.01_250)] via-[oklch(0.97_0.02_235)] to-[oklch(0.95_0.04_280)]" />
      
      {/* 3D 기하학적 요소들 - 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* 떠다니는 작은 도형들 */}
          <div 
            className="absolute top-[15%] left-[10%] w-20 h-20 animate-float opacity-20"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          >
            <div className="w-full h-full gradient-secondary rounded-2xl rotate-45 blur-sm" />
          </div>
          
          <div 
            className="absolute bottom-[20%] left-[5%] w-24 h-24 animate-float animation-delay-400 opacity-15"
            style={{ transform: `translate(${mousePosition.x * 0.4}px, ${-mousePosition.y * 0.4}px)` }}
          >
            <div className="w-full h-full gradient-accent rounded-full blur-sm" />
          </div>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20 md:pt-36 md:pb-32">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* 왼쪽 텍스트 콘텐츠 */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in-up">
              <span className="text-foreground">Boosts The</span>
              <span className="block text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                Credibility
              </span>
              <span className="text-foreground">of Your Brand</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl animate-fade-in-up animation-delay-200">
              최첨단 인공지능 기술과 창의적인 개발 솔루션으로 귀사의 브랜드  
              가치를 높이고 비즈니스 성장을 가속화합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button 
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 font-semibold px-8 py-6 text-lg shadow-lg hover-lift"
              >
                <Link href="#contact">
                  프로젝트 문의하기
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 font-semibold px-8 py-6 text-lg hover-lift"
              >
                <Link href="#services">
                  더 알아보기
                </Link>
              </Button>
            </div>
          </div>

          {/* 오른쪽 3D 비주얼 - Creatfix 스타일 건축물 */}
          <div className="flex-1 relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] animate-fade-in-up animation-delay-600 mt-8 md:mt-0">
            <div 
              className="relative w-full h-full preserve-3d"
              style={{ 
                transform: isMobile 
                  ? 'perspective(800px) rotateY(0deg) rotateX(0deg)'
                  : `perspective(1000px) rotateY(${-mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * 0.5}deg)` 
              }}
            >
              {/* 3D 건축물 구조 - 레이어드 패널 */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* 중앙 타워 */}
                <div className="relative">
                  {/* 메인 패널들 */}
                  {[...Array(isMobile ? 4 : 7)].map((_, i) => {
                    const scale = 1 - i * 0.08
                    const zOffset = i * (isMobile ? 20 : 40)
                    const opacity = 0.9 - i * 0.1
                    return (
                      <div
                        key={`main-${i}`}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          width: `${(isMobile ? 120 : 200) * scale}px`,
                          height: `${(isMobile ? 240 : 400) * scale}px`,
                          transform: `translateZ(${zOffset}px)`,
                          opacity,
                        }}
                      >
                        <div 
                          className="w-full h-full rounded-lg"
                          style={{
                            background: `linear-gradient(135deg, 
                              oklch(${0.75 - i * 0.05} ${0.20 - i * 0.02} ${235 + i * 10} / ${opacity}), 
                              oklch(${0.65 - i * 0.03} ${0.18 - i * 0.02} ${250 + i * 8} / ${opacity}))`,
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                          }}
                        />
                      </div>
                    )
                  })}
                  
                  {/* 사이드 날개 패널들 - 왼쪽 */}
                  {[...Array(isMobile ? 2 : 5)].map((_, i) => {
                    const scale = 0.7 - i * 0.1
                    const xOffset = (isMobile ? -30 : -60) - i * (isMobile ? 15 : 30)
                    const zOffset = i * (isMobile ? 10 : 25)
                    const rotation = (isMobile ? -8 : -15) - i * (isMobile ? 2 : 5)
                    const opacity = 0.7 - i * 0.1
                    return (
                      <div
                        key={`left-${i}`}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          width: `${(isMobile ? 80 : 150) * scale}px`,
                          height: `${(isMobile ? 160 : 300) * scale}px`,
                          transform: `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotation}deg)`,
                          opacity,
                        }}
                      >
                        <div 
                          className="w-full h-full rounded-lg"
                          style={{
                            background: `linear-gradient(135deg, 
                              oklch(${0.70 - i * 0.05} ${0.15 - i * 0.02} ${220 + i * 10} / ${opacity}), 
                              oklch(${0.60 - i * 0.03} ${0.20 - i * 0.02} ${240 + i * 8} / ${opacity}))`,
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                          }}
                        />
                      </div>
                    )
                  })}
                  
                  {/* 사이드 날개 패널들 - 오른쪽 */}
                  {[...Array(isMobile ? 2 : 5)].map((_, i) => {
                    const scale = 0.7 - i * 0.1
                    const xOffset = (isMobile ? 30 : 60) + i * (isMobile ? 15 : 30)
                    const zOffset = i * (isMobile ? 10 : 25)
                    const rotation = (isMobile ? 8 : 15) + i * (isMobile ? 2 : 5)
                    const opacity = 0.7 - i * 0.1
                    return (
                      <div
                        key={`right-${i}`}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          width: `${(isMobile ? 80 : 150) * scale}px`,
                          height: `${(isMobile ? 160 : 300) * scale}px`,
                          transform: `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotation}deg)`,
                          opacity,
                        }}
                      >
                        <div 
                          className="w-full h-full rounded-lg"
                          style={{
                            background: `linear-gradient(135deg, 
                              oklch(${0.65 - i * 0.05} ${0.18 - i * 0.02} ${260 + i * 10} / ${opacity}), 
                              oklch(${0.75 - i * 0.03} ${0.15 - i * 0.02} ${280 + i * 8} / ${opacity}))`,
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-muted-foreground"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  )
}
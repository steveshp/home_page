"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* 3D 애니메이션 배경 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-3d-container">
          {/* 3D 큐브 그리드 */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`cube cube-${i + 1}`}>
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            혁신적인 소프트웨어 솔루션으로
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              비즈니스를 성장시킵니다
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            에스브이소프트는 최신 기술과 창의적인 아이디어로 
            고객의 디지털 혁신을 선도하는 소프트웨어 개발 전문 기업입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button 
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
            >
              <Link href="#contact">
                무료 상담 신청하기
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
            >
              <Link href="#services">
                서비스 둘러보기
              </Link>
            </Button>
          </div>

          {/* 통계 */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">150+</div>
              <div className="text-blue-200 mt-2">완료된 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-blue-200 mt-2">만족한 고객사</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
              <div className="text-blue-200 mt-2">년 경력</div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
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
        .hero-3d-container {
          position: absolute;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }

        .cube {
          position: absolute;
          width: 100px;
          height: 100px;
          transform-style: preserve-3d;
          animation: rotate 20s infinite linear;
        }

        .cube-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .cube-2 {
          top: 20%;
          right: 15%;
          animation-delay: 3s;
          animation-duration: 25s;
        }

        .cube-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 5s;
          animation-duration: 22s;
        }

        .cube-4 {
          bottom: 30%;
          right: 10%;
          animation-delay: 2s;
          animation-duration: 18s;
        }

        .cube-5 {
          top: 50%;
          left: 5%;
          animation-delay: 4s;
          animation-duration: 24s;
        }

        .cube-6 {
          top: 40%;
          right: 25%;
          animation-delay: 1s;
          animation-duration: 21s;
        }

        .cube-face {
          position: absolute;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .front {
          transform: translateZ(50px);
        }

        .back {
          transform: rotateY(180deg) translateZ(50px);
        }

        .right {
          transform: rotateY(90deg) translateZ(50px);
        }

        .left {
          transform: rotateY(-90deg) translateZ(50px);
        }

        .top {
          transform: rotateX(90deg) translateZ(50px);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(50px);
        }

        @keyframes rotate {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
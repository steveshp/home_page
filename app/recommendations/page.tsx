import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "추천 서비스",
  description: "페이스펄이 추천하는 최고의 서비스와 솔루션을 만나보세요. AI 기반 웹 개발부터 맞춤형 기업 솔루션까지 다양한 추천을 확인하실 수 있습니다.",
  keywords: ["추천", "서비스 추천", "솔루션", "AI 웹 개발", "기업 솔루션", "페이스펄 추천"],
  openGraph: {
    title: "추천 서비스 | 페이스펄 - Faithful",
    description: "페이스펄이 추천하는 최고의 서비스와 솔루션을 만나보세요.",
    url: "https://faithful.co.kr/recommendations",
  },
}

const recommendations = [
  {
    id: 1,
    category: "인기",
    title: "AI 기반 웹 개발 솔루션",
    description: "최신 인공지능 기술을 활용한 맞춤형 웹 개발 서비스입니다. 빠른 개발 속도와 높은 품질을 동시에 제공합니다.",
    features: ["자동화된 개발 프로세스", "실시간 품질 검증", "확장 가능한 아키텍처"],
    badge: "Best Seller",
    icon: Star,
  },
  {
    id: 2,
    category: "추천",
    title: "기업 맞춤형 솔루션",
    description: "귀사의 비즈니스 요구사항에 딱 맞는 커스텀 솔루션을 제공합니다. 효율적인 업무 프로세스 구축을 지원합니다.",
    features: ["맞춤형 설계", "통합 관리 시스템", "24/7 기술 지원"],
    badge: "Recommended",
    icon: TrendingUp,
  },
  {
    id: 3,
    category: "프리미엄",
    title: "브랜드 가치 향상 패키지",
    description: "웹사이트부터 브랜딩까지 종합적인 디지털 전략을 수립하여 브랜드 가치를 극대화합니다.",
    features: ["브랜드 컨설팅", "UI/UX 디자인", "마케팅 전략"],
    badge: "Premium",
    icon: Award,
  },
]

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 -z-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10 animate-float" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 text-sm px-4 py-1">Recommendations</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                페이스펄이 추천하는
                <br />
                <span className="gradient-primary bg-clip-text text-transparent">
                  최고의 솔루션
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                귀사의 성공을 위해 엄선된 서비스와 솔루션을 만나보세요.
                <br className="hidden lg:block" />
                AI 기반 웹 개발부터 맞춤형 기업 솔루션까지 다양한 추천을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {recommendations.map((item, index) => (
                  <Card
                    key={item.id}
                    className="glass hover-lift group cursor-pointer transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                        variant="outline"
                        asChild
                      >
                        <Link href="#contact">
                          자세히 보기
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                맞춤형 추천이 필요하신가요?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                귀사의 비즈니스 목표와 요구사항에 딱 맞는 솔루션을 추천해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="#contact">
                    상담 신청하기
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/">
                    홈으로 돌아가기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

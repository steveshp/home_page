import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Cloud, Brain, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "맞춤형 소프트웨어 개발",
    description: "귀사의 비즈니스 요구사항에 완벽하게 맞춘 소프트웨어 솔루션을 개발합니다. 웹, 모바일, 데스크톱 애플리케이션까지 모든 플랫폼을 지원합니다.",
    highlights: ["웹/모바일 앱 개발", "엔터프라이즈 솔루션", "API 통합"],
    color: "blue"
  },
  {
    icon: Cloud,
    title: "클라우드 네이티브 솔루션",
    description: "확장 가능하고 안정적인 클라우드 인프라를 구축합니다. AWS, Azure, GCP 등 주요 클라우드 플랫폼에서 최적화된 서비스를 제공합니다.",
    highlights: ["클라우드 마이그레이션", "컨테이너화 & 오케스트레이션", "DevOps 자동화"],
    color: "cyan"
  },
  {
    icon: Brain,
    title: "AI/ML 통합 서비스",
    description: "최신 인공지능과 머신러닝 기술을 활용하여 비즈니스 프로세스를 자동화하고 인사이트를 발견합니다.",
    highlights: ["예측 분석", "자연어 처리", "컴퓨터 비전"],
    color: "purple"
  }
]

const additionalServices = [
  {
    icon: Zap,
    title: "성능 최적화",
    description: "애플리케이션 속도와 효율성을 극대화",
  },
  {
    icon: Shield,
    title: "보안 강화",
    description: "엔터프라이즈급 보안 솔루션 구현",
  },
  {
    icon: Users,
    title: "기술 컨설팅",
    description: "디지털 전환을 위한 전략적 조언",
  }
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            우리가 제공하는 서비스
          </h2>
          <p className="text-lg text-gray-600">
            최고의 기술력과 경험을 바탕으로 고객의 성공을 위한 
            토탈 IT 솔루션을 제공합니다
          </p>
        </div>

        {/* 메인 기능 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600`}></div>
                
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg 
                          className={`w-5 h-5 text-${feature.color}-500 mr-2 mt-0.5 flex-shrink-0`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-6"
                    variant="outline"
                  >
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 추가 서비스 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            모든 서비스 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
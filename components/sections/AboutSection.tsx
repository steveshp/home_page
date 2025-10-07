import { Button } from "@/components/ui/button"
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const values = [
  {
    icon: Target,
    title: "고객 중심",
    description: "고객의 성공이 곧 우리의 성공입니다"
  },
  {
    icon: Lightbulb,
    title: "혁신 추구",
    description: "끊임없는 혁신으로 미래를 선도합니다"
  },
  {
    icon: Users,
    title: "협력과 소통",
    description: "함께 성장하는 파트너십을 추구합니다"
  },
  {
    icon: Award,
    title: "품질 우선",
    description: "최고의 품질로 신뢰를 쌓아갑니다"
  }
]

const achievements = [
  { number: "10+", label: "년 경력" },
  { number: "150+", label: "완료 프로젝트" },
  { number: "50+", label: "고객사" },
  { number: "98%", label: "고객 만족도" }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* 회사 소개 */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                페이스펄은
                <span className="block mt-2 text-blue-600">
                  기술로 미래를 만듭니다
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                2014년 설립 이래, 페이스펄은 혁신적인 AI 기술과 소프트웨어 솔루션으로
                수많은 기업의 디지털 전환을 성공적으로 이끌어왔습니다.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                우리는 단순한 개발 회사가 아닌, 고객의 비즈니스 성장을 함께하는 
                기술 파트너입니다. 최신 기술과 풍부한 경험을 바탕으로 
                고객 맞춤형 솔루션을 제공합니다.
              </p>
              
              {/* 체크리스트 */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ISO 9001 품질경영시스템 인증</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">정보통신공사업 등록 기업</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">벤처기업 인증</span>
                </li>
              </ul>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                회사 소개서 다운로드
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* 이미지 또는 통계 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                        {item.number}
                      </div>
                      <div className="text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 가치 */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            우리의 핵심 가치
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CEO 메시지 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* CEO 이미지 플레이스홀더 */}
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500">CEO</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CEO 메시지
                </h3>
                <blockquote className="text-gray-600 italic mb-6">
                  "페이스펄은 고객의 비즈니스 성공을 위해
                  최선을 다하는 기술 파트너입니다.
                  우리는 단순히 소프트웨어를 개발하는 것이 아니라,
                  고객의 비전을 현실로 만드는 솔루션을 제공합니다.
                  <br /><br />
                  앞으로도 끊임없는 혁신과 도전으로
                  고객과 함께 성장하는 기업이 되겠습니다."
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">김대표</div>
                  <div className="text-gray-500">대표이사</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
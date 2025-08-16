import Link from "next/link"
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github 
} from "lucide-react"

const footerLinks = {
  company: {
    title: "회사",
    links: [
      { href: "#about", label: "회사소개" },
      { href: "#team", label: "팀 소개" },
      { href: "#careers", label: "채용정보" },
      { href: "#news", label: "뉴스" },
    ]
  },
  services: {
    title: "서비스",
    links: [
      { href: "#web", label: "웹 개발" },
      { href: "#mobile", label: "모바일 개발" },
      { href: "#cloud", label: "클라우드 서비스" },
      { href: "#ai", label: "AI 솔루션" },
    ]
  },
  resources: {
    title: "리소스",
    links: [
      { href: "#blog", label: "블로그" },
      { href: "#docs", label: "문서" },
      { href: "#case-studies", label: "사례 연구" },
      { href: "#faq", label: "FAQ" },
    ]
  },
  legal: {
    title: "법적 고지",
    links: [
      { href: "#privacy", label: "개인정보처리방침" },
      { href: "#terms", label: "이용약관" },
      { href: "#cookies", label: "쿠키 정책" },
    ]
  }
}

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* 메인 푸터 */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SV</span>
              </div>
              <span className="text-xl font-bold text-white">
                에스브이소프트
              </span>
            </div>
            <p className="text-sm mb-4">
              혁신적인 소프트웨어 솔루션으로 
              비즈니스의 디지털 전환을 선도합니다.
            </p>
            
            {/* 소셜 링크 */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* 링크 섹션들 */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 뉴스레터 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold mb-2">
                뉴스레터 구독
              </h3>
              <p className="text-sm">
                최신 기술 트렌드와 에스브이소프트의 소식을 받아보세요.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                구독하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 카피라이트 */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              © 2024 에스브이소프트. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <span>사업자등록번호: 123-45-67890</span>
              <span>대표: 김대표</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
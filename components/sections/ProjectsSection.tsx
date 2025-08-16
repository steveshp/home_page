"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "이커머스 플랫폼",
    category: "전자상거래",
    description: "대규모 트래픽을 처리하는 차세대 온라인 쇼핑몰 구축",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "AWS", "MongoDB"],
    client: "리테일코프",
    duration: "6개월",
    results: "매출 300% 증가, 사용자 경험 개선"
  },
  {
    id: 2,
    title: "ERP 시스템",
    category: "엔터프라이즈",
    description: "클라우드 기반 통합 업무 관리 시스템 개발",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Spring Boot", "PostgreSQL", "Docker"],
    client: "제조산업(주)",
    duration: "8개월",
    results: "업무 효율 40% 향상, 비용 절감"
  },
  {
    id: 3,
    title: "모바일 뱅킹 앱",
    category: "핀테크",
    description: "사용자 친화적인 차세대 모바일 금융 서비스",
    image: "/api/placeholder/600/400",
    tags: ["React Native", "Python", "AI/ML", "Blockchain"],
    client: "디지털뱅크",
    duration: "10개월",
    results: "사용자 200만명 돌파, 앱스토어 평점 4.8"
  },
  {
    id: 4,
    title: "AI 고객 서비스",
    category: "인공지능",
    description: "자연어 처리 기반 스마트 고객 상담 시스템",
    image: "/api/placeholder/600/400",
    tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
    client: "서비스센터(주)",
    duration: "4개월",
    results: "상담 처리 속도 70% 개선"
  },
  {
    id: 5,
    title: "IoT 스마트 팩토리",
    category: "IoT",
    description: "실시간 모니터링 및 자동화 시스템 구축",
    image: "/api/placeholder/600/400",
    tags: ["IoT", "React", "Node.js", "TimeSeries DB"],
    client: "스마트제조",
    duration: "7개월",
    results: "생산성 35% 증가, 불량률 80% 감소"
  },
  {
    id: 6,
    title: "헬스케어 플랫폼",
    category: "의료",
    description: "원격 진료 및 건강 관리 통합 플랫폼",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "GraphQL", "WebRTC", "HIPAA"],
    client: "헬스테크",
    duration: "9개월",
    results: "환자 만족도 95%, 의료 접근성 향상"
  }
]

const categories = ["전체", "전자상거래", "엔터프라이즈", "핀테크", "인공지능", "IoT", "의료"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "전체" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            프로젝트 포트폴리오
          </h2>
          <p className="text-lg text-gray-600">
            다양한 산업 분야에서 성공적으로 완료한 프로젝트들을 확인해보세요
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* 이미지 영역 */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                      {project.category.substring(0, 2)}
                    </div>
                  </div>
                </div>
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300">
                    <Button 
                      variant="outline" 
                      className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-gray-900"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      자세히 보기
                    </Button>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{project.duration}</span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* 태그 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 프로젝트 정보 */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">고객사</span>
                    <span className="font-medium text-gray-900">{project.client}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="text-gray-500 mb-1">주요 성과</div>
                    <div className="text-gray-900 font-medium">{project.results}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="group"
          >
            더 많은 프로젝트 보기
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
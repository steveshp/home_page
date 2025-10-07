# Faithful Corporate Website

모던한 디자인과 3D 비주얼을 특징으로 하는 Faithful 기업 웹사이트입니다.

## 🎨 주요 특징

- **3D 비주얼 효과**: 마우스 인터랙션이 가능한 레이어드 3D 패널
- **글래스모피즘 디자인**: 투명도와 블러 효과를 활용한 모던한 UI
- **그라데이션 색상 시스템**: OKLCH 색상 모델 기반의 다채로운 그라데이션
- **반응형 디자인**: 모바일 퍼스트 접근 방식
- **부드러운 애니메이션**: Fade-in, Float, Hover 효과

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone [repository-url]
cd home_page

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

## 🛠 기술 스택

- **Framework**: [Next.js 15.4.6](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript
- **Animations**: CSS Animations + Tailwind

## 📁 프로젝트 구조

```
home_page/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── globals.css        # 전역 스타일 및 색상 시스템
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트
│   ├── layout/            # Header, Footer
│   └── sections/          # 페이지 섹션 컴포넌트
├── store/                 # Zustand 상태 관리
├── public/                # 정적 자산 (로고, 이미지)
└── lib/                   # 유틸리티 함수
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: 블루 그라데이션 (`oklch(0.55 0.25 235)`)
- **Secondary**: 퍼플 톤 (`oklch(0.92 0.04 280)`)
- **Accent**: 코랄/오렌지 (`oklch(0.75 0.18 30)`)

### 유틸리티 클래스
- `.gradient-primary`: 메인 그라데이션
- `.gradient-secondary`: 보조 그라데이션
- `.glass`: 글래스모피즘 효과
- `.hover-lift`: 호버 시 상승 효과
- `.animate-float`: 부유 애니메이션

## 📝 주요 섹션

1. **Hero Section**: 3D 건축물 비주얼과 메인 메시지
2. **Features Section**: 서비스 소개 카드
3. **Projects Section**: 포트폴리오 갤러리
4. **About Section**: 회사 소개
5. **Contact Section**: 문의 폼

## 🔧 개발 명령어

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버
npm start

# 린트 검사
npm run lint
```

## 📦 주요 의존성

- `next`: 15.4.6
- `react`: 19.1.0
- `tailwindcss`: 4.x
- `@radix-ui/react-navigation-menu`: 네비게이션 메뉴
- `lucide-react`: 아이콘 라이브러리
- `zustand`: 상태 관리

## 🌐 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 📄 라이선스

Private

---

Built with ❤️ using Next.js and Tailwind CSS
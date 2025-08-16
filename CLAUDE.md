# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 corporate website for SV Soft (에스브이소프트), featuring a modern design inspired by Creatfix with 3D visuals, glassmorphism effects, and gradient color schemes.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🌏 언어 설정
**중요**: 모든 답변은 반드시 한국어로 작성해야 합니다. 기술적 설명, 코드 주석, 디버깅 정보, 사고 과정, 분석 내용 등 모든 텍스트 출력을 한글로 표기하세요. 영어 단어는 필요한 경우에만 괄호 안에 명기하세요.

## 🔄 자동 Git 커밋 규칙
**중요**: 코드 수정 후 자동으로 Git 커밋 및 푸시를 수행합니다.

### 자동 커밋 트리거
- 코드 파일 수정 후 (*.c , *.cpp, *.h, *.dart 파일들)
- 설정 파일 변경 후 (pubspec.yaml, analysis_options.yaml, makefile 등)
- 문서 업데이트 후 (*.md 파일)

### 커밋 메시지 형식
```
[변경사항 요약]

- 구체적인 변경 내용 1
- 구체적인 변경 내용 2
- 변경 이유 및 목적
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.6 with App Router
- **UI Components**: shadcn/ui (New York style)
- **Styling**: Tailwind CSS v4 with CSS variables
- **State Management**: Zustand
- **Icons**: Lucide React
- **Language**: TypeScript

### Project Structure
- `/app` - Next.js app router pages and global styles
- `/components/ui` - shadcn/ui components (Button, Card, Navigation Menu, Badge)
- `/components/layout` - Layout components (Header, Footer)
- `/components/sections` - Page sections (HeroSection, FeaturesSection, ProjectsSection, AboutSection, ContactSection)
- `/store` - Zustand store for global state (useAppStore)
- `/public` - Static assets including logo.png

### Key Design System

#### Color System (OKLCH)
The project uses a custom color system defined in `app/globals.css`:
- Primary: Blue gradients `oklch(0.55 0.25 235)`
- Secondary: Purple tones `oklch(0.92 0.04 280)`
- Accent: Coral/Orange `oklch(0.75 0.18 30)`
- Gradient utilities: `.gradient-primary`, `.gradient-secondary`, `.gradient-accent`
- Glassmorphism: `.glass` class with backdrop-filter

#### Component Patterns
- All sections use "use client" directive
- Buttons use `asChild` prop with Link components for navigation
- Animations: `.animate-fade-in-up`, `.animate-float`, `.hover-lift`
- 3D effects in HeroSection using inline styles with transform and perspective

### Important Implementation Details

1. **Header Navigation**: Uses Zustand store for scroll state and mobile menu toggle
2. **3D Visuals**: HeroSection contains mouse-interactive 3D layered panels
3. **Responsive Design**: Mobile-first approach with lg: breakpoints
4. **Internal Navigation**: Hash links (#services, #projects, #about, #contact)
5. **Logo**: Uses `/public/logo.png` in Header component

### shadcn/ui Component Usage

When adding new shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

Components are configured in `components.json` with:
- Style: new-york
- Base color: neutral  
- CSS variables enabled
- Aliases: @/components, @/lib/utils
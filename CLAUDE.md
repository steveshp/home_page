# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 corporate website for SV Soft (에스브이소프트), featuring a modern design with 3D visuals, glassmorphism effects, and gradient color schemes.

## Development Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run lint         # Run ESLint for code quality

# Production
npm run build        # Create production build
npm start            # Start production server

# Component Management
npx shadcn@latest add [component-name]  # Add new shadcn/ui component
```

## Architecture

### Core Dependencies & Versions
- **Framework**: Next.js 15.4.6 with App Router
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Tailwind CSS**: v4 with PostCSS
- **UI Components**: shadcn/ui (New York style)
- **State Management**: Zustand 5.0.7 with persist middleware
- **Icons**: Lucide React

### Application Architecture

#### State Management (Zustand)
The app uses a centralized store (`/store/useAppStore.ts`) with:
- **UI State**: `isMobileMenuOpen`, `isScrolled`
- **Theme**: `theme` (light/dark) - persisted to localStorage as 'sv-soft-storage'
- **Actions**: `toggleMobileMenu()`, `closeMobileMenu()`, `setScrolled()`, `toggleTheme()`

#### Routing & Navigation
- Single-page application with hash-based navigation
- Navigation items: Home (`/`), Services (`#services`), Projects (`#projects`), About (`#about`), Contact (`#contact`)
- Header component handles scroll detection and mobile menu state via Zustand

#### Component Architecture
- All section components use `"use client"` directive for client-side features
- Components follow composition pattern with shadcn/ui primitives
- Navigation uses Radix UI's NavigationMenu with custom styling

### Design System

#### Color System (OKLCH Color Space)
Custom CSS variables in `app/globals.css`:
```css
--primary: oklch(0.55 0.25 235)      /* Vibrant blue */
--secondary: oklch(0.92 0.04 280)    /* Soft purple */
--accent: oklch(0.75 0.18 30)        /* Coral/orange */
--background: oklch(0.99 0.01 250)   /* Light blue-gray */
--foreground: oklch(0.15 0.02 240)   /* Dark navy text */
```

Additional gradient colors (`--gradient-1/2/3`) and chart colors (`--chart-1` through `--chart-5`)

#### Key CSS Utilities
- **Glassmorphism**: `.glass` class (backdrop-blur effect)
- **Gradients**: `.gradient-primary`, `.gradient-secondary`, `.gradient-accent`
- **Animations**: `.animate-fade-in-up`, `.animate-float`, `.hover-lift`
- **3D Effects**: Transform and perspective properties in HeroSection

### TypeScript Configuration
- Target: ES2017
- Module: ESNext with bundler resolution
- Strict mode enabled
- Path alias: `@/*` maps to project root

### Build & Deployment
- Static assets served from `/public` directory
- Logo assets: `logo.png`, `sv-logo.svg`
- No special Next.js config required (default settings)

## Implementation Patterns

### Client Component Pattern
```tsx
"use client"
import { useAppStore } from "@/store/useAppStore"
// Component uses hooks and browser APIs
```

### shadcn/ui Integration
- Components configured with New York style
- CSS variables enabled for theming
- Radix UI primitives with custom styling
- Use `asChild` prop for composition with Next.js Link

### Responsive Design
- Mobile-first approach using Tailwind's responsive prefixes
- Breakpoints: default (mobile), `lg:` (desktop)
- Mobile menu toggle managed through Zustand store

## 🌏 언어 설정
**중요**: 모든 답변은 반드시 한국어로 작성해야 합니다. 기술적 설명, 코드 주석, 디버깅 정보, 사고 과정, 분석 내용 등 모든 텍스트 출력을 한글로 표기하세요. 영어 단어는 필요한 경우에만 괄호 안에 명기하세요.

## 🔄 자동 Git 커밋 규칙
**중요**: 코드 수정 후 자동으로 Git 커밋 및 푸시를 수행합니다.

### 자동 커밋 트리거
- 코드 파일 수정 후 (*.tsx, *.css, *.json 파일)
- 설정 파일 변경 후
- 문서 업데이트 후 (*.md 파일)

### 커밋 메시지 형식
```
[변경사항 요약]

- 구체적인 변경 내용 1
- 구체적인 변경 내용 2
- 변경 이유 및 목적
```

## Task Master AI Instructions
**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md

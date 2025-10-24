# Faithful Web Experience Wire Map

## Global Structure
- **Tech stack**: Next.js App Router (`app/`), TypeScript, Tailwind via `app/globals.css` with custom OKLCH palette and animation utilities.
- **Root layout**: `app/layout.tsx` injects `StructuredData` JSON-LD, loads Geist fonts, and wraps all pages in a `<body>` with global gradients and smooth scrolling.
- **Persistent chrome**: `Header` (sticky, translucent, scroll-reactive) and `Footer` (multi-column links + newsletter) encapsulate `main` content on every full page.
- **State management**: `store/useAppStore.ts` supplies Zustand store for header scroll state, mobile menu toggle, and theme persistence (`localStorage` key `faithful-storage`).
- **Routes**: `/` (home landing), `/recommendations` (service curation), plus static `robots.ts` and `sitemap.ts` for SEO.

### Navigation Map
```
App Shell
├─ Header (global nav)
│  ├─ Desktop navigation menu → in-page anchors & /recommendations
│  └─ Mobile drawer → toggled by Zustand state
├─ Main (page-specific sections)
└─ Footer (company, services, resources, legal, newsletter)
```

## Home Page (`app/page.tsx`)
**Overall flow**: vertically stacked hero → services overview → projects showcase → company story → contact CTA, wrapped in `min-h-screen` container.

1. **Hero Section** (`components/sections/HeroSection.tsx`)
   - Full viewport (`min-h-screen`) canvas with layered gradients (`gradient-mesh`) and animated 3D panel stacks reacting to pointer position (desktop) or autoplay rotation (mobile).
   - Two-column layout on large screens: left copy (`h1`, supporting paragraph) with dual CTA buttons (`Link` to `#contact` and `#services`), right side animated structure (`preserve-3d`).
   - Mobile/responsive behavior toggled via `isMobile` state set on resize; removes live pointer transforms for performance.<br>
   - Bottom center scroll indicator SVG encourages exploration.

2. **Features Section** (`components/sections/FeaturesSection.tsx`, anchor `#services`)
   - Background gradient wash with blurred accent orbs.
   - Section header (title + supporting copy) followed by three-column card grid for key offerings.
   - Each feature card: icon tile, description, bullet highlights (with `Check` badges), and a ghost button linking to more info (placeholder action).
   - Hover interactions add glow (`opacity` transition) and lift effects; `hoveredIndex` state reserved for future dynamic content.
   - Closing CTA banner: gradient panel with headline, subcopy, and paired buttons linking to `#contact` and `#projects`.

3. **Projects Section** (`components/sections/ProjectsSection.tsx`, anchor `#projects`)
   - White background contrast with centered header.
   - Horizontal filter buttons (`categories` array) drive client-side category filtering via `useState` (`selectedCategory`).
   - Responsive grid of `Card` components showing project meta (category `Badge`, duration, tags, client, results).
   - Hover overlay reveals "자세히 보기" outline button; CTA row at bottom offers expandable pathway.

4. **About Section** (`components/sections/AboutSection.tsx`, anchor `#about`)
   - Gradient background from gray-50 to white.
   - Two-column introduction: narrative copy with checklist (ISO certification, etc.) and action button (download company profile) alongside stats grid card (`achievements`).
   - Core values grid (4 items) with icon badges.
   - CEO message card: glassmorphism panel containing placeholder portrait, quote block, and signature details.

5. **Contact Section** (`components/sections/ContactSection.tsx`, anchor `#contact`)
   - Symmetric two-column layout: contact info cards on left, inquiry form on right.
   - Contact cards cover address, phone, email, business hours with icon badges.
   - Form fields for name, company, email, phone, project type selector, rich textarea, privacy consent checkbox, and submit CTA with `Send` icon (no handler wired yet).

6. **Footer** (`components/layout/Footer.tsx`)
   - Five-column grid: company blurb + social icons (links placeholder) plus four link clusters (회사, 서비스, 리소스, 법적 고지) pointing to in-page anchors.
   - Newsletter signup row with email field + subscribe button.
   - Bottom bar states copyright, business registration, and CEO.

## Recommendations Page (`app/recommendations/page.tsx`)
**Layout** mirrors home shell (`Header` + `Footer`) with tailored sections.

1. **Hero** (top padding to clear fixed header)
   - Animated gradient blobs, `Badge` label, headline with gradient span, and supporting copy.
   - Encourages exploration of curated offerings.

2. **Recommendations Grid**
   - Three responsive columns of `Card` components (Best Seller, Recommended, Premium) derived from `recommendations` array.
   - Each card lists category, icon highlight, descriptive paragraph, feature bullets, and CTA button linking to `#contact` anchor (home page form).
   - Subtle animation delay creates staggered entrance.

3. **CTA Section**
   - Rounded glass panel centered on page; dual buttons route to `#contact` and `/` for navigation.

## Shared Components & Interactions
- **Header** (`components/layout/Header.tsx`)
  - Fixed, translucent bar that switches styling when `window.scrollY > 20` (sets `isScrolled`).
  - Desktop: `NavigationMenu` from shadcn UI with gradient hover states; anchors align to section IDs.
  - Mobile: menu button toggles collapsible list using Zustand `isMobileMenuOpen`; items close menu on click.
- **UI primitives** (`components/ui/*.tsx`)
  - Re-exported shadcn components (`button`, `card`, `badge`, `navigation-menu`) standardize styling.
- **Structured Data** (`components/StructuredData.tsx`)
  - Injects Organization, WebSite, LocalBusiness schemas with company metadata, supporting SEO.

## Visual Language & Motion
- **Color system** defined via OKLCH values in `app/globals.css`: cool blue primaries, lavender secondary, coral accent, with dark-mode variants.
- **Utility classes**: custom gradients (`gradient-primary`, etc.), glassmorphism (`glass`), text gradients, hover lifts, and motion keyframes (`fade-in-up`, `slide-left/right`, `rotate-3d-subtle`).
- **Accessibility**: respects `prefers-reduced-motion`, custom scrollbar theming, smooth scrolling for anchor navigation.

## Recommended Wireframe Notes
- Maintain 16px base padding on mobile; sections generally use `container mx-auto px-4` for horizontal rhythm.
- Anchor IDs align with nav items—ensure new content preserves these for smooth scroll integrity.
- Forms and CTAs consistently route to internal anchors rather than external endpoints; future wiring should integrate backend or third-party services while retaining layout hierarchy.


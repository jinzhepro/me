# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern personal resume website built with **Next.js 16.1.1**, **TypeScript 5**, and **Tailwind CSS 4**. It features a minimalist wireframe design with black/gray/white color scheme, smooth scroll-triggered animations, and is fully responsive across desktop, tablet, and mobile devices.

## Common Commands

```bash
# Development (with Turbopack for fast builds)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## High-Level Architecture

### Tech Stack
- **Framework**: Next.js 16.1.1 (App Router) + React 19.1.0
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York style components)
- **Animation**: Framer Motion 12.23.12
- **Icons**: Lucide React
- **UI Components**: Radix UI (Avatar, Progress, Separator, Slot)

### Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles with OKLCH colors & animations
│   ├── layout.tsx               # Root layout with metadata from config.json
│   ├── page.tsx                 # Main page (Home) - orchestrates all components
│   ├── loading.tsx              # Loading state
│   ├── error.tsx                # Error boundary
│   ├── not-found.tsx            # 404 page
│   ├── sitemap.ts               # Auto-generated sitemap
│   └── manifest.ts              # PWA configuration
├── components/
│   ├── ui/                      # shadcn/ui base components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── progress.tsx
│   │   └── separator.tsx
│   ├── Navigation.tsx           # Sticky top navigation with mobile menu
│   ├── ProfileCard.tsx          # Personal info, avatar, contact, core skills
│   ├── WorkExperience.tsx       # Timeline-based work history
│   ├── ProjectExperience.tsx    # Project showcase cards
│   ├── Skills.tsx               # Skill bars with progress animation
│   ├── Education.tsx            # Education background
│   ├── Environment.tsx          # Work environment preferences
│   ├── SocialMedia.tsx          # Social media links
│   ├── BackToTop.tsx            # Scroll-to-top button
│   └── JsonLd.tsx               # Schema.org structured data for SEO
├── data/                        # JSON data files (single source of truth)
│   ├── config.json             # Metadata, viewport, SEO config
│   ├── profile.json            # Personal info, contact, skills
│   ├── work.json               # Work experience data
│   ├── projects.json           # Project data
│   ├── skills.json             # Skills with levels
│   ├── education.json          # Education background
│   ├── environment.json        # Work environment data
│   ├── social.json             # Social media links
│   └── navigation.json         # Navigation links
├── lib/
│   ├── animations.ts           # Animation utilities (scroll observers, smooth scroll)
│   └── utils.ts                # Utility functions
└── types/                      # TypeScript type definitions
    ├── profile.ts
    ├── work.ts
    ├── project.ts
    ├── skills.ts
    ├── education.ts
    ├── environment.ts
    ├── social.ts
    ├── navigation.ts
    └── json.d.ts               # JSON module declarations
```

## Key Architectural Patterns

### 1. Data-Driven Components
All content is stored in `src/data/` JSON files. Components import data directly:
```typescript
import profileData from "@/data/profile.json";
import { ProfileData } from "@/types/profile";

export default function ProfileCard() {
  const { name, title, skills }: ProfileData = profileData;
  // ...
}
```

### 2. Animation System

**Scroll-Triggered Animations** (`src/lib/animations.ts`):
- `initScrollAnimations()`: Uses `IntersectionObserver` to add `.visible` class to elements with `.animate-on-scroll`
- `initPageAnimations()`: Initial page load animations
- `smoothScrollTo()`: Smooth scrolling with offset for fixed navigation

**CSS Animation Classes** (`src/app/globals.css`):
- `.animate-fade-in-up`: Initial fade-in from bottom (for ProfileCard)
- `.animate-on-scroll`: Elements that animate when entering viewport
- `.visible`: Triggered by IntersectionObserver to start animation
- Respects `prefers-reduced-motion` media query

### 3. Styling System

**OKLCH Color Space**:
- Modern color space for better perceptual uniformity
- Defined in `:root` in `globals.css`
- Variables like `--border`, `--foreground`, `--accent-warm`

**Wireframe Design Principles**:
- Border hierarchy: 1.5px (interactive), 1px (cards), 0.5px (tags, social)
- Custom classes: `.card-hover`, `.tech-tag`, `.btn-simple`, `.input-simple`
- Subtle hover effects with border color changes and minimal shadows

### 4. Type Safety

Strict TypeScript with:
- Type definitions for all data structures in `src/types/`
- Type-safe data imports with explicit typing
- JSON module declarations for type-safe JSON imports

### 5. SEO & Performance

**Metadata**:
- Configured in `layout.tsx` via `config.json`
- Open Graph, Twitter Cards, structured data (Schema.org)
- Auto-generated sitemap via `sitemap.ts`

**Performance**:
- Static Site Generation (SSG)
- Turbopack for fast development builds
- Code splitting via Next.js
- IntersectionObserver for lazy animations

## Development Workflow

### Modifying Content
Edit JSON files in `src/data/`:
- `profile.json`: Personal info, contact, core skills
- `work.json`: Work experience entries
- `projects.json`: Project showcase
- `skills.json`: Skill bars and levels
- `education.json`: Education background
- `social.json`: Social media links
- `config.json`: SEO metadata and viewport settings

### Adding New Components
1. Create component in `src/components/`
2. Add type definition in `src/types/` if needed
3. Import and use in `src/app/page.tsx`
4. Add animation classes: `animate-fade-in-up animate-on-scroll` for scroll-triggered

### Animation Customization
- Edit `src/lib/animations.ts` for animation logic
- Edit `src/app/globals.css` for animation keyframes and timing
- Use `prefersReducedMotion()` to check user preference

### Styling Changes
- Modify CSS variables in `:root` of `globals.css` for color scheme
- Update custom classes (`.card-hover`, `.tech-tag`, etc.) for interaction patterns
- Responsive breakpoints are defined in `globals.css` (mobile-first approach)

## Important Notes

- All components use `"use client"` directive (client-side rendering for animations)
- Navigation is sticky with backdrop blur
- ProfileCard appears immediately on load
- Other sections use scroll-triggered animations
- Footer is minimal with just copyright text
- Contact email is hardcoded in ProfileCard: `jinzhepro@qq.com`
- Project uses Volta for Node.js version management (24.12.0)

## Common Tasks

### Update Personal Information
```bash
# Edit src/data/profile.json
# Edit src/data/work.json
# Edit src/data/projects.json
# etc.
```

### Change Color Scheme
```bash
# Edit CSS variables in src/app/globals.css
# :root { --primary: ..., --border: ..., etc. }
```

### Add New Section
1. Create data file in `src/data/`
2. Create type in `src/types/`
3. Create component in `src/components/`
4. Import and add to `src/app/page.tsx`
5. Add to navigation in `src/data/navigation.json`

### Fix Build Issues
```bash
npm run lint          # Check for TypeScript/ESLint errors
npm run build         # Full production build
```

## Deployment

The project is designed for Vercel deployment but can be deployed anywhere:
```bash
npm run build
npm start
```

Static export is possible by configuring `output: 'export'` in `next.config.ts`.

# IFLOW.md - iFlow CLI Project Configuration

This document provides project-specific guidelines and configuration for the iFlow CLI agent working on this Next.js personal portfolio website.

## Project Overview

- **Name**: me (张晋哲 - 个人简历网站)
- **Type**: Personal portfolio/resume website
- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with OKLCH color space
- **Target**: Full-stack engineer portfolio showcasing professional experience

## Project Commands

```bash
# Development with Turbopack (fast HMR)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Development Environment

- **Node.js**: 24.12.0 (via Volta)
- **Package Manager**: npm
- **Build Tool**: Turbopack
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration

## Code Style Guidelines

### TypeScript Rules

- **Strict mode**: No `any`, no `@ts-ignore`, no `as any`
- **Explicit types**: Required for function parameters and return values
- **Naming**: PascalCase for interfaces/types (e.g., `ProfileData`, `WorkExperience`)
- **Imports**: Use `import type` for type-only imports
- **Immutability**: Use `Readonly` for props that shouldn't be mutated

### Import Order (Strict)

```typescript
// 1. React imports
import * as React from "react";
import { useState, useEffect } from "react";

// 2. External libraries (lucide-react, framer-motion, etc.)
import { Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

// 3. UI component libraries (Radix UI, etc.)
import { Slot } from "@radix-ui/react-slot";

// 4. shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// 5. Data imports
import profileData from "@/data/profile.json";

// 6. Type imports
import { ProfileData } from "@/types/profile";

// 7. Utility imports
import { cn } from "@/lib/utils";
```

### Component Patterns

- **Client components**: Add `"use client"` directive at top of file
- **Exports**: Default exports for all components
- **Documentation**: JSDoc comments for component documentation
- **Data handling**: Destructure JSON data with explicit typing
- **Variants**: Use `class-variance-authority` for component variants

### Naming Conventions

| Pattern | Style | Example |
|---------|-------|---------|
| Components | PascalCase | `ProfileCard.tsx`, `Skills.tsx` |
| Non-component files | kebab-case | `animations.ts`, `utils.ts` |
| Types/interfaces | PascalCase | `ProfileData`, `WorkExperience` |
| Functions/variables | camelCase | `cn()`, `initScrollAnimations()` |
| CSS classes | kebab-case | `.card-hover`, `.tech-tag`, `.animate-fade-in-up` |

### CSS & Tailwind CSS v4

- **Utility classes**: Primary styling via Tailwind utilities
- **Color space**: OKLCH colors defined in `:root` (globals.css)
- **Custom patterns**: Reusable styles as CSS classes:
  - `.card-hover` - Card hover effects with border and shadow
  - `.btn-simple` - Simple bordered button
  - `.tech-tag` - Technology tag badges
  - `.social-card` - Social media link cards
  - `.animate-fade-in-up` - Fade in upward animation
  - `.animate-on-scroll` - Scroll-triggered animation
- **Class merging**: Use `cn()` utility for conditional classes
- **Motion**: Respect `prefers-reduced-motion` media query
- **Border hierarchy**: 1.5px (interactive), 1px (cards), 0.5px (tags)

## Data Architecture

### Content Management

- **Single source of truth**: All content in `src/data/*.json` files
- **Type definitions**: Corresponding types in `src/types/*.ts`
- **Direct import**: Components import data files directly

### Data Files

| File | Purpose |
|------|---------|
| `config.json` | Site configuration, SEO metadata, theme settings |
| `profile.json` | Personal information (name, title, bio, avatar) |
| `skills.json` | Technical skills with proficiency levels |
| `work.json` | Work experience timeline |
| `projects.json` | Project portfolio with descriptions and tech stacks |
| `education.json` | Educational background |
| `social.json` | Social media links and contact info |
| `navigation.json` | Navigation menu configuration |
| `environment.json` | Environment/context information |

## Project Structure

```
me/
├── public/                     # Static assets
│   ├── favicon.svg
│   ├── logo.JPG
│   └── robots.txt
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── error.tsx          # Error boundary
│   │   ├── globals.css        # Global styles (Tailwind + custom)
│   │   ├── layout.tsx         # Root layout (SEO, fonts, providers)
│   │   ├── loading.tsx        # Loading state
│   │   ├── manifest.ts        # PWA manifest
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # Sitemap generation
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── avatar.tsx    # Avatar with fallback
│   │   │   ├── badge.tsx     # Badge/tag component
│   │   │   ├── button.tsx    # Button with variants
│   │   │   ├── card.tsx      # Card container
│   │   │   ├── progress.tsx  # Progress bar
│   │   │   └── separator.tsx # Divider
│   │   ├── BackToTop.tsx     # Scroll to top button
│   │   ├── Education.tsx     # Education section
│   │   ├── Environment.tsx   # Environment info
│   │   ├── JsonLd.tsx        # Schema.org structured data
│   │   ├── MobileMenu.tsx    # Mobile navigation menu
│   │   ├── Navigation.tsx    # Main navigation
│   │   ├── ProfileCard.tsx   # Personal profile card
│   │   ├── ProjectExperience.tsx  # Project showcase
│   │   ├── Skills.tsx        # Skills display
│   │   ├── SocialMedia.tsx   # Social links
│   │   └── WorkExperience.tsx # Work history timeline
│   ├── data/                  # JSON data files
│   ├── lib/                   # Utility functions
│   │   ├── animations.ts     # Scroll animation setup
│   │   ├── demo-animations.ts # Animation variants
│   │   └── utils.ts          # cn() utility, etc.
│   └── types/                 # TypeScript type definitions
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── eslint.config.mjs
└── postcss.config.mjs
```

## Key Utilities

### Classnames Utility

```typescript
import { cn } from "@/lib/utils";

// Merge classes conditionally
cn("base-classes", condition && "conditional-classes", variant && "variant-classes")
```

### Animation System

```typescript
// Initialize scroll animations
import { initScrollAnimations } from "@/lib/animations";

// Smooth scroll to section
import { smoothScrollTo } from "@/lib/animations";
smoothScrollTo("about", 80); // section ID, offset
```

### Animation CSS Classes

| Class | Purpose |
|-------|---------|
| `.animate-fade-in` | Simple fade in animation |
| `.animate-fade-in-up` | Fade in with upward movement |
| `.animate-scale-in` | Scale in with spring animation |
| `.animate-on-scroll` | Scroll-triggered container |
| `.animate-on-scroll.visible` | Visible state for scroll animations |
| `.animate-delay-100/200/300/400` | Animation delay helpers |

## Animation Guidelines

- **Framer Motion**: Complex, physics-based animations
- **CSS classes**: Simple transitions and scroll-triggered effects
- **Initialization**: `IntersectionObserver` setup in `src/lib/animations.ts`
- **Accessibility**: Always respect `prefers-reduced-motion`

## Component UI Patterns

### Radix UI Integration

Used for accessible, unstyled primitives:
- `@radix-ui/react-avatar` - User avatar with image fallback
- `@radix-ui/react-progress` - Accessible progress bars
- `@radix-ui/react-separator` - Dividers
- `@radix-ui/react-slot` - Polymorphic component pattern

### shadcn/ui-style Components

Custom UI components following shadcn/ui patterns:
- `Button` with CVA variants (default, outline, ghost)
- `Card` with content variants
- Consistent sizing and styling

## Theme & Styling

### Color System (OKLCH)

Defined in `:root` in `globals.css`:
- **Background**: Pure white (oklch(1 0 0))
- **Foreground**: Dark gray (oklch(0.15 0.015 260))
- **Primary**: Dark gray (oklch(0.15 0.015 260))
- **Muted**: Light gray (oklch(0.98 0.005 260))
- **Accent**: Very light gray (oklch(0.95 0.01 260))
- **Border**: Subtle gray (oklch(0.9 0.01 260))

### Responsive Design

Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

Touch targets: Minimum 48px for interactive elements

## SEO & Metadata

### Configuration

- **JSON-LD**: Structured data for rich snippets
- **Open Graph**: Social media preview cards
- **Twitter Cards**: Twitter preview
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Crawler directives

### Metadata Structure

```typescript
// In src/data/config.json
{
  "metadata": {
    "title": { "default": "...", "template": "%s | ..." },
    "description": "...",
    "keywords": [...],
    "openGraph": { ... },
    "twitter": { ... }
  }
}
```

## PWA Support

- **Manifest**: `src/app/manifest.ts` - Web app manifest
- **Icons**: Configured for installable app experience
- **Theme color**: Matches site design

## Build & Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Automatic deployment with optimal settings

### Build Output

- **Static generation**: Pages pre-rendered at build time
- **Bundle size**: ~159kB optimized bundle
- **Performance**: FCP ~1.2s, LCP ~1.8s

## Error Handling

- **Error boundary**: `src/app/error.tsx` for React error boundaries
- **Safe access**: Optional chaining (`data?.property`) and nullish coalescing (`value ?? default`)
- **Empty states**: Handle missing data gracefully

## Frontend Development Notes

### Visual Changes

For UI/UX modifications (colors, animations, layout), delegate to frontend-tester agent:
- Frontend changes require visual validation
- Test responsive behavior across devices
- Verify animation performance (60fps)

### Data-Driven Content

All visible content comes from JSON files:
- **Don't hardcode text** - Edit `src/data/*.json` instead
- **Don't hardcode links** - Edit navigation/social data files
- **Changes propagate automatically** - No component code needed

## Performance Optimization

- **Code splitting**: Automatic by Next.js
- **Lazy loading**: Components lazy-loaded via Framer Motion
- **Optimized fonts**: System font stack (Inter fallback)
- **Static assets**: Optimized images and icons

## Accessibility

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Keyboard navigation**: Focus management
- **Screen reader support**: ARIA labels, alt text
- **Reduced motion**: Respects `prefers-reduced-motion`
- **High contrast**: Supports `prefers-contrast: high`

## Workflow Guidelines

1. **Data-first**: Edit JSON files for content changes
2. **Minimal code changes**: Only modify code for new features
3. **Lint before commit**: Run `npm run lint`
4. **Test builds**: Verify `npm run build` succeeds
5. **Visual validation**: Frontend changes need UI testing

## Common Tasks

### Update Profile Information

Edit `src/data/profile.json`:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio...",
  "avatar": "/path/to/avatar.jpg"
}
```

### Add New Skill

Edit `src/data/skills.json`:
```json
{
  "name": "Skill Name",
  "level": 80,
  "category": "frontend"
}
```

### Add New Project

Edit `src/data/projects.json`:
```json
{
  "title": "Project Name",
  "description": "...",
  "technologies": ["React", "TypeScript"],
  "link": "https://..."
}
```

### Customize Colors

Edit `:root` variables in `src/app/globals.css`:
```css
:root {
  --primary: oklch(0.xx 0.xx xxx);
  --background: oklch(...);
  /* etc. */
}
```

## Version History

- **Latest**: Next.js 16.1.1, React 19.1.0, Tailwind CSS 4
- **Migration**: Upgraded from Next.js 15 to 16, React 19
- **Styling**: Migrated to Tailwind CSS v4 with OKLCH colors

# AGENTS.md - Code Guidelines for Agentic Coding

This document provides guidelines for agentic coding agents working on this Next.js resume website.

## Commands

```bash
# Development (Turbopack for fast builds)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check (via build)
npm run build
```

## Code Style Guidelines

### TypeScript
- **Strict mode enabled** - no `any`, no `@ts-ignore`, no `as any`
- Use explicit types for function parameters and return values
- Interface names: PascalCase (e.g., `ProfileData`, `WorkExperience`)
- Type imports: `import type { TypeName } from "@/types/..."`
- Use `Readonly` for props that shouldn't be mutated

### Imports (order matters)
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
- **Client components**: Add `"use client"` at the top
- **Default exports** for all components
- **JSDoc comments** for component documentation (Chinese comments used)
- **Destructuring** data from JSON files with explicit typing
- Use `class-variance-authority` for variant components (button, card, etc.)

### Naming Conventions
| Pattern | Style | Example |
|---------|-------|---------|
| Components | PascalCase | `ProfileCard.tsx`, `WorkExperience.tsx` |
| Non-component files | kebab-case | `animations.ts`, `utils.ts` |
| Types/interfaces | PascalCase | `ProfileData`, `WorkExperience` |
| Functions/variables | camelCase | `cn()`, `initScrollAnimations()` |
| CSS classes | kebab-case | `.card-hover`, `.tech-tag` |

### CSS & Tailwind
- **Tailwind CSS v4** - use utility classes primarily
- **OKLCH color space** for colors (defined in `:root` in globals.css)
- **Custom classes** for repeated patterns (`.card-hover`, `.btn-simple`, `.tech-tag`)
- Use `cn()` utility to merge Tailwind classes: `cn("base-classes", variant && "variant-classes")`
- Animation classes: `.animate-fade-in-up`, `.animate-on-scroll`, `.visible`
- Respect `prefers-reduced-motion` media query
- Border hierarchy: 1.5px (interactive), 1px (cards), 0.5px (tags, social)

### Data Patterns
- All content in `src/data/*.json` files (single source of truth)
- Corresponding types in `src/types/*.ts`
- Components import data directly: `import profileData from "@/data/profile.json"`

### Error Handling
- Error boundary at `src/app/error.tsx`
- Use optional chaining: `data?.property`
- Use nullish coalescing: `value ?? defaultValue`
- Empty catch blocks are forbidden: always handle or log errors

### File Structure
```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/          # shadcn/ui base components
│   └── *.tsx        # Feature components (ProfileCard, Skills, etc.)
├── data/            # JSON data files
├── lib/             # Utilities (utils.ts, animations.ts)
└── types/           # TypeScript type definitions
```

### Animation Guidelines
- Use Framer Motion for complex animations
- Use CSS classes for simple transitions (`.animate-fade-in-up`, `.animate-on-scroll`)
- Initialize scroll animations via `IntersectionObserver` in `src/lib/animations.ts`
- Always respect `prefers-reduced-motion`

### Key Utilities
- `cn(...inputs)` - Merge Tailwind classes safely (from `@/lib/utils`)
- `initScrollAnimations()` - Set up scroll-triggered animations
- `smoothScrollTo(id, offset)` - Smooth scroll to section

## Workflow Notes
- This is a **personal resume website** - changes should be minimal and focused
- All content is data-driven (JSON files) - prefer editing data over code
- Frontend visual changes should be delegated to frontend-ui-ux-engineer agent
- Run `npm run lint` before committing changes

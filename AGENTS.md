# AGENTS.md

This file provides guidelines for AI coding agents operating in this repository.

## Project Overview

Modern personal portfolio website built with Next.js 16 + TypeScript + Tailwind CSS 4. Data-driven architecture using JSON files for content separation.

## Build/Lint/Test Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run dev --turbopack  # Explicit Turbopack mode

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint

# Node Version
# Requires Node.js >= 18.0.0 (configured via Volta: 24.12.0)
```

## Code Style Guidelines

### Imports and Exports

- Use ES Modules (`import`/`export`) exclusively - no CommonJS
- Use path aliases: `@/*` maps to `./src/*`
- Separate type imports with `type` keyword
- Order: external libs → absolute paths → relative imports

```typescript
import Link from "next/link";
import type { Metadata, Viewport } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SocialMediaLink } from "@/types/social";
```

### Naming Conventions

| Type | Convention | Examples |
|------|------------|----------|
| Variables/Functions | camelCase | `initScrollAnimations`, `smoothScrollTo` |
| Classes/Interfaces | PascalCase | `SocialMediaLink`, `EducationItem` |
| Constants | camelCase | `buttonVariants`, `badgeVariants` |
| Files | kebab-case | `Navigation.tsx`, `use-page-animations.tsx` |
| CSS Classes | kebab-case | `.animate-fade-in`, `.client-only` |

### TypeScript Patterns

- Enable strict mode - no type suppression (`as any`, `@ts-ignore`)
- Use interfaces for object shapes
- Use JSDoc comments for all exported functions
- Define types in `/src/types/` directory

```typescript
/**
 * Smooth scroll to target element
 * @param elementId Target element ID
 * @param offset Offset from top (default 120px)
 */
export function smoothScrollTo(elementId: string, offset = 120): void {
  const element = document.getElementById(elementId);
  if (element) {
    // Implementation
  }
}
```

### Component Structure

Follow this component file pattern:

```typescript
// 1. Imports
// 2. Type definitions
// 3. Constants/Config
// 4. Main component/function
// 5. Exports

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "default" | "destructive";
  size?: "default" | "sm" | "lg";
}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
```

### CSS/Styling

- Use Tailwind CSS 4 with CSS variables
- Use `cn()` utility for class merging (`clsx` + `tailwind-merge`)
- Define theme colors in `:root` of `globals.css`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Error Handling

- Use guard clauses for early returns
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Clean up side effects in `useEffect` cleanup functions
- Use Next.js Error boundary for route-level errors

```typescript
useEffect(() => {
  const scrollObserver = initScrollAnimations();
  document.addEventListener("click", handleAnchorClick);

  return () => {
    document.removeEventListener("click", handleAnchorClick);
    scrollObserver?.disconnect();
  };
}, []);
```

### Data Patterns

- Content data stored as JSON in `/src/data/`
- Each JSON file has corresponding TypeScript interface in `/src/types/`
- Use path aliases for all imports

## Architecture Notes

- **App Router**: Pages in `src/app/` using Next.js App Router
- **Client Components**: Mark with `"use client"` directive
- **Dynamic Imports**: Use `next/dynamic` for code splitting
- **Animations**: Framer Motion for 60fps animations
- **UI Components**: Radix UI primitives with custom styling

## File Organization

```
src/
├── app/              # Pages and layouts
├── components/       # React components
│   ├── ui/          # Base UI components
│   └── *.tsx        # Feature components
├── data/            # JSON data files
├── lib/             # Utilities
├── hooks/           # Custom React hooks
└── types/           # TypeScript definitions
```

## ESLint Configuration

- Uses `next/core-web-vitals` and `next/typescript` rulesets
- Run `npm run lint` to check code quality

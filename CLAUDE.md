# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses Bun as the primary runtime and package manager. All commands should be run with `bunx --bun`:

- `bunx --bun next dev` - Start development server
- `bunx --bun next build` - Build for production
- `bunx --bun next start` - Start production server
- `bunx --bun next lint` - Run ESLint
- `ANALYZE=true bunx --bun next build` - Build with bundle analyzer

## Project Architecture

### Framework & Runtime

- **Next.js 15** with App Router (not Pages Router)
- **Bun runtime** - all npm scripts use `bunx --bun` prefix
- **TypeScript** throughout
- **Tailwind CSS** for styling with custom color scheme

### Key File Structure

- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - Reusable React components
- `/src/lib/` - Utility functions, types, and data definitions
- `/public/` - Static assets including custom fonts and images

### Component Architecture

- Components follow a consistent pattern with TypeScript interfaces
- Custom components use Tailwind CSS classes
- Special animated components like `AnimatedTitle`, `SquigglyLine`, `ConfettiWrapper`
- Theme-aware components that respond to system light/dark mode

### Data Management

- Static data definitions in `/src/lib/defs.ts` (redirects, projects, pages)
- Type definitions in `/src/lib/types.ts`
- No external database - all content is statically defined

### Styling Approach

- Custom Tailwind color palette defined in `tailwind.config.ts`
- Custom font "Cute Notes" loaded as local font in layout
- CSS modules for specific styling (e.g., `Home.module.css`)
- Dark/light mode support using system preferences

### Special Features

- Git commit hash injection via Next.js config for build tracking
- Custom redirect system via `/to/` routes defined in `defs.ts`
- Bundle analysis capability with `ANALYZE=true` environment variable
- SEO optimized with comprehensive metadata and JSON-LD structured data

### Performance Optimizations

- Bun-specific optimizations in `next.config.ts`
- Image optimization with priority loading for above-fold images
- Console logging disabled in production (except errors/warnings)
- Preconnect links for external resources

When making changes, ensure you maintain the existing patterns for component structure, TypeScript typing, and Tailwind styling conventions.

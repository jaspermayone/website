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

## View Transitions

This project uses the **View Transitions API** to provide smooth, animated transitions between pages.

### Implementation

- **Library**: `next-view-transitions` (v0.3.4+)
- **Setup**: Root layout wrapped with `<ViewTransitions>` component
- **Router**: All navigation uses `useTransitionRouter()` from `next-view-transitions`
- **Internal Links**: Use `Link` from `next-view-transitions` instead of `next/link`

### Transition Types

The site implements several types of transitions:

1. **Page Transitions** - Smooth crossfade (300ms) when navigating between pages
2. **Shared Elements** - Specific elements transition smoothly across pages:
   - `page-title` - The animated page title (400ms)
   - `main-navigation` - The navigation menu (350ms)
   - `profile-image` - Profile picture on home page (500ms)
   - `footer` - Footer element (200ms)

### CSS Configuration

View transition styles are defined in `/src/styles/globals.css`:

- Default page transition uses fade-in/fade-out animations
- Shared element transitions have custom durations
- All animations use browser-native View Transitions API

### Browser Support

- ✅ **Chrome/Edge 111+**: Full support
- ✅ **Safari 18+**: Full support
- ⚠️ **Firefox**: Pending (graceful degradation to instant navigation)
- **Fallback**: Pages navigate normally without transitions in unsupported browsers

### Adding Transitions to New Elements

To add a view transition to a new element:

1. Add `viewTransitionName: "your-element-name"` to the element's style object
2. Define transition styles in `globals.css`:
   ```css
   ::view-transition-old(your-element-name),
   ::view-transition-new(your-element-name) {
     animation-duration: 0.4s;
   }
   ```

### Important Notes

- View transitions only work for **internal navigation** (same-origin)
- External links bypass view transitions automatically
- Transitions are purely visual and don't affect page load performance

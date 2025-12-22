# AGENTS.md

This file provides comprehensive guidance for AI agents working in this repository. It documents commands, patterns, conventions, and important context to help agents work effectively.

## Project Overview

This is a personal website for Jasper Mayone built with **Next.js 15** (App Router), **Bun runtime**, **TypeScript**, and **Tailwind CSS**. It's a statically-generated site with no external database - all content is defined in code.

**Tech Stack:**

- Next.js 15 (App Router, not Pages Router)
- Bun (runtime and package manager)
- TypeScript
- Tailwind CSS 4.x
- React 19
- Vercel deployment

## Essential Commands

All commands use `bunx --bun` prefix (Bun-specific optimization):

### Development

```bash
bunx --bun next dev          # Start dev server on http://localhost:3000
bunx --bun next build        # Build for production
bunx --bun next start        # Start production server
```

### Code Quality

```bash
bunx --bun next lint         # Run ESLint (alias: bun run lint)
bun run lint:fix             # Auto-fix ESLint issues
bun run format               # Format code with Prettier
bun run format:check         # Check formatting without changes
```

### Build Analysis

```bash
bun run analyze              # Build with bundle analyzer (sets ANALYZE=true)
ANALYZE=true bunx --bun next build  # Alternative syntax
```

### Sitemap

```bash
bun run postbuild            # Runs after build to generate sitemap
```

### Git Hooks

```bash
bun run prepare              # Install Husky git hooks
# Pre-commit hook runs: bunx lint-staged (ESLint + Prettier on staged files)
```

## Project Structure

```
/src
├── app/              # Next.js App Router pages
│   ├── (home)/      # Home page route group
│   ├── api/         # API routes (commits, og, email, github-stats)
│   ├── layout.tsx   # Root layout with metadata, fonts, ViewTransitions
│   └── [pages]/     # Individual page routes
├── components/      # React components
│   ├── ui/          # Radix UI components (button, card, accordion, etc.)
│   └── [custom]/    # Custom components (AnimatedTitle, MENU, FOOTER, etc.)
├── lib/             # Utilities and definitions
│   ├── defs.ts      # **SINGLE SOURCE OF TRUTH** for site data
│   ├── types.ts     # TypeScript type definitions
│   ├── utils.ts     # Utility functions (cn for className merging)
│   └── [other]/     # Additional utilities
├── styles/          # CSS files
│   └── globals.css  # Global styles and view transitions
└── hooks/           # Custom React hooks

/public
├── fonts/           # Local fonts (CuteNotes, Balgin)
├── images/          # Static images
├── keys/            # GPG/SSH public keys
└── [static assets]  # Favicons, manifests, etc.
```

## Data Management

### Single Source of Truth: `/src/lib/defs.ts`

**This is the most important file for content changes.** All site data is defined here:

- **`siteUrl`** - Base URL for the site
- **`primaryEmail`** - Contact email
- **`age`** - Dynamically calculated from birthdate
- **`pages`** - Array of all site pages with navigation metadata
- **`links`** - Redirect definitions for `/to/` routes
- **Projects, concerts, podcasts, tools, hardware, etc.**

**Key Pattern:**

```typescript
export const pages: PageItem[] = [
  { text: "Home", slug: "home", showInNav: true, order: 1 },
  // ...
];

export const links: RedirectItem[] = [
  {
    slug: "github",
    destination: "https://github.com/jaspermayone",
    linkrelme: true,
    slashToLink: true, // Creates /to/github redirect
    social: true,
    username: "jaspermayone",
  },
  // ...
];
```

### Type Definitions: `/src/lib/types.ts`

All TypeScript interfaces for site data:

- `PageItem`, `RedirectItem`, `ProjectItem`
- `Concert`, `Appearance`, `Podcast`
- `MaintainedProject`, `OpenSourceContribution`
- `HardwareItem`, `Tool`, etc.

**When adding new data types:**

1. Define interface in `types.ts`
2. Export data array in `defs.ts`
3. Import and use in components

## Component Architecture

### Component Patterns

**Standard Component Structure:**

```typescript
interface ComponentProps {
  // TypeScript interface for props
}

const Component = (props: ComponentProps) => {
  // Destructure props
  return (
    // JSX with Tailwind classes
  );
};

export default Component;
```

### Special Components

**`AnimatedTitle`** - Letter-by-letter animated title with cycling green highlight

- Props: `firstWord`, `secondWord?`, `thirdWord?`, `color?`, `addTextShadow?`
- Used in `MENU` component on all pages

**`MENU`** - Page header with animated title and navigation

- Contains `AnimatedTitle` + `PageNavigation` + `SquigglyLine`
- Props: `pageFirstWord`, `pageSecondWord?`, `pageThirdWord?`, `color?`, `disableSquig?`, `addBackground?`

**`FOOTER`** - Site footer with view transition name

- Use `viewTransitionName: "footer"` in style prop

**UI Components (`/src/components/ui/`)**

- Based on Radix UI primitives
- Styled with Tailwind using `class-variance-authority`
- Use `cn()` utility from `@/lib/utils` for className merging

### Client vs Server Components

**Client Components** (marked with `"use client"`):

- Components using hooks (useState, useEffect, etc.)
- Interactive components (AnimatedTitle, ConfettiWrapper)
- Components using browser APIs (matchMedia, localStorage)

**Server Components** (default):

- Static pages
- Data fetching components
- Metadata generation

## Styling Approach

### Tailwind CSS

**Custom Colors** (defined in `tailwind.config.ts`):

```typescript
{
  greeen: "#56ba8e",      // Primary green
  linkHover: "#188052",   // Link hover state
  pinkk: "#ed68ab",       // Accent pink
  pinkkDark: "#ad2f6f",   // Dark pink
  lite: "#f8fbf8",        // Light background
  dark: "#151922",        // Dark background
}
```

**Custom Fonts:**

- `font-cute-notes` - Handwritten style font
- `font-balgin` - Body text font

**Path Aliases:**

```typescript
@/*           // /src/*
@public/*     // /public/*
```

### CSS Conventions

**Global Styles** (`/src/styles/globals.css`):

- Uses Tailwind 4.x `@import "tailwindcss"` syntax
- Custom `.lnk` class for styled links (green wavy underline)
- View transitions defined in `@layer base`
- Custom utilities in `@layer utilities`

**CSS Modules:**

- Used for specific pages (Home.module.css, 404.module.css, etc.)
- Import with `import styles from './File.module.css'`
- Use with `className={styles.className}`

### Dark Mode

- Uses `darkMode: "class"` in Tailwind config
- Managed by `next-themes` package
- `ThemeProvider` and `ThemeUpdater` in root layout
- System preference detection with `useSyncExternalStore`

## View Transitions

**Critical for navigation:** This site uses the View Transitions API for smooth page transitions.

### Implementation Rules

**Always use these for internal navigation:**

```typescript
import { Link } from "next-view-transitions"; // NOT next/link
import { useTransitionRouter } from "next-view-transitions"; // NOT next/navigation
```

**Never use:**

- `import Link from 'next/link'`
- `import { useRouter } from 'next/navigation'`

### Transition Configuration

**Root Layout:**

- Wrapped with `<ViewTransitions>` component
- Provides context for all transitions

**Shared Element Transitions:**

Elements with `viewTransitionName` prop transition smoothly across pages:

```typescript
// In component style prop
style={{ viewTransitionName: "page-title" }}
style={{ viewTransitionName: "profile-image" }}
style={{ viewTransitionName: "main-navigation" }}
style={{ viewTransitionName: "footer" }}
```

**CSS Timing** (in `globals.css`):

```css
::view-transition-old(page-title),
::view-transition-new(page-title) {
  animation-duration: 0.4s;
}
```

**Browser Support:**

- Chrome/Edge 111+: Full support
- Safari 18+: Full support
- Firefox: Graceful degradation (instant navigation)

### Adding New Transitions

1. Add `viewTransitionName: "your-name"` to element's style object
2. Define CSS timing in `globals.css`:
   ```css
   ::view-transition-old(your-name),
   ::view-transition-new(your-name) {
     animation-duration: 0.4s;
   }
   ```

## Redirects System

**Two types of redirects:**

### 1. Dynamic `/to/` Redirects

Defined in `defs.ts` and generated in `next.config.ts`:

```typescript
// In defs.ts
{
  slug: "github",
  destination: "https://github.com/jaspermayone",
  slashToLink: true,  // Creates /to/github redirect
}

// Automatically adds UTM parameters:
// /to/github → https://github.com/jaspermayone?utm_source=jaspermayone.com&utm_medium=referral
```

**next.config.ts** processes `defs.ts` links and generates redirects array.

### 2. Static Redirects

Hardcoded in `next.config.ts` in `someOtherRedirects` array:

```typescript
{
  source: "/hello",
  destination: "/contact",
  permanent: true,  // 308
}
```

**When adding redirects:**

1. For external links with UTM tracking: Add to `links` array in `defs.ts` with `slashToLink: true`
2. For simple internal/external redirects: Add to `someOtherRedirects` in `next.config.ts`

## Build Configuration

### Environment Variables

Injected at build time via `next.config.ts`:

```typescript
env: {
  APP_VERSION: pkg.version,           // From package.json
  COMMIT_HASH: commitHash,            // Short git hash (7 chars)
  FULL_COMMIT_HASH: fullCommitHash,   // Full git hash
  COMMIT_DATE: commitDate,            // Commit timestamp
}
```

**Access in code:**

```typescript
process.env.COMMIT_HASH;
process.env.APP_VERSION;
```

### Git Commit Injection

`next.config.ts` runs `git log` commands to inject commit info into build:

- Used in footer to show current build commit
- See `/src/components/helpers/commitHash.tsx` for usage example

### Bundle Analyzer

Enabled with `ANALYZE=true` environment variable:

```bash
bun run analyze
```

Uses `@next/bundle-analyzer` configured in `next.config.ts`.

### Next.js Configuration Highlights

**Turbopack:** Enabled for faster builds

```typescript
turbopack: {
  root: __dirname,
}
```

**Console Removal:** Production builds remove console.log (keeps error/warn)

```typescript
compiler: {
  removeConsole: process.env.NODE_ENV === "production"
    ? { exclude: ["error", "warn"] }
    : false,
}
```

**Image Optimization:**

```typescript
images: {
  remotePatterns: [
    { protocol: "https", hostname: "jasper.cv" }
  ],
  minimumCacheTTL: 60,
}
```

## Code Quality & Formatting

### ESLint Configuration

**File:** `eslint.config.mjs` (flat config format)

**Rules:**

- TypeScript recommended
- React recommended
- React Hooks (rules-of-hooks: error, exhaustive-deps: warn)
- JSX A11y recommended
- Prettier integration (conflicts disabled)

**Key Rule Overrides:**

```javascript
"@typescript-eslint/no-unused-vars": ["warn", {
  argsIgnorePattern: "^_",
  varsIgnorePattern: "^_"
}]
"no-console": ["warn", { allow: ["warn", "error"] }]
"react/react-in-jsx-scope": "off"  // Not needed in React 19
"react/prop-types": "off"          // Using TypeScript
```

**Ignored Paths:**

- `node_modules/`, `.next/`, `.vercel/`, `out/`, `public/`
- `**/*.config.js`, `**/*.config.ts`

### Prettier Configuration

**File:** `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "bracketSpacing": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Key Points:**

- Uses Tailwind plugin for class sorting
- Double quotes (not single)
- Semicolons required
- 2-space indentation
- LF line endings

### Pre-commit Hooks

**Husky + lint-staged** runs on every commit:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css,md,mdx}": [
    "prettier --write"
  ]
}
```

**Location:** `.husky/pre-commit`

## TypeScript Configuration

**File:** `tsconfig.json`

**Key Settings:**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "esnext",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitAny": false, // Relaxed for this project
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"],
      "@public/*": ["./public/*"]
    }
  }
}
```

**Import Patterns:**

- Use `@/` for src imports: `import { age } from '@/lib/defs'`
- Use `@public/` for public assets: `import Image from '@public/images/photo.webp'`
- Relative imports OK for nearby files

## SEO & Metadata

### Metadata Pattern

**Root Layout** (`/src/app/layout.tsx`):

- Comprehensive metadata object
- Uses `siteUrl`, `primaryEmail`, `age` from `defs.ts`
- Open Graph images
- Twitter/X cards
- JSON-LD structured data

**Page-Level Metadata:**

```typescript
export const metadata: Metadata = {
  title: "Page Title", // Auto-appends " | Jasper Mayone"
  description: "...",
  // ...
};
```

**Template String in Root:**

```typescript
title: {
  template: "%s | Jasper Mayone",
  default: "Jasper Mayone",
}
```

### Sitemap Generation

**Tool:** `next-sitemap`

**Config:** `next-sitemap.config.js`

**Process:**

1. `bunx --bun next build` creates initial sitemap
2. `postbuild` script runs `next-sitemap`
3. Renames `sitemap.xml` → `sitemap_index.xml`
4. Renames `sitemap-0.xml` → `sitemap.xml`
5. Fixes references with `sed`

**Priority Levels:**

- Homepage: 1.0 (weekly)
- High-priority pages (/portfolio, /contact): 1.0 (weekly)
- Medium-priority (/now, /uses, etc.): 0.7 (weekly)
- Other pages: 0.5 (monthly)

**Excluded:** `/icon.png`, `/robots.txt`, `/blank`, `/api/*`

### Robots.txt

Generated by Next.js native `robots.ts` in `/src/app/robots.ts` (not next-sitemap).

## API Routes

Located in `/src/app/api/`:

**Endpoints:**

- `/api/commits` - Git commit info
- `/api/og` - Open Graph image generation
- `/api/email` - Email handling
- `/api/github-stats` - GitHub statistics

**Pattern:**

```typescript
// /src/app/api/[endpoint]/route.ts
export async function GET(request: Request) {
  // Handler logic
}
```

## Performance Optimizations

### Bun-Specific

**Webpack Config:**

```typescript
webpack: (config, { isServer }) => {
  if (isServer) {
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
  }
  return config;
};
```

**Package Optimization:**

```typescript
experimental: {
  optimizePackageImports: ["@opentelemetry/api", "ua-parser-js"],
}
```

### Image Optimization

**Priority Images:**

```typescript
<Image src={...} alt="..." priority />  // Above-fold images
```

**Remote Patterns:**
Only `jasper.cv` domain allowed for remote images.

**Cache TTL:** 60 seconds minimum

### Analytics

**Vercel Speed Insights:**

```typescript
import { SpeedInsights } from "@vercel/speed-insights/next";

// In layout
<SpeedInsights />
```

## Common Patterns & Conventions

### Component Naming

- **PascalCase** for components: `AnimatedTitle`, `MENU`, `FOOTER`
- **UPPERCASE** for major layout components: `MENU`, `FOOTER`
- **UI components** in `/components/ui/`: lowercase filenames, PascalCase exports

### File Naming

- **Pages:** `page.tsx` (App Router convention)
- **Layouts:** `layout.tsx`
- **Routes:** `route.ts` (for API routes, XML feeds)
- **Components:** `ComponentName.tsx`
- **Utilities:** `utils.ts`, `defs.ts`

### Import Order Convention

(Not enforced, but common pattern observed:)

1. React imports
2. Next.js imports
3. Third-party libraries
4. Local components (`@/components`)
5. Local utilities (`@/lib`)
6. Assets (`@public`)
7. Types
8. Styles

### Utility Functions

**`cn()` - className Merging:**

```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-classes", conditionalClass && "extra-class")} />
```

Uses `clsx` + `tailwind-merge` for Tailwind-aware class merging.

## Special Features

### Confetti System

**`ConfettiWrapper`** - Shows confetti on special query params:

- `?socraticaW25=true`
- `?wit=true`
- `?pwl=true`
- `?pd=true`
- `?mlh=true`

Redirects exist for these (e.g., `/ss` → `/?socraticaW25=true`).

### IndieAuth Support

Links with `atproto: true` in `defs.ts` support ATProto/Bluesky IndieAuth.

### Link Relations

Links with `linkrelme: true` included in HTML `<link rel="me">` tags for identity verification.

## GitHub Actions

**File:** `.github/workflows/claude.yml`

**Trigger:** Claude Code action when:

- Issue/PR comment contains `@claude`
- Issue title/body contains `@claude`
- PR review contains `@claude`

**Runs:** `anthropics/claude-code-action@beta`

## Testing

**No test suite currently configured.**

When adding tests:

1. Add test framework (Jest, Vitest, etc.)
2. Add test scripts to `package.json`
3. Update `AGENTS.md` and `CLAUDE.md` with test commands

## Deployment

**Platform:** Vercel (inferred from Speed Insights and config)

**Build Command:** `bunx --bun next build`
**Output Directory:** `.next/`

**Production Checks:**

- Console logs removed (except errors/warnings)
- Source maps disabled (`productionBrowserSourceMaps: false`)
- Server source maps disabled (`experimental.serverSourceMaps: false`)

## Common Tasks

### Adding a New Page

1. Create `/src/app/[page-name]/page.tsx`
2. Add metadata export
3. Add to `pages` array in `/src/lib/defs.ts`:
   ```typescript
   { text: "Page Name", slug: "page-name", showInNav: true, order: 9 }
   ```
4. Page automatically appears in navigation if `showInNav: true`

### Adding a New Redirect

**For external link with tracking:**

```typescript
// In /src/lib/defs.ts
{
  slug: "service-name",
  destination: "https://example.com/profile",
  slashToLink: true,
  linkrelme: false,
  social: true,
  username: "username",
}
```

**For simple redirect:**

```typescript
// In next.config.ts someOtherRedirects array
{
  source: "/short",
  destination: "/long-page-name",
  permanent: true,
}
```

### Adding New Data

1. Define TypeScript interface in `/src/lib/types.ts`
2. Export data array in `/src/lib/defs.ts`
3. Import in component: `import { dataArray } from '@/lib/defs'`
4. Map over data in component

### Styling a Component

**Prefer Tailwind classes:**

```typescript
<div className="flex items-center gap-4 rounded-lg bg-greeen p-4">
```

**For dynamic styles or complex logic:**

```typescript
<div style={{
  color: isDark ? '#fff' : '#000',
  viewTransitionName: "element-name"
}}>
```

**For component variants, use `class-variance-authority`:**

```typescript
import { cva } from "class-variance-authority";

const variants = cva("base-classes", {
  variants: {
    size: {
      sm: "small-classes",
      lg: "large-classes",
    },
  },
});
```

### Adding a Font

1. Place font files in `/public/fonts/[FontName]/`
2. Import in `/src/app/layout.tsx`:
   ```typescript
   const myFont = localFont({
     src: [{ path: "../../public/fonts/MyFont/MyFont.ttf", style: "normal" }],
     variable: "--font-myFont",
   });
   ```
3. Add to `<body>` className: `${myFont.variable}`
4. Add to Tailwind config:
   ```typescript
   fontFamily: {
     "my-font": "var(--font-myFont)",
   }
   ```
5. Use: `<div className="font-my-font">Text</div>`

## Gotchas & Important Notes

### 1. View Transitions Import

**ALWAYS:**

```typescript
import { Link } from "next-view-transitions";
import { useTransitionRouter } from "next-view-transitions";
```

**NEVER:**

```typescript
import Link from "next/link"; // ❌ Breaks transitions
import { useRouter } from "next/navigation"; // ❌ Breaks transitions
```

### 2. Bun Command Prefix

**Always use `bunx --bun`** for Next.js commands:

```bash
bunx --bun next dev   # ✅
next dev              # ❌ Won't use Bun runtime
npm run dev           # ❌ Uses npm, not Bun
```

### 3. Single Source of Truth

**Always update `/src/lib/defs.ts` for:**

- Site URL, email, constants
- Page definitions
- Redirects
- Projects, links, data arrays

**Don't** hardcode these values in components.

### 4. TypeScript Strictness

`noImplicitAny: false` means you can use `any` type, but:

- Prefer explicit types when possible
- Define interfaces in `types.ts`
- Use TypeScript features (avoid `any` unless necessary)

### 5. Console Logs

**Removed in production** except `console.error()` and `console.warn()`.

Use `console.log()` in development, but don't rely on it in production.

### 6. Tailwind 4.x Syntax

Uses new `@import "tailwindcss"` syntax (not `@tailwind base/components/utilities`).

PostCSS plugin: `@tailwindcss/postcss`

### 7. Custom Colors

Use custom color names from Tailwind config:

- `bg-greeen` (not `bg-green`)
- `text-pinkk` (not `text-pink`)
- Custom spellings intentional

### 8. Link Styling

Global `.lnk` class for styled links (green wavy underline):

```typescript
<a className="lnk" href="...">Link</a>
```

Standard links also get `font-balgin` applied globally.

### 9. App Router Conventions

- **Route Groups:** `(home)` folder doesn't affect URL structure
- **Dynamic Routes:** `[key]` folder creates dynamic segment
- **API Routes:** Must be in `route.ts` (not `page.tsx`)

### 10. Image Imports

Static images imported directly:

```typescript
import Photo from '@public/images/photo.webp';

<Image src={Photo} alt="..." />
```

Remote images must match `remotePatterns` in `next.config.ts`.

## Resources & References

**Documentation:**

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS 4: https://tailwindcss.com/docs
- Bun: https://bun.sh/docs
- View Transitions: https://github.com/shuding/next-view-transitions

**Key Dependencies:**

- `next-view-transitions` - Page transition animations
- `next-themes` - Dark mode support
- `@radix-ui/*` - Accessible UI primitives
- `class-variance-authority` - Component variants
- `date-fns` - Date formatting
- `@arcjet/next` - Security (likely rate limiting/protection)

**Project Files:**

- `/CLAUDE.md` - Claude Code-specific guidance
- `/package.json` - Dependencies and scripts
- `/next.config.ts` - Next.js configuration
- `/tailwind.config.ts` - Tailwind configuration
- `/src/lib/defs.ts` - Site data (SINGLE SOURCE OF TRUTH)
- `/src/lib/types.ts` - TypeScript definitions

## Questions or Uncertainty?

When in doubt:

1. **Check `defs.ts`** - Is the data already defined there?
2. **Check `types.ts`** - Is there an existing interface?
3. **Check similar components** - How do existing components handle this?
4. **Follow App Router patterns** - Use Next.js 15 conventions
5. **Use Bun commands** - Always `bunx --bun` for Next.js commands
6. **Maintain view transitions** - Use correct imports for Link/Router

---

**Last Updated:** 2025-12-22 (Generated by Claude)

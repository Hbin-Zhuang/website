# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website and blog built with **Astro**, **Vue 3**, and **UnoCSS**. The site runs on port 1977 and is deployed on Cloudflare at [hibson.tech](https://hibson.tech).

## Development Commands

### Essential Commands

- `npm run dev` - Start development server (runs on http://localhost:1977)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

### Content Management

- `npm run new-post "Title"` - Create new blog post (creates draft in `src/content/blog/`)
- `npm run generate-tags` - Generate tag pages automatically
- `npm run process-fragments` - Process and optimize content fragments

### Other Commands

- `npm run release` - Release new version using bumpp

## Architecture Overview

### Tech Stack

- **Framework**: Astro 5+ with SSG (Static Site Generation)
- **UI Components**: Vue 3 with Composition API
- **Styling**: UnoCSS with custom shortcuts and presets
- **Content**: MDX files with Astro Content Collections
- **Code Quality**: ESLint with @antfu/eslint-config, simple-git-hooks, lint-staged

### Key Directories Structure

```
src/
├── components/          # Vue components (Header, Footer, ThemeToggle, etc.)
├── content/            # Content collections
│   ├── blog/          # Blog posts (MDX/Markdown)
│   └── config.ts      # Content schema definitions
├── layouts/           # Astro layouts (BaseLayout.astro)
├── pages/             # Astro pages and API routes
├── styles/            # Global CSS (including prose.css for blog posts)
├── utils/             # Helper functions (blog-helpers.ts, posts.ts)
└── site-config.ts     # Site-wide configuration
```

### Content System

- **Blog posts** use Astro Content Collections defined in `src/content/config.ts`
- **Frontmatter schema** includes: title, description, date, category, tags, draft, featured, etc.
- **Categories**: tech, life, notes, talks
- **Blog helpers** in `src/utils/blog-helpers.ts` provide filtering, grouping, and related posts functionality
- **New posts** are created as drafts (draft: true) and must be manually published

### Styling System

- **UnoCSS configuration** in `uno.config.ts` with custom shortcuts
- **Theme system**: Dark/light mode with custom favicon switching
- **Custom shortcuts**: `bg-main`, `text-main`, `nav-link`, `prose-link`, etc.
- **Typography**: Inter font for sans-serif, IBM Plex Mono for monospace
- **Icons**: Iconify with various icon sets (Remix Icon, Simple Icons, Carbon)

### Component Architecture

- **Vue components** use `<script setup>` with TypeScript
- **Client directives**: Use `client:load` for interactive components (Header, ScrollToTop, ThemeToggle)
- **BaseLayout.astro**: Main layout with ViewTransitions, fade animations
- **Site configuration**: Centralized in `src/site-config.ts` for author info, navigation, social links

## Development Guidelines

### Code Style

- Uses **@antfu/eslint-config** with Vue, TypeScript, and Astro support
- **Auto-formatting** enabled for Astro, CSS, HTML, and Markdown
- **Pre-commit hooks** run `lint:fix` automatically via simple-git-hooks
- **End-of-line** enforcement: files must end with newline

### Content Creation

- **Blog posts** are in `src/content/blog/` as `.md` or `.mdx` files
- **Draft system**: New posts start with `draft: true`, change to `false` to publish
- **Tagging**: Supports both single `tag` and multiple `tags` array
- **Categories**: Must be one of: tech, life, notes, talks
- **Images**: Store in `src/content/blog/images/` directory

### Testing & Quality

- **Linting**: ESLint runs on CI for main branch pushes and PRs
- **No test framework** currently configured
- **CI**: GitHub Actions runs lint checks on Node.js LTS

## Site Configuration

### Key Configuration Files

- `src/site-config.ts` - Author info, navigation, social links, footer
- `src/content/config.ts` - Content collection schemas
- `astro.config.ts` - Astro configuration, integrations, markdown settings
- `uno.config.ts` - UnoCSS styling configuration

### Deployment

- **Platform**: Netlify with automatic deployments from main branch
- **Domain**: hibson.tech
- **Build command**: `npm run build`
- **Publish directory**: `dist/`

### Node.js Requirements

- **Node.js**: 18+ (LTS recommended)
- **npm**: 10+ (comes with Node.js)
- **Package manager**: Uses npm (not yarn or pnpm)

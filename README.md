# My Personal Website

🌐 **Live Site**: [hibson.tech](https://hibson.tech)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - The web framework for content-driven websites
- **UI Library**: [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- **Styling**: [UnoCSS](https://unocss.dev/) - Instant on-demand atomic CSS engine
- **Content**: [MDX](https://mdxjs.com/) - Markdown with JSX components
- **Utilities**: [VueUse](https://vueuse.org/) - Collection of Vue composition utilities
- **Icons**: [Iconify](https://iconify.design/) - Unified icon framework
- **Deployment**: [Netlify](https://netlify.com/) - Modern web deployment platform

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm 10+ (comes with Node.js)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/hbin-zhuang/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:1977](http://localhost:1977) to see the site.

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📝 Content Management

### Creating Blog Posts

Use the built-in script to create new blog posts:

```bash
npm run new-post
```

This will create a new markdown file with proper frontmatter in the `src/content/blog/` directory.

### Managing Tags

Generate tag pages automatically:

```bash
npm run generate-tags
```

### Processing Content Fragments

Process and optimize content fragments:

```bash
npm run process-fragments
```

## 🎨 Customization

### Site Configuration

Edit `src/site-config.ts` to customize:

- Personal information
- Social links
- Navigation menu
- Footer content

### Styling

The site uses UnoCSS for styling. You can:

- Modify existing styles in component files
- Add custom CSS in `src/styles/`
- Configure UnoCSS in `uno.config.ts`

### Theme Colors

The site supports automatic dark/light theme switching with custom favicons:

- Light theme: `/favicon.svg`
- Dark theme: `/favicon-dark.png`

## 🔧 Development Scripts

| Command                     | Description               |
| --------------------------- | ------------------------- |
| `npm run dev`               | Start development server  |
| `npm run build`             | Build for production      |
| `npm run preview`           | Preview production build  |
| `npm run lint`              | Run ESLint                |
| `npm run lint:fix`          | Fix ESLint issues         |
| `npm run new-post`          | Create new blog post      |
| `npm run generate-tags`     | Generate tag pages        |
| `npm run process-fragments` | Process content fragments |
| `npm run release`           | Release new version       |

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── Header.vue      # Site header with navigation
│   ├── ThemeToggle.vue # Dark/light theme switcher
│   └── ...
├── content/            # Content collections
│   ├── blog/          # Blog posts (Markdown/MDX)
│   └── projects/      # Project showcases
├── layouts/           # Astro layouts
├── pages/             # Astro pages and API routes
├── styles/            # Global styles
├── utils/             # Utility functions
└── site-config.ts     # Site configuration
```

## 🚀 Deployment

This site is deployed on [Cloudflare](https://cloudflare.com) with automatic deployments from the main branch.

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hbin-zhuang/website)

### Other Deployment Options

- **Vercel**: Connect your GitHub repo to Vercel
- **GitHub Pages**: Use GitHub Actions for deployment
- **Cloudflare Pages**: Connect your repo to Cloudflare Pages

---

Built with ❤️ using [Astro](https://astro.build), [Vue](https://vuejs.org), and [UnoCSS](https://unocss.dev)

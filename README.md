# Nishu Mittal | Frontend Developer Portfolio

A modern, premium portfolio website built with React, TypeScript, Tailwind CSS, TanStack Router, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- ✨ Modern, clean UI with glassmorphism effects
- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive design (mobile-first)
- 🎭 Smooth animations with Framer Motion
- 🚀 Type-safe routing with TanStack Router
- ♿ Accessible (WCAG AA compliant)
- 🔍 SEO optimized
- ⚡ Performance optimized
- 🎨 Custom theme with Tailwind CSS
- 📝 Working contact form UI

## Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.x
- **Routing:** TanStack Router
- **Animations:** Framer Motion
- **Icons:** Custom SVG icons
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nishu-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
nishu-portfolio/
├── public/                 # Static assets
│   ├── favicon.svg        # Favicon
│   └── og-image.png       # Open Graph image
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── SkillBadge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   └── Icon.tsx
│   │   ├── layout/       # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/     # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       └── Contact.tsx
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/            # Portfolio data
│   │   └── portfolio.ts
│   ├── hooks/           # Custom hooks
│   │   ├── useTheme.ts
│   │   └── useScrollAnimation.ts
│   ├── routes/          # TanStack Router routes
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── styles/          # Global styles
│   │   └── index.css
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── utils/           # Utility functions
│   │   └── helpers.ts
│   ├── main.tsx         # App entry point
│   └── vite-env.d.ts    # Vite TypeScript types
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS config
├── tailwind.config.js   # Tailwind config
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite config
```

## Customization

### Update Portfolio Information

Edit `src/data/portfolio.ts` to update:
- Profile information
- Skills
- Projects
- Experience
- Social links

### Modify Theme Colors

Edit `tailwind.config.js` to customize:
- Primary colors
- Accent colors
- Dark mode colors
- Custom animations

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/routes/index.tsx`
3. Update the Navbar links if needed

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'dist' directory
```

### GitHub Pages

1. Install `gh-pages` package:
```bash
npm install -D gh-pages
```

2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Scripts

| Command | Description |
|---------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `preview` | Preview production build |
| `type-check` | Run TypeScript type checking |
| `lint` | Run ESLint |

## UI/UX Design Decisions

### Color Palette
- **Primary Blue (#0ea5e9):** Trustworthy, professional, tech-focused
- **Accent Purple (#a855f7):** Modern touch without being flashy
- **Why:** Blue is standard for tech portfolios; purple adds personality

### Typography
- **Font:** Inter - Clean, highly readable, modern
- **Why:** Excellent legibility at all sizes

### Glassmorphism
- Subtle backdrop blur with semi-transparent backgrounds
- **Why:** Modern, premium feel without being distracting

### Animation Strategy
- Entry animations (fade-in, slide-up) for initial impression
- Hover effects for interactivity feedback
- Scroll-triggered reveals for engagement
- **Why:** Guides attention, provides feedback, not overwhelming

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Skip to content link
- Color contrast compliance (WCAG AA)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use this project for your own portfolio!

## Credits

Built with ❤️ by [Nishu Mittal](https://nishumittal.com)

---

**Note:** This is a portfolio template. Make sure to replace placeholder content with your own information before deploying.

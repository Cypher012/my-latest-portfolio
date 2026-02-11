# Ayowole Ojoade — Portfolio

Personal portfolio website for **Ayowole Ojoade** (Cipher), a Full-Stack Software Engineer specializing in TypeScript/React frontends and Go backends.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter · Space Grotesk · Roboto Slab |

## Features

- Animated geometric dot-grid background (canvas)
- Letter-stagger hero animation with Roboto Slab display font
- Typewriter effect for job title
- Magnetic CTA buttons
- Responsive floating navbar on desktop
- Bottom icon dock on mobile with magnification effect and tooltips
- Bento-grid project layout
- Left-aligned experience timeline
- Count-up stat cards in About section
- Section transitions (dots, slash, line variants)
- Active section tracking across all nav items
- Full SEO metadata + Open Graph

## Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Tailwind imports + custom animations
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Main page — composes all sections
├── components/
│   ├── Navbar.tsx           # Floating navbar (desktop) + dock (mobile)
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About + stats
│   ├── Skills.tsx           # Skills grid
│   ├── Experience.tsx       # Timeline
│   ├── Projects.tsx         # Bento grid
│   ├── Contact.tsx          # Contact + social links
│   ├── GeometricBackground.tsx       # Animated canvas background
│   ├── ClientGeometricBackground.tsx # Client wrapper for SSR
│   └── SectionTransition.tsx         # Section dividers
├── lib/
│   └── data.ts              # Typed resume data
└── data/
    └── resume.json          # Raw resume data
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

## Customization

All personal data lives in one place — update `data/resume.json` and `lib/data.ts` to change name, experience, projects, skills, and contact links. No changes needed anywhere else.

## Contact

- Email: [ayoojoade@gmail.com](mailto:ayoojoade@gmail.com)
- GitHub: [@Cypher012](https://github.com/Cypher012)
- LinkedIn: [Ayowole Ojoade](https://www.linkedin.com/in/ayowole-ojoade-aa1050257)
- X: [@blaqcipher02](https://x.com/blaqcipher02)

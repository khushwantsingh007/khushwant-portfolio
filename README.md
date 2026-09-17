# Khushwant Singh — Developer Portfolio

> **Production-Grade Personal Portfolio Website**  
> *Engineered with React 18, TypeScript, Tailwind CSS, Framer Motion, and GitHub REST API integration.*

---

## 🌟 Overview

A modern, high-performance personal developer portfolio built for **Khushwant Singh** (Software Developer, Full-Stack Developer, and AI / Computer Vision Developer; B.Tech CSE '27 at Graphic Era Hill University).

The website emphasizes **technical depth, authentic engineering architectures, and visual polish**:
- **Flagship Project Showcase**: Substantial visual centerpiece dedicated to **Smart CCTV Analytics Platform** (YOLOv8, OpenCV, FastAPI, React, WebSockets, MongoDB, ReportLab).
- **Interactive Architecture Pipeline**: Visual flow diagram illustrating multi-feed RTSP/webcam capture, threaded OpenCV workers, YOLOv8 inference, spatial polygon ray-casting, 2D vector tripwires, and sub-second WebSocket telemetry.
- **Developer Terminal Interface**: Custom interactive terminal (`khushwant@developer:~$`) featuring clickable quick commands, live system status, and syntax-highlighted output.
- **Dynamic GitHub REST API Integration**: Fetches and categorizes live repositories from `khushwantsingh007` with animated category filters, star/fork telemetry, and resilient offline/rate-limit fallback.
- **Accessible Case Study Modals**: Reusable dialog modals with ESC close, body scroll lock, architecture diagrams, and challenge breakdown.
- **Dual-Theme Support**: Dark-first SaaS developer aesthetic with seamless Light mode switcher persisted in `localStorage`.
- **Zero Hallucinations**: Built with 100% verified academic and project data.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties (`index.css`), Glassmorphism, Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`)
- **Animations & Micro-interactions**: Framer Motion & CSS Keyframes (respecting `prefers-reduced-motion`)
- **Icons**: Lucide React + custom SVG icons for GitHub, LinkedIn, and LeetCode
- **API & Networking**: Native `fetch` with `sessionStorage` caching & GitHub REST API
- **Deployment Target**: Vercel

---

## 📁 Project Structure

```
khushwant-portfolio/
│
├── public/
│   ├── favicon.svg              # Custom KS monogram SVG vector favicon
│   ├── resume.pdf               # Resume document (ready for your latest PDF)
│   ├── robots.txt               # SEO search engine crawlers configuration
│   ├── sitemap.xml              # SEO sitemap
│   └── projects/
│       ├── cctv-dashboard.svg   # Multi-camera matrix interface preview
│       ├── cctv-detection.svg   # YOLOv8 polygon & tripwire detection frame
│       ├── cctv-alerts.svg      # Real-time WebSocket incident center
│       └── cctv-analytics.svg   # Passage flow & class distribution charts
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glass navbar, scroll spy & mobile drawer
│   │   ├── Hero.tsx             # Main headline, value prop & CTAs
│   │   ├── TerminalVisual.tsx   # Interactive developer CLI terminal
│   │   ├── About.tsx            # Concise bio & 3 highlight cards
│   │   ├── Skills.tsx           # Categorized skill badges (Languages, Vision, DB)
│   │   ├── FeaturedProject.tsx  # Smart CCTV flagship showcase & screenshot switcher
│   │   ├── ArchitectureDiagram.tsx # Interactive pipeline flow diagram
│   │   ├── Projects.tsx         # GitHub API projects grid & category filters
│   │   ├── ProjectCard.tsx      # Individual project card with telemetry
│   │   ├── ProjectModal.tsx     # Accessible case study modal
│   │   ├── Experience.tsx       # Unified Mentor exposure card
│   │   ├── Education.tsx        # Graphic Era Hill University (B.Tech CSE '27)
│   │   ├── CodingProfiles.tsx   # GitHub, LeetCode, CodeChef, LinkedIn
│   │   ├── Resume.tsx           # Resume preview & download CTA
│   │   ├── Contact.tsx          # Direct contact info & transparent mailto form
│   │   ├── Footer.tsx           # Monogram branding, back-to-top & copyright
│   │   ├── Icons.tsx            # Custom SVG icons (GitHub, LinkedIn, LeetCode)
│   │   ├── ThemeToggle.tsx      # Light/Dark mode toggle
│   │   └── NotFound.tsx         # 404 route fallback
│   │
│   ├── data/
│   │   ├── profile.ts           # Centralized personal info & terminal commands
│   │   ├── skills.ts            # Categorized technology stack
│   │   ├── projects.ts          # Curated projects metadata & case studies
│   │   ├── experience.ts        # Editable internship exposure
│   │   ├── education.ts         # University degree & coursework
│   │   └── codingProfiles.ts    # Developer platform URLs & badges
│   │
│   ├── services/
│   │   └── github.ts            # GitHub REST API client with caching & fallback
│   │
│   ├── hooks/
│   │   ├── useGithubRepos.ts    # Custom hook for repo fetching & state
│   │   └── useTheme.ts          # Theme switcher hook with OS synchronization
│   │
│   ├── types/
│   │   └── project.ts           # TypeScript interfaces
│   │
│   ├── App.tsx                  # Main app container assembling all sections
│   ├── main.tsx                 # React DOM entry point
│   └── index.css                # Design system tokens & utility classes
│
├── index.html                   # HTML entry point with SEO meta & fonts
├── tailwind.config.js           # Design system colors, fonts & shadows
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite bundler config
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v22.x recommended)
- **npm**: v9.0.0 or higher

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```

### 3. Production Build
Compile TypeScript and build the optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Customization Guide

### 1. Update Personal Data
All personal details are centralized in `src/data/`:
- **`src/data/profile.ts`**: Update your email, phone number, social links, or terminal command outputs.
- **`src/data/experience.ts`**: Customize your exact dates, role title, and responsibilities for **Unified Mentor Pvt. Ltd.** or add new roles.
- **`src/data/education.ts`**: Update coursework or graduation year if needed.
- **`src/data/skills.ts`**: Add or modify technology categories and skill badges.

### 2. Replace the Resume PDF
Simply drop your updated resume file into:
```
public/resume.pdf
```
Both the **"View Resume"** and **"Download Resume"** buttons point directly to `/resume.pdf`.

### 3. Add Actual Smart CCTV Screenshots
You can add your actual webcam/CCTV screenshots to:
```
public/projects/
├── cctv-dashboard.png
├── cctv-detection.png
├── cctv-alerts.png
└── cctv-analytics.png
```
Then update the paths in `src/data/projects.ts` and `src/components/FeaturedProject.tsx` from `.svg` to `.png`.

---

## 🌐 Deploying to Vercel

1. Push your repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Khushwant Singh Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/khushwantsingh007/<your-repo-name>.git
   git push -u origin main
   ```

2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your portfolio will be live with free automated SSL and global CDN in under 60 seconds!

---

## 📄 License
MIT © 2026 [Khushwant Singh](https://github.com/khushwantsingh007). All rights reserved.

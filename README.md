<div align="center">

# 🧭 GearPilot

**Find the right laptop — without the spec-sheet headache.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-gearpilot--v1.vercel.app-4f46e5?style=for-the-badge)](https://gearpilot-v1.vercel.app)
[![Version](https://img.shields.io/badge/version-1.0-10b981?style=for-the-badge)](#)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br/>

A modern laptop recommendation platform built for **Indian students, developers, creators, and professionals** — combining curated recommendations, smart filtering, side-by-side comparisons, and a personalized quiz to simplify every laptop buying decision.

</div>

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| 🔍 **Smart Search** | Search by laptop name, brand, or processor in real time |
| 🎯 **Recommendation Quiz** | 3-step guided quiz (use-case → budget → priority) that scores & ranks laptops for you |
| 🏷️ **Advanced Filters** | Filter by budget range, use-case (coding / gaming / editing / college), and more |
| ⚖️ **Side-by-Side Comparison** | Compare up to 3 laptops spec-for-spec with a sticky compare tray |
| ❤️ **Favorites** | Save laptops to a persistent favorites list (localStorage) |
| 📋 **Detailed Spec Modal** | Dive deep into specs, pros & cons, scoring breakdowns, and buy links |
| 🧮 **Multi-Criteria Scoring** | Laptops are scored across 5 dimensions — overall, student, coding, gaming, creator |
| 📖 **Buying Guide** | Contextual tips to help first-time buyers understand specs |
| 📄 **Pagination** | Smooth paginated browsing across 50+ curated models |
| 🎨 **Polished UX** | Page transitions, micro-animations, glassmorphism, and a dark-mode-first design |
| 📱 **Fully Responsive** | Works seamlessly on desktop, tablet, and mobile screens |

---

## 🛠 Tech Stack

<<<<<<< HEAD
| Layer | Technologies |
| :--- | :--- |
| **Framework** | React 19 · TypeScript 5.8 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router 7 |
| **Animations** | Motion (Framer Motion) |
| **Icons** | Lucide React |
| **Deployment** | Vercel |
=======
### Frontend
- React
- TypeScript
- Vite
- React Router
- Framer Motion
- Open router API

### Deployment
- Vercel

### Planned Backend (v2)
- Node.js
- Express.js
- MongoDB
- JWT Authentication
>>>>>>> bc4ca9370533fc8af5f21483134807f9a8d99399

---

## 📁 Project Structure

```
gearpilot/
├── public/              # Brand SVG logos (Acer, Apple, ASUS, Dell, …)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── CompareTray      — Sticky bottom bar for comparison
│   │   ├── CustomSelect     — Styled dropdown select
│   │   ├── FilterSidebar    — Budget & use-case filters
│   │   ├── Footer           — Site footer
│   │   ├── Header           — Navigation bar
│   │   ├── HeroSection      — Landing hero with CTA
│   │   ├── LaptopCard       — Product card with scoring
│   │   ├── LaptopDetailModal— Full-spec detail overlay
│   │   └── QuizModal        — 3-step recommendation quiz
│   ├── data/
│   │   └── laptops.ts       — Curated dataset of 50+ laptops
│   ├── hooks/
│   │   ├── useCompare.ts    — Comparison state management
│   │   ├── useFavorites.ts  — Persistent favorites (localStorage)
│   │   └── useFilters.ts    — Filter & search logic
│   ├── pages/
│   │   ├── Home.tsx         — Main discovery page
│   │   ├── Compare.tsx      — Side-by-side comparison view
│   │   └── Favorites.tsx    — Saved laptops page
│   ├── utils/
│   │   ├── buyLinks.ts      — Buy-link resolver
│   │   ├── buyingGuide.ts   — Contextual buying tips
│   │   └── scoring.ts       — Multi-criteria scoring algorithm
│   ├── types.ts             — Shared TypeScript interfaces
│   ├── App.tsx              — Route definitions
│   ├── main.tsx             — App entry point
│   └── index.css            — Global styles & design tokens
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/MuktharMJ/GearPilot.git
cd GearPilot

# Install dependencies
npm install

# Start the dev server (localhost:3000)
npm run dev
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run TypeScript type-checking |
| `npm run clean` | Remove build artifacts |

---

## 🧠 How the Scoring Works

Each laptop is evaluated across **5 scoring dimensions** (out of 100) using a weighted combination of CPU, GPU, RAM, storage, display, battery, and weight specs:

| Dimension | What it prioritizes |
| :--- | :--- |
| **Overall** | Balanced score across all factors |
| **Student** | Portability, battery life, and value |
| **Coding** | CPU power, RAM, and display quality |
| **Gaming** | GPU, CPU, display, and cooling headroom |
| **Creator** | Display quality, GPU, RAM, and storage |

Scores are displayed on every laptop card and in the detail modal, so users can instantly gauge which laptop fits their needs.

---

## 🗺 Roadmap

- [x] **v1** — Frontend MVP with discovery, comparison, favorites & quiz
- [ ] **v2** — Backend with Node.js + Express + MongoDB
- [ ] User accounts & JWT authentication
- [ ] Cloud-synced favorites & preferences
- [ ] AI-powered personalized recommendations
- [ ] Price tracking & deal alerts
- [ ] Community reviews & ratings

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve GearPilot:

1. **Fork** the repository
2. Create a feature branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m "Add amazing feature"`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a **Pull Request**

---

## 👤 Author

**Mukthar M J**

B.Tech Computer Science Engineering (Software Product Engineering)

Built as a personal project to simplify laptop purchasing decisions for Indian students and professionals.

---

<div align="center">

Made with ❤️ for the Indian tech community

</div>

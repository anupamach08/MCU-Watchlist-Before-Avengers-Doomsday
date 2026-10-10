# MCU Doomsday Watchlist

> **Your MCU Watchlist Before Avengers: Doomsday**  
> An independent, opinionated viewing guide designed to help fans navigate the Marvel Cinematic Universe before *Avengers: Doomsday*. Explore in alphabetical order, release date order, or chronological order, and see which titles you can skip.

---

## 🚀 Key Features

- **Three Viewing Modes**:
  1. **All (A–Z)** (`#/all`): All 66 unique titles grouped under letter headings (A, B, C, D, E, G, H, I, L, M, S, T, W, X, Y), preserving leading articles (e.g. *The Incredible Hulk* is properly filed under **T**).
  2. **Release Date** (`#/release`): Exact 66-title sequence grouped under sagas and phases (X-Men Collection, Infinity Saga Phases 1–3, Multiverse Saga Phases 4–6) with collapsible section headers.
  3. **Chronological Order** (`#/chronological`): Exact 60-title storyline viewing order with sequence badges, excluding non-timeline entries (*X-Men*, *X2*, *Your Friendly Neighborhood Spider-Man*, *Daredevil: Born Again S2*, *The Punisher: One Last Kill*, and *Spider-Man: Brand New Day*).
- **Copyright-Free Generated Posters**:
  - 100% of titles render an original algorithmic CSS/SVG portrait poster (2:3 aspect ratio).
  - Built with seeded color gradients, abstract generative geometry (light rays, perspective grids, particles, concentric rings, halftone screens), monogram badges, format strips, and high-contrast title typography.
  - Pluggable image interface: supports optional Creative Commons Zero (CC0) / Public Domain external images with automatic vector fallback on load error.
- **Strict Label System (Section 7)**:
  - Feature films receive **no tags**.
  - Only the 26 curated television, animation, and special presentations display editorial labels.
  - *Loki* Seasons 1 & 2 feature green priority tags (`--green-bg`, `--green-text`, `--green-border`).
  - *Moon Knight* features an amber highlight on "Masterpiece".
  - Neutral dark pills for standard titles with WCAG AA compliant contrast.
- **Doomsday Live Countdown**:
  - Dynamically calculates remaining time to *Avengers: Doomsday* (configured in `src/data/siteConfig.ts`).
  - Automatically transitions to "Now in theatres" after the release date passes.
- **Real-Time Search & Multi-Criteria Filtering**:
  - Search by title, phase, or label keyword.
  - Filter by format (*Movies*, *TV Series / Mini-Series*, *Animated*, *Special Presentations*).
  - Toggles for *Most Important only*, *Hide "Can skip"*, and *Unwatched only*.
  - A–Z / Z–A direction toggle.
- **Zero-Backend Watched Progress**:
  - LocalStorage tracking with interactive checkmarks on cards.
  - Dynamic progress indicator (*X of Y watched*).
  - Reset progress button with an accessible confirmation dialog.
- **Accessibility & Contrast Compliance**:
  - Fully passes WCAG AA contrast requirements (≥ 4.5:1 for body and badge text).
  - 2px focus rings on all interactive elements.
  - Responsive down to 360px mobile width (2 columns, zero horizontal overflow).
  - Respects `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS with custom CSS variable design tokens
- **Icons**: Lucide React
- **Typography**: `@fontsource/oswald` (headings) & `@fontsource/inter` (body & labels)
- **Validation**: Custom automated test runners for WCAG AA contrast & dataset integrity

---

## 🎨 Color Tokens & Design System

Defined in `src/index.css` and mapped in `tailwind.config.js`:

| Token | Hex Value | Usage | WCAG AA Ratio |
|---|---|---|---|
| `--bg` | `#0A0A0F` | Page background | Base |
| `--surface` | `#14141C` | Cards, panels | 16.82:1 |
| `--surface-2` | `#1D1D28` | Hover states, inputs | 15.32:1 |
| `--border` | `#2E2E3D` | Card and section borders | N/A |
| `--text` | `#F5F5F7` | Primary text | 18.14:1 |
| `--text-muted` | `#B8BCC8` | Secondary / muted text | 10.41:1 |
| `--accent` | `#E11D2E` | Filled buttons, active tabs | 4.75:1 (white text) |
| `--accent-text` | `#FF6B78` | Red accent text on dark surfaces | 7.17:1 |
| `--green-bg` | `#0F3D24` | "Most Important" badge background | Base |
| `--green-text` | `#86F7B0` | "Most Important" badge text | 9.31:1 |
| `--green-border` | `#22C55E` | "Most Important" badge border | N/A |
| `--amber-text` | `#FFD27A` | "Masterpiece" highlight text | 11.72:1 |

---

## 📦 Project Structure

```
├── public/
│   └── favicon.svg              # Custom SVG shield icon
├── scripts/
│   ├── checkContrast.ts        # WCAG AA contrast ratio verification script
│   ├── validateData.ts         # Dataset integrity & 66-title assertion script
│   └── testSuite.ts            # 12-criteria comprehensive regression test suite
├── src/
│   ├── components/
│   │   ├── EssentialPicks.tsx  # Loki S1 & S2 priority showcase section
│   │   ├── FilterPanel.tsx     # Format pills & filter toggles
│   │   ├── Footer.tsx          # Dynamic copyright & full legal disclaimer
│   │   ├── FormatLabel.tsx     # Section 7 editorial label pill
│   │   ├── GeneratedPoster.tsx # 2:3 procedural SVG/CSS poster artwork
│   │   ├── Header.tsx          # Top navigation bar with live countdown
│   │   ├── Hero.tsx            # Cinematic hero with countdown & CTAs
│   │   ├── MovieCard.tsx       # Unified card (Poster + Title + Label + Checkbox)
│   │   ├── MovieGrid.tsx       # Grid renderer for A–Z, Release, & Chrono views
│   │   ├── NavigationTabs.tsx  # Sticky tab bar for #/all, #/release, #/chronological
│   │   ├── SearchBar.tsx       # Real-time title search input
│   │   ├── SourcesModal.tsx    # Modal detailing methodology & conflict resolutions
│   │   └── WatchProgress.tsx   # Progress bar & reset confirmation modal
│   ├── data/
│   │   ├── chronologicalOrder.ts # 60-item chronological sequence & exclusions
│   │   ├── releaseOrder.ts     # 66-item release order & phase groupings
│   │   ├── siteConfig.ts       # Release date, site identity & disclaimers
│   │   ├── sourcesData.ts      # Methodology and documented conflict resolutions
│   │   └── titles.ts           # Canonical 66-title dataset (Single Source of Truth)
│   ├── hooks/
│   │   ├── useHashRoute.ts     # Synchronizes URL hash with tab state
│   │   └── useWatchProgress.ts # LocalStorage watched tracker hook
│   ├── utils/
│   │   ├── filterTitles.ts     # Multi-criteria filter algorithms
│   │   ├── posterColor.ts      # Deterministic poster theme mappings
│   │   ├── sortTitles.ts       # Alphabetical sorting with "The" preservation
│   │   └── validateTitles.ts   # Core schema validation functions
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🏃 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```

### 3. Running Automated Tests
Run all verification scripts (contrast audit, dataset checks, and 12-criteria regression suite):
```bash
npm test
```
Or run individual suites:
```bash
npm run test:contrast  # Tests all color pairs for WCAG AA compliance (≥ 4.5:1)
npm run test:data      # Validates title counts, labels, exclusions, and sorting
npm run test:suite     # Runs full 12-criteria regression test
```

### 4. Production Build
Compile and bundle the production assets:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ How to Update and Customize Content

### Updating the *Avengers: Doomsday* Release Date
Open `src/data/siteConfig.ts` and update the `doomsdayReleaseDate` ISO 8601 string:
```typescript
// Official projected release date: December 18, 2026
doomsdayReleaseDate: '2026-12-18T00:00:00Z',
```
The countdown ticker and "Now in theatres" banner will update automatically across the site.

### Adding or Updating MCU Titles
All titles reside in `src/data/titles.ts` as the single source of truth:
```typescript
'new-title-slug': {
  id: 'new-title-slug',
  title: 'Canonical Title Display Name',
  format: 'Movie', // 'Movie' | 'TV Series' | 'TV Mini-Series' | 'Animated Series' | 'Special Presentation'
  badgeText: 'NT', // 2-3 character watermark for the generated poster
  posterHue: 'crimson', // 'crimson' | 'steel' | 'teal' | 'violet' | 'gold' | 'emerald'
  patternType: 'rays', // 'rays' | 'grid' | 'particles' | 'concentric' | 'halftone'
  label: undefined, // Movies get no label. TV/Specials use exact Section 7 strings.
}
```
Then reference the ID in `src/data/releaseOrder.ts` and `src/data/chronologicalOrder.ts`.

### Adding CC0 / Public Domain Poster Images
To add an external photograph, populate the optional `poster` field in `src/data/titles.ts`:
```typescript
poster: {
  url: '/posters/spider-man.webp',
  alt: 'Spider-Man poster artwork',
  license: 'CC0 Public Domain',
  attribution: 'Photographer Name via Unsplash',
  sourceUrl: 'https://unsplash.com/...',
}
```
If the image file is missing or fails to load, `GeneratedPoster.tsx` will seamlessly fall back to the procedural SVG vector artwork with zero layout shift.

---

## 🌐 Deployment Instructions

### Vercel
1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Netlify
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**.

### Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select this repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Click **Save and Deploy**.

---

## ⚖️ Legal & Copyright Disclaimer

This is an independent, fan-made watchlist for informational and entertainment purposes. It is not affiliated with, endorsed by, or sponsored by Marvel Studios, Disney, or any other rights holder. Marvel-related titles, characters, trademarks, posters, and other materials remain the property of their respective owners.

Copyright © 2026 Anupam Acharya. All rights reserved. The copyright covers solely the site's original code, architecture, generative poster algorithms, and editorial text.

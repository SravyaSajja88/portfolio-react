# Sravya Sajja — Interactive Multi-Page Portfolio (React)

Assignment 2 · CS1303 Full Stack Development · NIT Warangal

A React rebuild of the static Assignment 1 portfolio, with reusable
components, client-side routing, and interactive state.

## 1. Setup & Run Instructions

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open the printed local URL (usually http://localhost:5173)

# 3. Production build (must complete with zero console errors)
npm run build
npm run preview
```

> **Note on images:** `src/assets/profile.jpg` and the project thumbnails
> referenced in `src/data/projects.js` are placeholders. Drop your own
> images into `src/assets/` with matching filenames (or update the paths
> in `Home.jsx` / `projects.js`) — the app renders fine without them since
> broken `<img>` tags are hidden gracefully on project cards.

## 2. Component Tree

```
main.jsx
└─ App.jsx                     (theme state lives here, provided via Context)
   └─ Routes
      └─ Layout.jsx             (shared shell: Navbar + <Outlet/> + Footer)
         ├─ Navbar.jsx          (NavLink routes + theme toggle + resize listener)
         ├─ <Outlet/>  → one of:
         │    ├─ Home.jsx              (simulated loading, hero)
         │    ├─ About.jsx             (about / education / skills)
         │    ├─ Projects.jsx          (maps projects.js → ProjectCard)
         │    │    └─ ProjectCard.jsx  (generic, all data via props)
         │    │         └─ TechList.jsx    (prop-drilled techStack)
         │    │              └─ TechChip   (prop-drilled single tech label)
         │    ├─ ProjectDetail.jsx     (useParams → project lookup)
         │    │    └─ TechList.jsx
         │    ├─ Contact.jsx
         │    │    └─ ContactForm.jsx  (controlled inputs + validation state)
         │    └─ NotFound.jsx          (catch-all "*" route)
         └─ Footer.jsx
```

### State-lifting decisions

- **Theme (dark/light)** is the one piece of state genuinely needed by
  components in *different* branches of the tree (Navbar's toggle button,
  and every page's CSS variables). It's lifted all the way to `App.jsx`
  and shared through `ThemeContext` rather than passed down as props
  through `Layout` → every page, which would mean threading it through
  components that don't otherwise care about it.
- **Project data** (`src/data/projects.js`) is passed as props from
  `Projects.jsx` into `ProjectCard`, and from there into `TechList` and
  `TechChip` — a genuine 3-level prop-drilling chain, since only those
  three components need that specific slice of data and nothing else in
  the tree depends on it.
- **"View details" expand state** and the **contact form's field values /
  errors** are kept local (`useState` inside `ProjectCard.jsx` and
  `ContactForm.jsx`) because no other component needs to know about them —
  lifting them up would only add unnecessary re-renders elsewhere.

## 3. useEffect Hooks Implemented

| Location | Trigger | Why it's needed |
|---|---|---|
| `Home.jsx` | `useEffect(..., [])` on mount | Simulates a ~1s loading sequence with `setTimeout` before showing the hero content; the returned cleanup function clears the timer if `Home` unmounts early (e.g. fast navigation away). |
| `App.jsx` | `useEffect(..., [theme])` | Persists the current theme to `localStorage` and applies `data-theme` to `<html>` every time `theme` changes, so the choice survives a page reload. |
| `Navbar.jsx` | `useEffect(..., [])` with `window.addEventListener('resize', ...)` | Tracks viewport width for responsive nav collapse behaviour; the cleanup function removes the listener on unmount to avoid a memory leak. |

## 4. Deliverable Checklist

- [x] Reusable components: `Navbar`, `ProjectCard`, `ContactForm`, `TechList`, `Footer`
- [x] `ProjectCard` is fully generic — no hardcoded content, all via props
- [x] 3 projects rendered by mapping `src/data/projects.js`
- [x] Prop drilling ≥ 2 levels (`Projects` → `ProjectCard` → `TechList` → `TechChip`)
- [x] Theme toggle state lifted to `App`, shared via Context
- [x] Controlled contact form with validation `errors` state, submit disabled until valid
- [x] Per-card "view details" state, scoped independently per instance
- [x] `useEffect` loading simulation on `Home` (mount-only, cleanup)
- [x] `useEffect` theme persistence to `localStorage`
- [x] `useEffect` resize listener with cleanup
- [x] `react-router-dom` with `/home`, `/about`, `/projects`, `/contact`
- [x] Shared layout (Navbar + Footer persist across routes)
- [x] Dynamic route `/projects/:projectId` via `useParams`
- [x] Catch-all `*` 404 route with link back to Home
- [x] All nav links use `<Link>` / `<NavLink>`
- [x] Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- [x] Responsive breakpoints preserved (768px / 480px)
- [x] Functional components + Hooks only, no class components
- [x] No Redux/Zustand — only `useState` / `useEffect` / props
- [x] No UI component libraries — hand-written CSS only

## 5. Folder Structure

```
src/
├── components/   # Navbar, Footer, ProjectCard, TechList, ContactForm
├── pages/        # Layout, Home, About, Projects, ProjectDetail, Contact, NotFound
├── data/         # projects.js
├── context/      # ThemeContext.jsx
├── assets/       # images (add your own)
├── App.jsx
├── main.jsx
└── index.css
```

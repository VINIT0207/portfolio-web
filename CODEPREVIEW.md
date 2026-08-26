# Portfolio Update — Code Preview

## Overview
This preview contains all proposed file changes for the portfolio rebranding and content expansion. Review the code below, then copy the updated files from `artifacts/portfolio/src/preview/` into their final locations when ready.

---

## Files Changed

### 1. `Hero.tsx` — Global Re-branding & Title Update
- **Title** changed to: `Full-Stack App Developer`
- **Hero summary** updated to explicitly highlight competence in engineering both client frontends and scalable, clean backend server code.
- **Tags** expanded to include `ANDROID` and `KOTLIN` to reflect the new identity.

### 2. `AdvancedArchitectureSkills.tsx` — New Section
- A new dedicated section (`id="architecture"`) rendering 5 high-impact cards:
  - MVVM Pattern
  - CRUD Operations
  - RESTful APIs
  - Write-Ahead Logging (WAL)
  - System-Level Debugging
- Styled consistently with the existing `Services` section but uses a violet/pink accent to feel distinct.

### 3. `WorkShowcase.tsx` — Project Cards Refactored
- **SubZero (v1.0.0)** added as a featured engineering asset:
  - Tagline, production status, binary footprint, tech badges, and punchy achievements displayed concisely inside the card.
  - Kept within the same grid so it does not dominate the portfolio.
- **Upcoming Project** teaser card added:
  - Suspense-style dashed border card with pulsing badge, ecosystem stack, and description.
- Existing projects (FinPulse, ClassTrack) remain untouched in structure and hover behavior.

### 4. `Home.tsx` — Layout Integration
- Imports and renders the new `AdvancedArchitectureSkills` section between `Services` and `Process`.
- All existing lazy-loading and section fallbacks preserved.

### 5. `Navbar.tsx` — Navigation Link
- Added `Architecture` nav item linking to `#architecture` for the new section.

---

## Deployment Instructions
1. Review the files in `artifacts/portfolio/src/preview/`.
2. When approved, copy each preview file over its counterpart in `artifacts/portfolio/src/components/blocks/` and `artifacts/portfolio/src/pages/`.
3. Run `pnpm dev` (or `npm run dev`) to verify locally.
4. No CSS changes are required — all styling reuses existing Tailwind utility classes and custom classes (`.glass-panel`, `.text-gradient`, `.glow-*`, etc.).

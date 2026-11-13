# HarKhil Agro — Corporate Landing Website

The official, independent corporate landing website for **HarKhil Agro** (a specialized division of **HarKhil**).

- **Target Domain:** `https://agro.harkhil.com`
- **Parent Corporate Entity:** HarKhil (`https://harkhil.com`)
- **Primary Focus:** Agricultural Science, Precision Soil Intelligence & Rural Digital Infrastructure

---

## Architecture & Technology Stack

This project is completely decoupled and independent. It does not share dependencies, runtime environments, or build pipelines with any other repository.

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Language:** TypeScript 5.6 (strict mode)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Routing:** [React Router 6](https://reactrouter.com/) (Client-side SPA with `_redirects` support)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** *Playfair Display* (Headings & Editorial Serif) + *Plus Jakarta Sans* (Body & Interface Sans)

### Brand Palette

| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Deep Forest** | `forest-950` / `900` | `#040d0a` / `#081c15` | Footer, dark cards, high-contrast headings |
| **Primary Forest** | `forest-800` | `#1b4332` | Primary buttons, headers, accents |
| **Natural Foliage** | `nature-600` / `500` | `#40916c` / `#52b788` | Active status badges, icons, hover accents |
| **Warm Canvas** | `warm-50` / `100` | `#fcfbf7` / `#f8f6f0` | Main canvas, card surfaces, paper warmth |
| **Agricultural Gold** | `gold-500` / `400` | `#d4af37` / `#e5c158` | Restrained highlights, premium badges, CTAs |

---

## Page Directory & Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Value proposition, core pillars, capability overview, and partnership CTA |
| `/about` | **About HarKhil Agro** | Heritage under HarKhil, core principles, and 3-year phased horizon roadmap |
| `/solutions` | **Solutions & Capabilities** | Soil diagnostics, phenology advisory, enterprise extension, and traceability |
| `/products-ventures` | **Ventures & Ecosystem** | HarKhil Krishi platform, soil diagnostics suite, and bio-nutrients |
| `/innovation-research` | **Innovation & Research** | Soil microbiology, micro-zone nutrition, climate resilience, and CV models |
| `/contact` | **Contact & Inquiries** | Structured partnership inquiry form, office hub details, and business hours |
| `/privacy-policy` | **Privacy Policy** | Comprehensive corporate data governance, farmer rights, and security standards |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server (runs on http://localhost:3000)
npm run dev

# 3. Type check without emitting files
npm run typecheck

# 4. Production build (compiles to ./dist)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Production Deployment to Cloudflare Pages / Vercel

### Cloudflare Pages (Recommended)
1. Project Root: `.` (or `D:\HarKhilProducts\HarKhil-Agro-Landing`)
2. Framework Preset: **Vite**
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Root directory: `/`
6. Custom domain binding: `agro.harkhil.com`

---

## Independence & Data Integrity Notice

- **Completely Independent:** No files from `D:\HarKhil-Agro` are imported or modified.
- **Truth in Data:** All metrics and status labels clearly differentiate between active deployments, active pilots, and future research milestones.
- **Zero Fabrication:** All metrics, research initiatives, and platform capabilities represent verified HarKhil Agro projects without simulated claims or client data.


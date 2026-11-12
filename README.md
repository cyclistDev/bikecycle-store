# Bikecycle Store

Premium bike store website for Cambodia — browse S-Works bikes, view product details, and send order inquiries.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **UI:** Tailwind CSS + shadcn/ui + Framer Motion
- **Routing:** React Router v6
- **Data fetching:** TanStack Query
- **Backend:** Supabase (Postgres + auto REST API) — optional, app runs in demo mode without it

## Problem & Solution

| Problem | Solution |
|---|---|
| Product data was hardcoded in `src/data/products.ts` | Products are now fetched from Supabase via `useProducts()`; static file remains as offline/demo fallback |
| Order form only simulated submission (`setTimeout`) | Form submits to the `orders` table in Supabase via `useSubmitOrder()`; falls back to demo mode when unconfigured |
| Contact info duplicated across components with inconsistent values/domains | Centralized in `src/config/site.ts` |
| No environment variable management | `.env` + `.env.example` pattern; secrets never committed (`.env` is gitignored) |
| Boilerplate leftovers (dev tagger plugin, stray config, ~50 unused UI deps) | Removed; only the 14 actually-used shadcn components and their deps remain |

## Project Structure

```
src/
├── components/        # Reusable UI (Navbar, Footer, ProductCard, OrderForm, ...)
│   └── ui/            # shadcn/ui primitives (only used ones kept)
├── config/site.ts     # Single source of truth for contact/business info
├── context/           # CartContext (cart state)
├── data/              # Static fallback data (products, form options)
├── hooks/             # useProducts, useSubmitOrder, use-toast, use-mobile
├── lib/               # supabase client, utils
├── pages/             # Route pages (Index, Products, ProductDetail, About, NotFound)
└── services/          # API layer: products.service.ts, orders.service.ts
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:8080
```

### Environment Variables

```bash
cp .env.example .env
```

Then fill in your Supabase credentials (Project Settings → API):

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

> **Never commit `.env`.** Only `.env.example` (with placeholder values) is tracked.

Without these variables the app still works — it serves static product data and simulates order submissions (demo mode).

## Supabase Setup

1. Create a free project at [supabase.com](https://supabase.com)
2. **Schema:** Supabase Dashboard → SQL Editor → paste and run `supabase/schema.sql`
3. **Seed products:** paste and run `supabase/seed.sql`
   - Replace each `TODO_IMAGE_URL` with a real image URL. Recommended: Dashboard → Storage → create a public `products` bucket, upload images from `src/assets/bikes/`, and paste each file's public URL
4. Copy **Project URL** and **anon public key** (Settings → API) into `.env` locally, and into Netlify → Site settings → Environment variables for production
5. To manage products/orders yourself later: enable authenticated admin policies (commented at the bottom of `schema.sql`) and create a user in Supabase Auth

> Without env vars the app runs in demo mode (static products + simulated orders), so you can deploy first and connect Supabase anytime.

## Assets / Images

Bike photos are organized by category so new images can be dropped in easily:

```
src/assets/
├── hero-bike.jpg            # homepage hero background
├── bikes/
│   ├── road/                # e.g. tarmac-sl7.jpg → category "road"
│   ├── aero/                # e.g. venge.jpg → category "aero"
│   ├── endurance/           # e.g. aethos.jpg, roubaix.jpg
│   ├── gravel/              # e.g. crux.jpg
│   └── triathlon/           # e.g. shiv.jpg
└── accessories/             # detail shots: wheels, handlebars, frame, drivetrain
```

To add a product image: drop the file in the matching `bikes/<category>/` folder, import it in `src/data/products.ts`, and set it as `image` (or add to `gallery` for extra detail shots).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server (port 8080) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm test` | Vitest |

## Deploy (Netlify)

1. Push to GitHub (already connected: `cyclistDev/bikecycle-store`)
2. In Netlify: **Add new site → Import from Git** → select the repo
3. Build settings: build command `npm run build`, publish directory `dist`
4. Add environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in **Site settings → Environment variables**
5. Deploy — every push to `main` auto-deploys

## Roadmap

- [ ] Cart checkout flow (currently inquiry-based)
- [ ] Supabase Auth for customer accounts / admin order management
- [ ] Replace Unsplash hotlinks in `About.tsx` with local assets
- [ ] Real tests beyond the Vitest scaffold

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
| Lovable boilerplate leftovers (tagger plugin, stray config, ~50 unused UI deps) | Removed; only the 14 actually-used shadcn components and their deps remain |

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

1. Create a project at [supabase.com](https://supabase.com)
2. Run this SQL in the SQL Editor:

```sql
create table products (
  id            text primary key,
  name          text not null,
  category      text not null check (category in ('road','aero','endurance','gravel','triathlon')),
  price         numeric not null,
  image_url     text not null,
  weight        text not null,
  groupset      text not null,
  frame_carbon  text not null,
  description   text not null,
  features      text[] not null default '{}',
  in_stock      boolean not null default true,
  is_new        boolean not null default false,
  is_best_seller boolean not null default false,
  created_at    timestamptz not null default now()
);

create table orders (
  id              bigint generated always as identity primary key,
  customer_name   text not null,
  customer_email  text not null,
  customer_phone  text not null,
  bike_model      text not null,
  payment_method  text not null,
  message         text,
  rider_height    numeric,
  status          text not null default 'new',
  created_at      timestamptz not null default now()
);

-- Public read access for products; anyone can insert orders (no auth yet)
alter table products enable row level security;
alter table orders enable row level security;

create policy "products are public" on products for select using (true);
create policy "orders are insertable" on orders for insert with check (true);
```

3. Seed the `products` table (export rows from `src/data/products.ts`, or insert manually)

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

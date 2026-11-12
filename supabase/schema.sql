-- Bikecycle Store — Supabase schema
-- Run this once in Supabase Dashboard → SQL Editor

create table if not exists products (
  id             text primary key,
  name           text not null,
  category       text not null check (category in ('road','aero','endurance','gravel','triathlon')),
  price          numeric not null,
  image_url      text not null,
  gallery        text[] not null default '{}',
  weight         text not null,
  groupset       text not null,
  frame_carbon   text not null,
  description    text not null,
  features       text[] not null default '{}',
  in_stock       boolean not null default true,
  is_new         boolean not null default false,
  is_best_seller boolean not null default false,
  created_at     timestamptz not null default now()
);

create table if not exists orders (
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

alter table products enable row level security;
alter table orders enable row level security;

-- Public can read products; anyone can submit an order inquiry
create policy "products are public" on products for select using (true);
create policy "orders are insertable" on orders for insert with check (true);

-- Only you (authenticated/admin) can manage products and view orders.
-- Create an admin user in Supabase Auth, then run:
--   create policy "admins manage products" on products for all
--     using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
--   create policy "admins read orders" on orders for select
--     using (auth.role() = 'authenticated');

-- Bikecycle Store — product seed data
-- IMPORTANT: replace 'TODO_IMAGE_URL' with real image URLs.
-- Recommended: Supabase Dashboard → Storage → create public bucket "products",
-- upload images from src/assets/, then paste each file's public URL.

insert into products
  (id, name, category, price, image_url, gallery, weight, groupset, frame_carbon, description, features, in_stock, is_new, is_best_seller)
values
  ('tarmac-sl8', 'S-Works Tarmac SL8', 'road', 14500,
   'TODO_IMAGE_URL', '{}', '6.7 kg', 'Shimano Dura-Ace Di2', 'FACT 12r',
   'The lightest Tarmac ever made. Win Tunnel tested and World Tour proven, the SL8 is the ultimate race machine.',
   array['FACT 12r carbon frame - 685g','Fully integrated cockpit','45 seconds aero savings over 40km','Roval Rapide CLX wheels'],
   true, true, true),

  ('aethos', 'S-Works Aethos', 'road', 12800,
   'TODO_IMAGE_URL', '{}', '5.9 kg', 'Shimano Dura-Ace Di2', 'FACT 12r',
   'Pure climbing performance. The Aethos is designed for riders who want the ultimate lightweight race bike.',
   array['Sub-600g frameset','Rider-First Engineered','D''Aluisio Smartweld technology','Perfect climbing geometry'],
   true, false, true),

  ('venge', 'S-Works Venge', 'aero', 13200,
   'TODO_IMAGE_URL', '{}', '7.2 kg', 'Shimano Dura-Ace Di2', 'FACT 11r',
   'Pure speed. The Venge is the fastest aero road bike we''ve ever made, dominating sprint finishes worldwide.',
   array['120 seconds saved over 40km','FreeFoil Shape Library tubes','Integrated Aerofly II cockpit','Wind-tunnel optimized'],
   true, false, false),

  ('crux', 'S-Works Crux', 'gravel', 11500,
   'TODO_IMAGE_URL', '{}', '7.4 kg', 'SRAM Red AXS XPLR', 'FACT 12r',
   'The lightest gravel bike in the world. Built for racing, ready for adventure.',
   array['725g FACT 12r frame','47mm tire clearance','Future Shock 2.0 ready','Gravel-specific geometry'],
   true, true, false),

  ('roubaix', 'S-Works Roubaix', 'endurance', 12200,
   'TODO_IMAGE_URL', '{}', '7.5 kg', 'Shimano Dura-Ace Di2', 'FACT 11r',
   'Smooth is fast. Conquer the cobbles and long days in the saddle with Future Shock suspension.',
   array['Future Shock 2.0 suspension','Pavé Seatpost compliance','33mm tire clearance','Endurance geometry'],
   true, false, false),

  ('tarmac-sl7', 'S-Works Tarmac SL7', 'road', 11900,
   'TODO_IMAGE_URL', '{}', '6.9 kg', 'Shimano Dura-Ace Di2', 'FACT 11r',
   'The previous generation Tarmac that redefined what a race bike could be. Still a proven winner.',
   array['FACT 11r carbon frame','Aero + lightweight balance','Integrated cockpit design','Race-proven geometry'],
   true, false, false),

  ('shiv', 'S-Works Shiv TT', 'triathlon', 14800,
   'TODO_IMAGE_URL', '{}', '8.1 kg', 'Shimano Dura-Ace Di2', 'FACT 11r',
   'The ultimate time trial and triathlon machine. Designed for pure speed against the clock.',
   array['Integrated hydration system','Extreme aero optimization','Di2 hidden integration','Adjustable TT geometry'],
   false, true, false)
on conflict (id) do nothing;

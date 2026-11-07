import { supabase } from "@/lib/supabase";
import {
  products as staticProducts,
  type BikeCategory,
  type Product,
} from "@/data/products";

interface ProductRow {
  id: string;
  name: string;
  category: string;
  price: number;
  image_url: string;
  weight: string;
  groupset: string;
  frame_carbon: string;
  description: string;
  features: string[];
  in_stock: boolean;
  is_new: boolean;
  is_best_seller: boolean;
}

function mapRow(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    category: row.category as BikeCategory,
    price: Number(row.price),
    image: row.image_url,
    weight: row.weight,
    groupset: row.groupset,
    frameCarbon: row.frame_carbon,
    description: row.description,
    features: row.features ?? [],
    inStock: row.in_stock,
    isNew: row.is_new,
    isBestSeller: row.is_best_seller,
  };
}

export async function fetchProducts(): Promise<Product[]> {
  if (!supabase) return staticProducts;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: true });

  if (error || !data?.length) {
    console.warn("Supabase products fetch failed, using static data:", error?.message);
    return staticProducts;
  }

  return (data as ProductRow[]).map(mapRow);
}

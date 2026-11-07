import { supabase } from "@/lib/supabase";

export interface OrderPayload {
  name: string;
  email: string;
  phone: string;
  bike: string;
  payment: string;
  message: string;
  riderHeight?: number;
}

export async function submitOrder(payload: OrderPayload): Promise<void> {
  if (!supabase) {
    // Demo mode: no backend configured, simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    return;
  }

  const { error } = await supabase.from("orders").insert({
    customer_name: payload.name,
    customer_email: payload.email,
    customer_phone: payload.phone,
    bike_model: payload.bike,
    payment_method: payload.payment,
    message: payload.message || null,
    rider_height: payload.riderHeight ?? null,
    status: "new",
  });

  if (error) throw error;
}

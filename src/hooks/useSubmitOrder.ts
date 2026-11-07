import { useMutation } from "@tanstack/react-query";
import { submitOrder, type OrderPayload } from "@/services/orders.service";

export function useSubmitOrder() {
  return useMutation({
    mutationFn: submitOrder,
    mutationKey: ["submit-order"],
  });
}

export type { OrderPayload };

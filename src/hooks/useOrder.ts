import { checkoutOrder } from "@/services/orderService";
import { Order } from "@/types/order";
import { useState } from "react";

export function useCheckoutOrder() {
  const [data, setData] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewCheckout = async (input: Order) => {
    setLoading(true);
    setError(null);
    try {
      const res = await checkoutOrder(input);
      setData(res);
      return res;
    } catch (error) {
      setError((error as Error).message);
      console.log("(hooks) terjadi error :", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleNewCheckout, data, loading, error };
}

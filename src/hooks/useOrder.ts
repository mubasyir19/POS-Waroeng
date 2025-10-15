import { checkoutOrder, deleteOrder } from "@/services/orderService";
import { Order } from "@/types/order";
import { useState } from "react";
import { toast } from "sonner";

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
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { handleNewCheckout, data, loading, error };
}

export function useDeleteOrder() {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const res = await deleteOrder(id);
      setSuccess(true);
      return res;
    } catch (error) {
      setError((error as Error).message);
      toast.error((error as Error).message);
      throw error; // agar komponen pemanggil masih bisa tangkap error
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteOrder: handleDelete,
    loading,
    error,
    success,
  };
}

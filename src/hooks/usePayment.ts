import { completePayment } from "@/services/paymentService";
import { PaymentForm } from "@/types/payment";
import { useState } from "react";

export function useCompletePayment() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCompletePayment = async (orderId: string, input: PaymentForm) => {
    setLoading(true);
    setError(null);

    try {
      const res = await completePayment(orderId, input);
      setData(res);

      return res;
    } catch (error) {
      const msg = (error as Error).message;
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  return { handleCompletePayment, data, loading, error };
}

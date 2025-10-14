import { API_URL } from "@/config";
import { Order } from "@/types/order";

export const checkoutOrder = async (input: Order) => {
  try {
    const res = await fetch(`${API_URL}/order/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("(services) terjadi error :", error);
    throw new Error((error as Error).message || "Something went wrong");
  }
};

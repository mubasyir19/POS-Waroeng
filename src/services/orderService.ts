import { API_URL } from "@/config";
import { Order } from "@/types/order";

export const checkoutOrder = async (input: Order) => {
  try {
    const res = await fetch(`${API_URL}/order/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to add data");
    }

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const deleteOrder = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/order/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to delete data");
    }

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

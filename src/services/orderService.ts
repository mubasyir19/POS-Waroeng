import { API_URL } from "@/utils/config";
import { CheckoutOrder } from "@/types/order";

export const getDetailOrder = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
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

export const checkoutOrder = async (input: CheckoutOrder) => {
  try {
    const res = await fetch(`${API_URL}/order/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
      credentials: "include",
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
      credentials: "include",
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

export const updateOrderStatus = async (
  id: string,
  status: "PENDING" | "PAID" | "CANCELED",
) => {
  try {
    const res = await fetch(`${API_URL}/order/delete/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(status),
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to update status");
    }

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

import { API_URL } from "@/config";
import { ProductForm } from "@/types/product";

export const getAllProductsByCategory = async (categoryId: string) => {
  try {
    const res = await fetch(`${API_URL}/product/${categoryId}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/product/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const addProduct = async (input: ProductForm) => {
  try {
    const res = await fetch(`${API_URL}/product/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add data");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const updateProduct = async (input: ProductForm, id: string) => {
  try {
    const res = await fetch(`${API_URL}/product/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/product/delete/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to delete");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Network error");
  }
};

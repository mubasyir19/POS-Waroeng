import { API_URL } from "@/utils/config";
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
    const res = await fetch(`${API_URL}/product/detail/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const addProduct = async (formData: FormData) => {
  try {
    const res = await fetch(`${API_URL}/product/add`, {
      method: "POST",
      body: formData,
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

export const updateProduct = async (formData: FormData, id: string) => {
  try {
    const res = await fetch(`${API_URL}/product/edit/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("(service) terjadi error", error);
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

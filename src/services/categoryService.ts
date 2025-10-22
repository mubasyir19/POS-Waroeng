import { API_URL } from "@/utils/config";
import { Category } from "@/types/category";

export const getAllCategory = async () => {
  try {
    const res = await fetch(`${API_URL}/category`);
    const data = await res.json();

    return data.data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const getCategoryById = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/category/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const addCategory = async (input: Category) => {
  try {
    const res = await fetch(`${API_URL}/category/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const updateCategory = async (input: Category, id: string) => {
  try {
    const res = await fetch(`${API_URL}/category/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/category/delete/${id}`, {
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

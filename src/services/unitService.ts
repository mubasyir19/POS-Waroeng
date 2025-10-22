import { API_URL } from "@/utils/config";

export const getAllUnits = async () => {
  try {
    const res = await fetch(`${API_URL}/unit`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

export const getDetailUnit = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/unit/${id}`);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Something went wrong");
  }
};

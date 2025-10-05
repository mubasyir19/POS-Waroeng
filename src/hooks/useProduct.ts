import {
  addProduct,
  getAllProductsByCategory,
} from "@/services/productsService";
import { Product, ProductForm } from "@/types/product";
import { useCallback, useState } from "react";

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async (categoryId: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllProductsByCategory(categoryId);

      setProducts(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const addNewProduct = async (payload: ProductForm) => {
    try {
      const newProduct = await addProduct(payload);

      setProducts((prev) => [newProduct, ...prev]);
      return newProduct;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unexpected error");
      }
    }
  };

  return { products, loading, error, fetchProducts, addNewProduct };
}

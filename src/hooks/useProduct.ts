import {
  addProduct,
  getAllProductsByCategory,
  getProductById,
} from "@/services/productsService";
import { Product, ProductForm } from "@/types/product";
import { useCallback, useEffect, useState } from "react";

export function useFetchProductByCategory(categoryId: string) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryId) return;

    async function fetchByCategory() {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllProductsByCategory(categoryId);

        setProducts(data.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unexpected error");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchByCategory();
  }, [categoryId]);

  return { products, loading, error };
}

export function useProductById(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const res = await getProductById(id);

        if (res.code !== "SUCCESS") throw new Error("Failed to fetch product");

        setProduct(res.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}

export function useProducts() {
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

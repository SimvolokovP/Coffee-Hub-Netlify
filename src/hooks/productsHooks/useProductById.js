import { useState, useEffect } from "react";
import SupabaseService from "../../api/supabaseApi";
import ProductsService from "../../api/productsApi";

export const useProductById = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const fetchedProduct = await ProductsService.getProductById(id);
      setProduct(fetchedProduct);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductById(productId);
    }
  }, [productId]);

  return { product, loading, error, fetchProductById };
};

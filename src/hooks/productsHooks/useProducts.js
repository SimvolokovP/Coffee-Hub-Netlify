import { useState, useEffect } from "react";
import SupabaseService from "../../api/supabaseApi";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedProducts = await SupabaseService.getAllProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, fetchProducts };
};

// import { create } from "zustand";
// import SupabaseService from "../api/supabaseApi";

// const useProductsStore = create((set) => ({
//   products: [],
//   product: null,
//   loading: false,
//   error: null,
//   fetchProducts: async () => {
//     set({ loading: true, error: null });
//     try {
//       const products = await SupabaseService.getAllProducts();
//       set({ products, loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },
//   fetchProductById: async (id) => {
//     set({ loading: true, error: null });
//     try {
//       const product = await SupabaseService.getProductById(id);
//       set({ product, loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

  
// }));

// export default useProductsStore;

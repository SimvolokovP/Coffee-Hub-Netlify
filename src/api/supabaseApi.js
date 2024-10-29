import supabase from "../database/supabase/supabase";

export default class SupabaseService {
  static async getAllProducts() {
    try {
      const { data: products, error } = await supabase
        .from("products")
        .select("*");

      if (error) throw new Error(error.message);

      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products. Please try again.");
    }
  }
  static async getProductById(id) {
    try {
      const { data: product, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw new Error(error.message);
      console.log(product)
      return product;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw new Error(
        "Failed to fetch product. Please ensure the ID is correct."
      );
    }
  }
}

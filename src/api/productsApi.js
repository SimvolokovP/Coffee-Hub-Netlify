import productsData from "./products.json";

export default class ProductsService {
  static async getAllProducts() {
    try {
      return new Promise((resolve) => {
        resolve(productsData);
      });
    } catch (error) {
      console.error("Error fetching products from JSON file:", error);
      throw new Error("Failed to fetch products. Please try again.");
    }
  }

  static async getProductById(id) {
    try {
      return new Promise((resolve, reject) => {
        const product = productsData.find((item) => item.id == id);
        if (!product) {
          return reject(new Error("Product not found."));
        }
        resolve(product);
      });
    } catch (error) {
      console.error("Error fetching product by ID from JSON file:", error);
      throw new Error(
        "Failed to fetch product. Please ensure the ID is correct."
      );
    }
  }
}

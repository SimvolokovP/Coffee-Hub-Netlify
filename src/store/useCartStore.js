import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.milk === product.milk
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += product.quantity;
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, product] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      return { cart: state.cart.filter((item) => item.addedId !== productId) };
    }),
}));

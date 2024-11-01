import "./ProductsPage.scss";
import { useEffect } from "react";
import Products from "../../components/Products/Products";
import Greeting from "../../components/Greeting/Greeting";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useProducts } from "../../hooks/productsHooks/useProducts";
import { useCartStore } from '../../store/useCartStore'
import useTg from '../../hooks/useTg'

const ProductsPage = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  const {cart} = useCartStore()
  const {tg} = useTg()

  useEffect(() => {
    fetchProducts();
  }, []);



  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="page products-page">
      <div className="container">
        <Greeting />
        <Products fetchError={error} products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;

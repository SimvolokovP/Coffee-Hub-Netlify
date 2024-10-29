import "./ProductsPage.scss";
import { useEffect } from "react";
import Products from "../../components/Products/Products";
import Greeting from "../../components/Greeting/Greeting";
import useProductStore from "../../store/useProductsStore";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const ProductsPage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="page products-page">
      <Greeting />
      <Products fetchError={error} products={products} />
    </div>
  );
};

export default ProductsPage;

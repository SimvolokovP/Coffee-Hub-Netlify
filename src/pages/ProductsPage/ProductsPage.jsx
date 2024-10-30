import "./ProductsPage.scss";
import { useEffect } from "react";
import Products from "../../components/Products/Products";
import Greeting from "../../components/Greeting/Greeting";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useProducts } from "../../hooks/productsHooks/useProducts";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { products, loading, error, fetchProducts } = useProducts();

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
      <Link to={"/order"}>order</Link>
    </div>
  );
};

export default ProductsPage;

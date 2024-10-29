import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Product from "../../components/Product/Product";
import useProductsStore from "../../store/useProductsStore";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error, fetchProductById } = useProductsStore();

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  if (loading) return <LoadingScreen />;

  return <Product fetchError={error} product={product} />;
};

export default ProductPage;

import "./ProductPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Product from "../../components/Product/Product";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useTg from "../../hooks/useTg";
import { useProductById } from "../../hooks/productsHooks/useProductById";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);
  const { tg } = useTg();
  const navigate = useNavigate();

  // useEffect(() => {
  // 	fetchProductById(id)
  // }, [id, fetchProductById])


  if (loading) return <LoadingScreen />;

  return (
    <div className="page product-page">
      <Product fetchError={error} product={product} />
    </div>
  );
};

export default ProductPage;

import "./ProductPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Product from "../../components/Product/Product";
import useProductsStore from "../../store/useProductsStore";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useTg from '../../hooks/useTg'

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error, fetchProductById } = useProductsStore();
  const {tg} = useTg()
  const navigate = useNavigate()

  const tgBackButtonOnClick = () => {
		navigate('/')
		tg.BackButton.hide()
	}

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  useEffect(() => {
    tg.BackButton.show()
    tg.BackButton.onClick(tgBackButtonOnClick)
  }, [])

  if (loading) return <LoadingScreen />;

  return <Product fetchError={error} product={product} />;
};

export default ProductPage;

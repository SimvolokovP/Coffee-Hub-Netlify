// import "./Product.scss";

const Product = ({ product, fetchError }) => {
  return <>{fetchError ? fetchError : <div>{product?.id}</div>}</>;
};
export default Product;

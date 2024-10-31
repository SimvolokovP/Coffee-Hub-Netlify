import { Link } from "react-router-dom";
import "./Products.scss";

const Products = ({ products, fetchError }) => {
  return (
    <>
      {fetchError ? (
        fetchError
      ) : (
        <div className="products">
          {products.map((product) => (
            <Link
              to={`product/${product.id}`}
              key={product.id}
              className="products__item product"
            >
              <img
                className="product__image"
                src={`/${product.name}.svg`}
                alt={product.name}
                width={70}
                height={70}
              />
              <h3 className="product__title">{product.name}</h3>
              <p className="product__descr accent">${product.price[0]}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;

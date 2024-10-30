import "../../styles/App.css";
import "./Product.scss";
import { useEffect, useState } from "react";
import useTg from "../../hooks/useTg";
import Counter from "../Counter/Counter";
import CustomInput from "../CustomInput/CustomInput";

const Product = ({ product, fetchError }) => {
  const { tg } = useTg();
  const [productCount, setProductCount] = useState(1);
  const [productSize, setProductSize] = useState(50);
  const [productMilk, setProductMilk] = useState(15);

  return (
    <>
      {fetchError ? (
        fetchError
      ) : (
        <div className="product-item">
          <div className="product-item__chapter">
            <h3 className="product-item__title">{product?.name}</h3>
            <img
              className="product-item__image"
              src={`/${product?.name}.svg`}
              alt={product?.name}
              width={120}
              height={120}
            />
          </div>
          <div className="product-item__inner">
            <div className="product-item__info">
              <div className="product-item__param">
                <h3 className="product-item__name">{product?.name}</h3>
                <div className="accent product-item__price">
                  $ {product?.price}
                </div>
              </div>
              <Counter
                count={productCount}
                setCount={setProductCount}
                minValue={1}
                maxValue={7}
              />
            </div>
            <div className="product-item__descr">
              <div className="product-item__point">Description</div>
              <p>{product?.description ? product?.description : "-"}</p>
            </div>
            <div className="product-item__label">
              <div className="product-item__point">Size</div>
              <CustomInput stepArray={["S", "M", "L"]} value={productSize} setValue={setProductSize} />
            </div>
            <div className="product-item__label">
              <div className="product-item__point">Milk <span>({productMilk}%)</span></div>
              <CustomInput value={productMilk} setValue={setProductMilk} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;

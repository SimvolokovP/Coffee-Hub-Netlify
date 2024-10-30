import "../../styles/App.css";
import "./Product.scss";
import { useEffect, useState } from "react";
import useTg from "../../hooks/useTg";
import Counter from "../Counter/Counter";
import CustomInput from "../CustomInput/CustomInput";
import { useCartStore } from "../../store/useCartStore";

const Product = ({ product, fetchError }) => {
  const { tg } = useTg();
  const [productCount, setProductCount] = useState(1);
  const [productSize, setProductSize] = useState("Middle");
  const [productMilk, setProductMilk] = useState("Cow");

  const [isAdded, setAdded] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(0);

  const { addToCart, cart } = useCartStore();

  useEffect(() => {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === product?.id &&
        item.size === productSize &&
        item.milk === productMilk
    );
    if (existingItemIndex !== -1) {
      setAdded(true);
      setAddedQuantity(cart[existingItemIndex]?.quantity);
    } else {
      setAdded(false);
    }
  }, [productCount, productMilk, productSize, product, cart]);

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
              <div className="product-item__point">
                Size <span>({productSize})</span>
              </div>
              <CustomInput
                stepArray={[
                  { icon: "S", value: "Small" },
                  { icon: "M", value: "Middle" },
                  { icon: "L", value: "Large" },
                ]}
                value={productSize}
                setValue={setProductSize}
              />
            </div>
            <div className="product-item__label">
              <div className="product-item__point">
                Milk <span>({productMilk})</span>
              </div>
              <CustomInput
                stepArray={[
                  { icon: "🥥", value: "Coconut" },
                  { icon: "🥛", value: "Cow" },
                  { icon: "🍌", value: "Banana" },
                ]}
                value={productMilk}
                setValue={setProductMilk}
              />
            </div>
            <button
              onClick={() =>
                addToCart({
                  ...product,
                  size: productSize,
                  milk: productMilk,
                  quantity: productCount,
                  addedId: product?.id + productMilk + productSize,
                })
              }
            >
              {isAdded
                ? `This product is already in the cart (${addedQuantity})`
                : "Add to cart"}
            </button>
            <button onClick={() => console.log(cart)}>cart</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;

import "../../styles/App.css";
import "./Product.scss";
import { useEffect, useState } from "react";
import useTg from "../../hooks/useTg";
import Counter from "../Counter/Counter";
import CustomInput from "../CustomInput/CustomInput";
import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

const Product = ({ product, fetchError }) => {
  const { tg } = useTg();
  const colorTheme = tg.colorTheme;
  const [productCount, setProductCount] = useState(1);
  const [productSize, setProductSize] = useState("Medium");
  const [productMilk, setProductMilk] = useState("Cow");

  const [isAdded, setAdded] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(0);

  const { addToCart, cart } = useCartStore();
  const navigate = useNavigate();

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

  const getSizePrice = (size) => {
    switch (size) {
      case "Small":
        return product?.price[0];
      case "Medium":
        return product?.price[1];
      case "Large":
        return product?.price[2];
      default:
        return product?.price[1];
    }
  };

  const mainButtonParams = {
    text: "GO TO CART",
    color: document.documentElement.style.getPropertyValue("--accent-color")
      ? document.documentElement.style.getPropertyValue("--accent-color")
      : colorTheme === "light"
      ? "FDCB50"
      : "#FD8F01",
    hasShineEffect: true,
  };

  const tgBackButtonOnClick = () => {
    navigate("/");
    tg.BackButton.hide();
  };

  const tgMainButtonOnClick = () => {
    navigate("/order");
    tg.MainButton.hide();
  };

  tg.BackButton.onClick(tgBackButtonOnClick);

  useEffect(() => {
    tg.BackButton.show();
  }, []);

  useEffect(() => {
    tg.MainButton.setParams(mainButtonParams);
  }, [mainButtonParams]);

  useEffect(() => {
    if (cart.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [cart]);

  tg.MainButton.onClick(tgMainButtonOnClick);

  console.log(cart);
  console.log(addedQuantity);
  console.log(productCount);

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
                  $ {getSizePrice(productSize)}{" "}
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
                  { icon: "M", value: "Medium" },
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
              className="product-item__btn"
              onClick={() =>
                addToCart({
                  id: product?.id,
                  name: product?.name,
                  price: getSizePrice(productSize),
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
          </div>
        </div>
      )}
    </>
  );
};
export default Product;

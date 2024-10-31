import { useCartStore } from "../../store/useCartStore";
import "./CartList.scss";

const CartList = () => {
  const { cart } = useCartStore();
  return (
    <ul className="list-reset cart-list">
      {cart.length
        ? cart.map((product) => (
            <li key={product?.addedId}>
              <div className="cart-list__item">
                <div className="cart-list__item--info">
                  <img
                    src={`/${product?.name}.svg`}
                    alt={product?.name}
                    width={70}
                    height={70}
                  />
                  <div className="cart-list__item--descr">
                    <div>
                      {product?.name} <span className="accent">{product?.quantity}X</span>
                    </div>
                    <span className="cart-list__item--options">{product?.size} size, {product?.milk} milk</span>
                  </div>
                </div>
                <div className="cart-list__item--price">
                  $ {product?.price * product?.quantity}
                </div>
              </div>
            </li>
          ))
        : "Cart is empty"}
    </ul>
  );
};

export default CartList;

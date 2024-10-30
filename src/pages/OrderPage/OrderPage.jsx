import CartList from "../../components/CartList/CartList";
import "./OrderPage.scss";

const OrderPage = () => {
  return (
    <div className="page order-page">
      <div className="container">
        <div className="order-page__title">
          Your <span className="accent">order</span>
        </div>
		<CartList />
      </div>
    </div>
  );
};
export default OrderPage;

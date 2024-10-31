import CartList from "../../components/CartList/CartList";
import OrderInput from "../../components/OrderInput/OrderInput";
import useTg from "../../hooks/useTg";
import "./OrderPage.scss";

const OrderPage = () => {
  const { user } = useTg();

  const getTargetTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    return now.toTimeString().slice(0, 5);
  };

  const targetTime = getTargetTime();

  return (
    <div className="page order-page">
      <div className="container">
        <div className="order-page__title">
          Your <span className="accent">order</span>
        </div>
        <CartList />
        <form className="order-page__form">
          <OrderInput placeholder="Customer name" initValue={user?.username} />
          <OrderInput
            placeholder="Desired time"
            type="time"
            initValue={targetTime}
          />
          <OrderInput placeholder="Special message" initValue={"Coffee please!"} />
        </form>
      </div>
    </div>
  );
};
export default OrderPage;

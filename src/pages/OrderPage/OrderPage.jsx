import { useCallback, useEffect, useState } from "react";
import CartList from "../../components/CartList/CartList";
import OrderInput from "../../components/OrderInput/OrderInput";
import useTg from "../../hooks/useTg";
import "./OrderPage.scss";
import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { user } = useTg();
  const { cart } = useCartStore();
  const { tg, queryId } = useTg();
  const navigate = useNavigate();

  const getTargetTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    return now.toTimeString().slice(0, 5);
  };

  const targetTime = getTargetTime();

  const [formData, setFormData] = useState({
    name: user?.username
      ? user?.username
      : user?.first_name + " " + user?.last_name,
    time: targetTime,
    message: "Coffee please",
  });

  const onSendData = useCallback(() => {
    const data = {
      queryId: queryId,
      userId: user?.id,
      products: cart,
      formData: formData,
    };
    console.log("Sending data:", data);
    fetch(`${"https://42f8-176-59-68-177.ngrok-free.app"}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error during fetch:", error));
  }, [cart, queryId, formData]);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart]);

  useEffect(() => {
    tg.BackButton.show();
  }, []);

  return (
    <div className="page order-page">
      <div className="container">
        <div className="order-page__title">
          Your <span className="accent">order</span>
        </div>
        <CartList />
        <form className="order-page__form">
          <OrderInput
            placeholder="Customer name"
            value={formData.name}
            setValue={(e) => setFormData({ ...formData, name: e })}
          />
          <OrderInput
            placeholder="Desired time"
            type="time"
            value={formData.time}
            setValue={(e) => setFormData({ ...formData, time: e })}
          />
          <OrderInput
            placeholder="Special message"
            value={formData.message}
            setValue={(e) => setFormData({ ...formData, message: e })}
          />
        </form>
        <button onClick={onSendData} className="order-page__submit" >
            Make an order
          </button>
      </div>
    </div>
  );
};
export default OrderPage;

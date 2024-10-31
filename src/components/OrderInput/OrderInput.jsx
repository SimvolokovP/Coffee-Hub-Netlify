import "./OrderInput.scss";

const OrderInput = ({ placeholder = "", type = "text", initValue = "" }) => {
  const splitPlaceholder = placeholder.split(" ");

  return (
    <label className="order-input">
      <div className="order-input__placeholder">
        {splitPlaceholder.length > 1 ? (
          <>
            {splitPlaceholder[0]}{" "}
            <span className="accent">{splitPlaceholder[1]}</span>
          </>
        ) : (
          placeholder
        )}
      </div>
      <input
        value={initValue}
        type={type}
        min={type === "time" ? initValue : undefined}
      />
    </label>
  );
};

export default OrderInput;

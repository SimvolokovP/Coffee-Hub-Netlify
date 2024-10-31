import "./OrderInput.scss";

const OrderInput = ({
  placeholder = "",
  type = "text",
  value = "",
  setValue,
}) => {
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
        onChange={(e) => setValue(e.target.value)}
        className="order-input__input"
        value={value}
        type={type}
        // min={type === "time" ? value : undefined}
      />
    </label>
  );
};

export default OrderInput;

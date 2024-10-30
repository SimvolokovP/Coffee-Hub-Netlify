import "./CustomInput.scss";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const CustomInput = ({ stepArray, value, setValue }) => {
  const handleSliderChange = (values) => {
    const percentageValue = values[1];
    if (stepArray) {
      const index = Math.round(
        (percentageValue / 100) * (stepArray.length - 1)
      );
      setValue(stepArray[index].value);
    } else {
      setValue(percentageValue);
    }
    console.log(value);
  };

  return (
    <label className="custom-input">
      {stepArray && (
        <div className="custom-input__steps">
          {stepArray.map((step, index) => (
            <div key={index}>{step?.icon}</div>
          ))}
        </div>
      )}
      <RangeSlider
        id="range-slider-yellow"
        className="single-thumb"
        defaultValue={[0, 50]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        step={100 / (stepArray?.length - 1)}
        minValue={0}
        maxValue={100}
        onInput={handleSliderChange}
      />
    </label>
  );
};

export default CustomInput;

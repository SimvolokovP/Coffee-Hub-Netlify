import "./CustomInput.scss";  
import RangeSlider from "react-range-slider-input";  
import "react-range-slider-input/dist/style.css";  

const CustomInput = ({ stepArray, value, setValue }) => {  
  const handleSliderChange = (values) => {  
    setValue(values[1]);  
  };  

  return (  
    <label className="custom-input">  
      {stepArray && (  
        <div className="custom-input__steps">  
          {stepArray.map((step) => (  
            <div key={step}>{step}</div>  
          ))}  
        </div>  
      )}  
      <RangeSlider  
        id="range-slider-yellow"  
        className="single-thumb"  
        defaultValue={[0, value]} 
        thumbsDisabled={[true, false]}  
        rangeSlideDisabled={true} 
        step={stepArray ? 100 / (stepArray.length - 1) : 1} 
        minValue={0} 
        maxValue={100} 
        onInput={handleSliderChange}   
      />  
    </label>  
  );  
};  

export default CustomInput;
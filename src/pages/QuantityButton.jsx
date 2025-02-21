import { useState, useEffect } from "react";

const QuantityButton = ({ onChange, value }) => {
  const [clickedButton, setClickedButton] = useState(null);
  const [quantity, setQuantity] = useState(value ?? 1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setClickedButton("increase");
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setClickedButton("decrease");
    }
  };

  useEffect(() => {
    onChange(quantity);
  }, [onChange, quantity]);

  return (
    <div className="flex items-center gap-6">
      <button
        className={`w-12 h-12 rounded-full border-2 flex justify-center items-center cursor-pointer 
              transition-all duration-200 text-xl font-light  hover:bg-black hover:text-white hover:border-black
              
              ${
                clickedButton === "decrease"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black"
              }`}
        onClick={handleDecrease}
      >
        -
      </button>

      <div className="text-sm w-2 flex justify-center items-center ">
        {quantity}
      </div>

      <button
        className={`w-12 h-12 rounded-full border-2 flex justify-center items-center cursor-pointer 
              transition-all duration-200 text-xl font-light hover:bg-black hover:text-white hover:border-black
              ${
                clickedButton === "increase"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black"
              }`}
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;

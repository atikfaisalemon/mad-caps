import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const QuantityButton = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const { quantity, setQuantity } = useContext(UserContext);

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
  return (
    <div className="flex items-center gap-12">
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

      <div className="text-lg w-5 flex justify-center items-center ">
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

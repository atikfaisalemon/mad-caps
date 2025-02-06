import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";

const CartButton = ({ cap }) => {
  console.log("cap", cap);
  const capData = cap.cap;

  const [clickedButton, setClickedButton] = useState(null);
  const { cartData, quantity, setCartData, setQuantity } =
    useContext(UserContext);
  console.log("first", quantity);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCartData([...cartData, capData]);
    navigate("/cartlist");
  };

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
    <div className="flex flex-col gap-6">
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
      <button
        onClick={handleAddToCart}
        className="text-xl border-2 p-1 px-15 rounded-full hover:bg-black hover:text-white hover:border-black"
      >
        ADD TK {capData.price} {capData.name}
      </button>
    </div>
  );
};

export default CartButton;

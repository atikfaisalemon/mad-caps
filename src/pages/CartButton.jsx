import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import QuantityButton from "./QuantityButton";

const CartButton = ({ cap }) => {
  const capData = cap.cap;
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(UserContext);

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(capData, quantity);

    navigate("/cartlist");
  };

  return (
    <div>
      <div className="flex  md:flex-col items-center justify-between  md:items-start gap-6">
        <QuantityButton
          onChange={(value) => {
            setQuantity(value);
          }}
          value={quantity}
        />
        <button
          onClick={handleAddToCart}
          className="md:text-2xl text-l font-bold border-2 p-1 md:px-15 px-6 rounded-md text-white md:text-black bg-black md:bg-white  md:hover:bg-black md:hover:text-white md:hover:border-black"
        >
          BUY IT NOW
        </button>
      </div>
    </div>
  );
};

export default CartButton;

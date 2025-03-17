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
      <div className="flex  flex-col  items-start gap-6">
        <QuantityButton
          onChange={(value) => {
            setQuantity(value);
          }}
          value={quantity}
        />
        <button
          onClick={handleAddToCart}
          className="md:text-xl border-2 p-1 px-15 rounded-full hover:bg-black hover:text-white hover:border-black"
        >
          ADD TK {capData.price}
        </button>
      </div>
    </div>
  );
};

export default CartButton;

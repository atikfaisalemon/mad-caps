import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import QuantityButton from "./QuantityButton";

const CartButton = ({ cap }) => {
  console.log("cap", cap);
  const capData = cap.cap;

  const { cartData, setCartData } = useContext(UserContext);

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCartData([...cartData, capData]);
    navigate("/cartlist");
  };

  return (
    <div className="flex flex-col gap-6">
      <QuantityButton />
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

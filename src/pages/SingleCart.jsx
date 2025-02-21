import { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import QuantityButton from "./QuantityButton";

const SingleCart = ({ cartData }) => {
  const { removeFromCart, updateCartQuantity } = useContext(UserContext);
  const [quantity, setQuantity] = useState(cartData.quantity);

  useEffect(() => {
    setQuantity(cartData.quantity); // Sync with context changes
  }, [cartData.quantity]);

  const handleQuantityChange = (value) => {
    if (value !== quantity) {
      // Prevent unnecessary updates
      setQuantity(value);
      updateCartQuantity(cartData.id, value);
    }
  };

  return (
    <div>
      <div className="w-full h-[1px] bg-gray-600 mt-4"></div>
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-6">
          <img
            onClick={() => removeFromCart(cartData.id)}
            className="border-2 rounded-full w-9 h-9 cursor-pointer"
            src="./x.png"
            alt="Remove"
          />
          <img
            src={cartData.images[0]}
            alt={cartData.name}
            className="w-30 h-30 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold">{cartData.name}</h3>
        </div>

        <div className="flex flex-row items-center">
          <p className="font-bold">${cartData.price}</p>
          <QuantityButton onChange={handleQuantityChange} value={quantity} />
          <p className="font-bold">${(cartData.price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;

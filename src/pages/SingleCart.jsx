import { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import QuantityButton from "./QuantityButton";

const SingleCart = ({ cartData }) => {
  const { removeFromCart, updateCartQuantity } = useContext(UserContext);
  const [quantity, setQuantity] = useState(cartData.quantity || 1);

  useEffect(() => {
    setQuantity(cartData.quantity || 1); // Sync with context changes
  }, [cartData.quantity]);

  const handleQuantityChange = (value) => {
    if (value !== quantity) {
      setQuantity(value);
      updateCartQuantity(cartData.id, value);
    }
  };

  // Check if images exist, otherwise show a placeholder
  const imageUrl =
    cartData.images?.[0]?.formats?.large?.url ||
    "https://via.placeholder.com/100?text=No+Image";

  return (
    <div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-600 mt-4"></div>

      {/* Cart Item Container */}
      <div className="p-4 flex md:flex-row flex-col items-center  md:justify-between gap-4">
        <div className=" flex flex-row items-center justify-between gap-6 ">
          {/* Remove Button */}
          <img
            onClick={() => removeFromCart(cartData.id)}
            className="border-2 rounded-full w-9 h-9 cursor-pointer md:-order-1 order-1"
            src="./x.png"
            alt="Remove"
          />

          {/* Product Image */}

          <img
            src={imageUrl}
            alt={cartData.name}
            className="md:w-24 md:h-24 w-20 h-20 object-cover rounded-lg "
          />

          {/* Product Name */}
          <h3 className="md:text-lg text-md font-semibold">{cartData.name}</h3>
        </div>

        {/* Price & Quantity */}
        <div className=" flex flex-row  items-center justify-between md:w-[50%]">
          <p className="font-bold">${cartData.price.toFixed(2)}</p>
          <QuantityButton onChange={handleQuantityChange} value={quantity} />
          <p className="font-bold">${(cartData.price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;

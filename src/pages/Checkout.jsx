import { useContext } from "react";
import UserContext from "../context/UserContext";
import Information from "./Information";

const Checkout = () => {
  const { cartData } = useContext(UserContext);

  // Calculate total quantity
  const totalQuantity = cartData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate subtotal price
  const grandTotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-row justify-center">
      <div className="w-[55%] bg-white">
        <Information />
      </div>
      <div className="p-6  w-[45%] bg-yellow-400 ">
        {/* List of Items */}
        <div className="mb-4">
          {cartData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-3"
            >
              {/* Product Image */}
              <img
                src={item.images[0].formats.large.url}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border"
              />

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h3 className=" font-medium">{item.name}</h3>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>

              {/* Subtotal */}
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Total Calculation */}
        <div className=" pt-4">
          <div className="flex justify-between ">
            <p>Subtotals {totalQuantity}</p>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <p>Total</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

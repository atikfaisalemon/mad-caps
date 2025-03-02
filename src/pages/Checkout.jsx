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
    <div className="flex flex-row justify-center h-screen pb-50">
      {/* Left Section - Information Form (Scrollable) */}
      <div className="w-full sm:w-[60%] bg-white p-6 shadow-md overflow-y-auto">
        <Information />
      </div>

      {/* Right Section - Cart Summary (Fixed) */}
      <div className="w-full sm:w-[40%] bg-yellow-400 p-6 shadow-md sticky top-0 h-screen overflow-y-auto sm:block hidden">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

        {/* List of Items */}
        <div className="mb-6">
          {cartData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b border-gray-200"
            >
              {/* Product Image */}
              <img
                src={item.images[0].formats.large.url}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border"
              />

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>

              {/* Subtotal */}
              <p className="text-gray-800 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Total Calculation */}
        <div className="pt-4">
          <div className="flex justify-between text-gray-600 mb-2">
            <p>Subtotal ({totalQuantity} items)</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <p>Total</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
        </div>

        {/* Checkout Buttons */}
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Express Checkout
          </button>
          <button className="w-full bg-gray-900 text-white py-3 rounded-md font-medium mt-3 hover:bg-gray-800 transition-colors">
            Pay with G Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import { useContext } from "react";
import UserContext from "../context/UserContext";
import CheckoutForm from "./CheckoutForm";
import { NavLink } from "react-router";

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
    <div className="flex flex-row  justify-evenly mt-32 mb-24  ">
      {/* Left Section - Information Form (Scrollable) */}
      <div className="md:w-xl mx-3">
        <CheckoutForm total={grandTotal} product={cartData} />
      </div>

      {/* Right Section - Cart Summary (Fixed) */}
      <div className=" w-lg hidden md:block">
        <div className="bg-gray-100 p-10">
          <div className="flex flex-row items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <NavLink
              to="/cartlist"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Modify Order
            </NavLink>
          </div>

          {/* List of Items */}
          <div className="mb-6">
            {cartData.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b border-gray-200"
              >
                {/* Product Image with Quantity Badge */}
                <div className="relative">
                  <img
                    src={item.images[0].formats.large.url}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <span className="absolute -top-3 -right-2 bg-black opacity-70 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {item.quantity}
                  </span>
                </div>

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                </div>

                {/* Subtotal */}
                <p className="text-gray-800 font-medium">
                  ৳ {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Total Calculation */}
          <div className="pt-4">
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Subtotal ({totalQuantity} items)</p>
              <p>৳ {grandTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <p>Total</p>
              <p>৳ {grandTotal.toFixed(2)}</p>
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
    </div>
  );
};

export default Checkout;

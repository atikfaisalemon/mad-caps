import { NavLink } from "react-router";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const OrderSuccess = () => {
  const { result } = useContext(UserContext);

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 text-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            No Order Found
          </h2>
          <p className="text-gray-700 mb-4">
            It seems like you don&apos;t have any recent orders.
          </p>
          <NavLink to="/">
            <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded font-bold hover:bg-green-700 transition">
              Shop Now
            </button>
          </NavLink>
        </div>
      </div>
    );
  }

  const order = result.data;
  console.log("first", order);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Thank you, We&apos;ve received your order.
        </h2>
        <p className="text-gray-700 mb-4">
          Your order is placed with <strong>Cash On Delivery</strong>. You will
          receive an SMS notification regarding the order.
        </p>
        <p className="text-gray-700">
          Your order reference is <strong>{order.documentId}</strong> and total
          order value is <strong>BDT {order.amount}</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Your shipping address is{" "}
          <strong>
            {order.address}, {order.city}
          </strong>
          .
        </p>
        <p className="text-gray-600 text-sm mb-6">
          Please remember this information for any kind of future inconvenience
          regarding your order.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink to="/">
            <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded font-bold hover:bg-green-700 transition">
              Shop Again
            </button>
          </NavLink>
          <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded font-bold hover:bg-orange-600 transition">
            Download Invoice
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="mt-4">
          <p>Like us on Facebook</p>
          <div className="mt-2">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-blue-700">
              👍 Follow
            </button>
            <span className="ml-2 text-gray-700">
              762K people are following this.
            </span>
          </div>
        </div>

        <p className="text-gray-700 mt-6 mb-4">
          Get the latest updates on promo codes, discounts, and offers.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play"
            className="w-32 cursor-pointer"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="w-32 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FYourPage&width=100&layout=button_count&action=like&size=small&share=true"
            width="100"
            height="30"
            className="border-none overflow-hidden"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

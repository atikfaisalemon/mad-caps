import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router";

const CheckoutForm = ({ total, product }) => {
  const navigate = useNavigate();
  const { setCartData, setResult } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    altPhone: "",
    note: "",
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      data: {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        products: [...product],
        amount: total,
        statusupdate: "pending",
        note: formData.note,
        city: formData.city,
        altPhone: formData.altPhone,
      },
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Order Successful:", result);
      setResult(result);
      setOrderStatus("Order placed successfully!");
      setIsOrderPlaced(true); // Show OrderSuccess
      setCartData([]);
      localStorage.clear();
    } catch (error) {
      console.error("Order Failed:", error);
      setOrderStatus("Order failed! Please try again.");
    }
  };

  if (isOrderPlaced) {
    navigate("/ordersuccess"); // Show OrderSuccess after successful order
  }

  return (
    <div className="mx-auto bg-white">
      <h1 className="text-center md:text-3xl text-lg font-bold">
        Checkout Info
      </h1>
      <div className="flex justify-center">
        <h2 className="text-center text-white mt-3 mb-10 inline-block  bg-blue-400 px-2">
          Cart Overview
        </h2>
      </div>
      {orderStatus && (
        <p className="text-center font-bold text-lg text-green-600">
          {orderStatus}
        </p>
      )}
      <h2 className="md:text-xl font-bold mb-4">Contact Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-0 focus:border-green-500 transition-all duration-300"
            required
          />
          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded mb-2 focus:outline-none focus:ring-0 focus:border-green-500 transition-all duration-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded mb-2 focus:outline-none focus:ring-0 focus:border-green-500 transition-all duration-300"
              required
            />
          </div>

          <h2 className="md:text-xl font-bold mt-4 mb-2">Shipping Info</h2>
          <input
            type="text"
            name="address"
            placeholder="Detailed Address (Ex: Area / Thana / District)"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-0 focus:border-green-500 transition-all duration-300"
            required
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="city"
              placeholder="Select City"
              value={formData.city}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded mb-2 focus:outline-none focus:ring-0 focus:border-green-500 transition-all duration-300"
              required
            />
            <input
              type="tel"
              name="altPhone"
              placeholder="Alt. Phone (01XXXXXXXXX)"
              value={formData.altPhone}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded mb-2 focus:outline-none focus:ring-0  focus:border-green-500 transition-all duration-300"
            />
          </div>
          <textarea
            name="note"
            placeholder="Note (optional)"
            value={formData.note}
            onChange={handleChange}
            className="w-full p-2  border rounded focus:outline-none focus:ring-0  focus:border-green-500 transition-all duration-200"
          />
        </div>

        <div className="bg-gray-100 p-4 rounded-md mt-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-gray-700">Your total payable amount is</p>
            <h2 className="text-3xl font-bold text-green-600">৳{total}</h2>
            <p className="text-gray-600 md:text-2xl text-lg font-semibold mt-2">
              Breakdown
            </p>
          </div>
          <table className="w-full mt-2 border-t gap-2 text-center">
            <tbody>
              <tr className="border-b">
                <td className="py-1 font-bold">Purpose</td>
                <td className="py-1 font-bold">Amount</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 text-gray-700">Total</td>
                <td className="py-1 text-green-600 font-bold">৳{total}</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-700">Shipping</td>
                <td className="py-1 text-green-600 font-bold">৳60</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-2">
            You will get the delivery{" "}
            <span className="font-bold text-green-600">within 2-3 Days</span>{" "}
            after confirmation.
          </p>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white p-2 rounded font-bold"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

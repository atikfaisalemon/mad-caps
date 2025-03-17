import { NavLink } from "react-router";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ Import explicitly

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
  console.log("Order Data:", order);

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Invoice", 105, 15, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Order Reference: ${order.documentId}`, 20, 30);
    doc.text(`Customer Name: ${order.name}`, 20, 40);
    doc.text(`Shipping Address: ${order.address}, ${order.city}`, 20, 50);
    doc.text(`Phone: ${order.phone}`, 20, 60);
    doc.text(`Order Date: ${new Date().toLocaleDateString()}`, 20, 70);
    doc.text(`Total Amount: BDT ${order.amount}`, 20, 80);
    doc.text("Payment Method: Cash On Delivery", 20, 90);

    doc.text("Ordered Products:", 20, 105);

    // ✅ Ensure autoTable is used correctly
    autoTable(doc, {
      startY: 110,
      head: [["#", "Product", "Unit Price", "Quantity", "Total"]],
      body: order.products.map((item, index) => [
        index + 1,
        item.name,
        `৳${item.price}`,
        item.quantity,
        `৳${item.price * item.quantity}`,
      ]),
    });

    doc.text(
      "Thank you for shopping with us!",
      20,
      doc.autoTable.previous.finalY + 20
    );

    doc.save(`Invoice-${order.documentId}.pdf`);
  };

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
          <button
            onClick={generateInvoice}
            className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded font-bold hover:bg-orange-600 transition"
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

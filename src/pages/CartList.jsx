import { useContext } from "react";
import UserContext from "../context/UserContext";
import SingleCart from "./SingleCart";

const CartList = () => {
  const { cartData } = useContext(UserContext);

  console.log("Cart data:", cartData);

  const items = cartData?.length || 0;

  return (
    <div className="mx-24 pt-24">
      <div className="text-2xl">{items} items in Cart</div>
      <div className="w-full h-1 bg-black"></div>

      {items > 0 && (
        <div className="flex flex-row justify-between items-center text-2xl my-4">
          <h1>Item</h1>
          <div className="flex flex-row text-2xl w-[50%] justify-between">
            <h1>Price</h1>
            <h1>Qty</h1>
            <h1>Subtotal</h1>
          </div>
        </div>
      )}

      {items > 0 ? (
        cartData.map((item) => <SingleCart key={item.id} cartData={item} />)
      ) : (
        <p className="text-lg text-gray-500 mt-4">Your cart is empty.</p>
      )}

      <div className="w-full h-[1px] bg-gray-600 mb-10"></div>
    </div>
  );
};

export default CartList;

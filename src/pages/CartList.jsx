import { useContext } from "react";
import UserContext from "../context/UserContext";
import SingleCart from "./SingleCart";
import { useNavigate } from "react-router";

const CartList = () => {
  const { cartData } = useContext(UserContext);

  const navigate = useNavigate();

  const items = cartData?.length || 0;
  const subtotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); // Sum (price * quantity)

  return (
    <div className="md:mx-24 mx-3 pt-24">
      <div className="text-2xl">{items} items in Cart</div>
      <div className="w-full h-1 bg-black"></div>

      {items > 0 && (
        <div className="md:block hidden">
          <div className="flex flex-row justify-between items-center text-2xl my-4">
            <h1>Item</h1>
            <div className="flex flex-row text-2xl w-[50%] justify-between">
              <h1>Price</h1>
              <h1>Qty</h1>
              <h1>Subtotal</h1>
            </div>
          </div>
        </div>
      )}

      {items > 0 ? (
        cartData.map((item) => <SingleCart key={item.id} cartData={item} />)
      ) : (
        <p className="text-lg text-gray-500 mt-4">Your cart is empty.</p>
      )}

      <div className="w-full h-[1px] bg-gray-600 mb-10"></div>

      <div className="flex justify-between mb-24">
        <div>
          <h1>NICE</h1>
        </div>
        <div className="text-lg font-semibold hover:underline">
          <h2>UPDATE CART</h2>
        </div>
        <div className="  text-right flex flex-col gap-6">
          <div className="md:text-2xl text-lg  mt-4 ">
            <span className="font-semibold"> Subtotal </span>TK{" "}
            {subtotal.toFixed(2)}
          </div>
          <div className="flex justify-end mt-16">
            <button
              onClick={() => {
                navigate("/checkout");
              }}
              className="bg-black  md:text-xl text-lg text-white px-6 py-2 rounded-full"
            >
              CHECKOUT
            </button>
          </div>
          <div className="text-right">
            <p>*Taxes and shipping collected at checkout</p>
            <div className="flex justify-end items-center gap-2 ">
              <input type="checkbox" name="" id="" />
              <p>
                By ticking this box, you confirm your agreement to our Figma
                <span className="underline">Store Terms of Sale</span>
              </p>
            </div>
            <div className="flex justify-end items-center gap-2 text-right">
              <input type="checkbox" name="" id="" />
              <p>
                By ticking this box, you agree to our
                <span className="underline">Privacy Policy</span>
              </p>
            </div>
            By clicking on the “Checkout” button you agree that you have read
            and accept our <span className="underline"> Terms of Sale.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;

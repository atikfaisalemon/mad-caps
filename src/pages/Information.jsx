import React from "react";
import CountryDropdown from "./CountryDropdown";

const Information = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-9">
        <h1 className="text-2xl font-semibold">MAD CAPS</h1>
        <div className="flex justify-center items-center gap-6 mt-2 mb-6">
          <p className="text-green-400">Cart</p>
          <p>Information</p>
          <p className="text-gray-400">Shipping</p>
          <p className="text-gray-400"> Payment</p>
        </div>
        <p className="text-gray-400">Express checkout</p>
        <div className="flex flex-row gap-3 justify-center items-center mt-3">
          <img
            className="w-72 h-13 bg-gray-400 rounded-md "
            src="./bkash.png"
            alt=""
          />
          <img className="w-72 h-13 rounded-md" src="./nagad.png" alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 mt-3">
        <div className="h-[1px] w-80 bg-gray-400"></div>
        <p>Or</p>
        <div className="h-[1px] w-80 bg-gray-400"></div>
      </div>
      <div className="flex flex-row items-center justify-between mx-20 mt-6">
        <h1 className="text-lg font-bold">Contract</h1>
        <p className="text-green-300 underline">Log in</p>
      </div>
      <form className="flex flex-col justify-center items-center " action="">
        <input
          className="border-1 w-[80%] p-3 rounded-md"
          type="text"
          placeholder="Email"
        />

        <div className="flex  items-center gap-2">
          <input type="checkbox" name="" id="" />
          <p>Email me with news and offers</p>
        </div>
        <div className="mt-6">
          <h1 className="text-lg">Shipping address</h1>
          <CountryDropdown />
        </div>
        <div className="w-full flex justify-center gap-3 mt-5">
          <input
            className="border-1 w-[39%] p-3 rounded-md"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border-1 w-[39%] p-3 rounded-md"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border-1 w-[80%] p-3 rounded-md mt-5"
          type="text"
          placeholder="Company (Optional)"
        />
        <input
          className="border-1 w-[80%] p-3 rounded-md mt-5"
          type="text"
          placeholder="Address"
        />
        <input
          className="border-1 w-[80%] p-3 rounded-md mt-5"
          type="text"
          placeholder="Apartment,suite,etc.(Optional)"
        />
        <div className="w-full flex justify-center gap-3 mt-5">
          <input
            className="border-1 w-[39%] p-3 rounded-md"
            type="text"
            placeholder="City"
          />
          <input
            className="border-1 w-[39%] p-3 rounded-md"
            type="number"
            placeholder="Post code"
          />
        </div>
        <input
          className="border-1 w-[80%] p-3 rounded-md mt-5"
          type="number"
          placeholder="Phone number"
        />
      </form>
    </div>
  );
};

export default Information;

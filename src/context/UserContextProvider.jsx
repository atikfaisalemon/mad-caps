import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  console.log("Cap 9", cartData);

  return (
    <UserContext.Provider
      value={{
        cartData,
        selectedSize,
        quantity,
        setCartData,
        setSelectedSize,
        setQuantity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

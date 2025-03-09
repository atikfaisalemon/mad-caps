import { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();

  // cart state
  const updateCartQuantity = (id, newQuantity) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity !== newQuantity
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    localStorage.setItem("cart", JSON.stringify(cartData));
  };
  //  total quantity

  const totalQuantity = cartData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  //get cart from local storage
  const getProductFromLocalStorage = () => {
    const storageProducts = localStorage.getItem("cart");
    if (storageProducts) {
      let localCart = JSON.parse(storageProducts);
      setCartData(localCart);
    }
  };

  // add to cart
  const addToCart = (product, quantity) => {
    if (cartData.find((item) => item.id == product.id)) {
      const newCartItems = cartData.map((item) =>
        item.id == product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartData(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    } else {
      setCartData([...cartData, { ...product, quantity: quantity }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cartData, { ...product, quantity: quantity }])
      );
    }
  };

  useEffect(() => {
    getProductFromLocalStorage();
  }, []);

  // remove from cart
  const removeFromCart = (id) => {
    const newCartItems = cartData.filter((item) => item.id != id);
    setCartData(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  return (
    <UserContext.Provider
      value={{
        cartData,
        selectedSize,
        quantity,
        query,
        totalQuantity,
        result,
        setResult,
        setCartData,
        setSelectedSize,
        setQuantity,
        setQuery,
        addToCart,
        removeFromCart,
        updateCartQuantity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

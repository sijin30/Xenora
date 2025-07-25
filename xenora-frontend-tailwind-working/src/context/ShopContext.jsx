import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

// Create context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [CartItems, setCartItems] = useState({});
  const [user, setUser] = useState(null); // ✅ Moved inside component

  // Add to cart function
  const addToCart = (itemID, size) => {
    const cartData = structuredClone(CartItems);

    if (cartData[itemID]) {
      cartData[itemID][size] = (cartData[itemID][size] || 0) + 1;
    } else {
      cartData[itemID] = { [size]: 1 };
    }

    setCartItems(cartData);
  };

  // Cart item count
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in CartItems) {
      for (const size in CartItems[itemId]) {
        totalCount += CartItems[itemId][size] || 0;
      }
    }
    return totalCount;
  };

  // Cart total amount
  const getCartAmount = () => {
    let total = 0;
    for (const itemId in CartItems) {
      for (const size in CartItems[itemId]) {
        const quantity = CartItems[itemId][size];
        const product = products.find((p) => p._id === itemId);
        if (product && quantity > 0) {
          total += product.price * quantity;
        }
      }
    }
    return total;
  };

  // Auth functions
  const login = (userInfo) => setUser(userInfo); // userInfo: { name: 'Sijin' }
  const logout = () => setUser(null);

  const value = {
    products,
    currency,
    delivery_fee,
    CartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    user,
    login,
    logout,
  };

  useEffect(() => {
    console.log("Cart Items:", CartItems);
  }, [CartItems]);

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider
import React, { createContext, useEffect, useState } from 'react'

export const cartOpenContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  // Save cart to Local Storage whenever cart updates
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  //  Add or increase product count (only for selected product)
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, count: (item.count || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  const decreaseCount = (productId) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0) // Removes items with count 0
    );
  };

  //  Remove or decrease product count (removes only when count > 1)
  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };
  const increaseCount = (productId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, count: (item.count || 1) + 1 } : item
      )
    );
  };

  //  Clear cart 
  const clearCart = (productId) => {
    setCartItems((prevCart) => {
        const updatedCart = prevCart.filter((item) => item._id !== productId);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update localStorage
        return updatedCart;
      });
  };

  return (
    <cartOpenContext.Provider
      value={{ cart, setCart, cartItems, clearCart,increaseCount, addToCart, removeFromCart }}
    >
      {children}
    </cartOpenContext.Provider>
  );
};

export default CartContext;
import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const { data } = await api.get("/cart");
    setCart(data.items || []);
  };

  const addToCart = async (productId, quantity = 1) => {
    await api.post("/cart", { productId, quantity });
    fetchCart();
  };

  const removeFromCart = async (id) => {
    await api.delete(`/cart/${id}`);
    fetchCart();
  };

  const updateQuantity = async (productId, quantity) => {
    await api.put(`/cart/${productId}`, { quantity });
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};

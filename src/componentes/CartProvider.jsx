import React, { useState } from 'react';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > item.stock) return;
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
  const clearCart = () => setCartItems([]);
  const isInCart = (itemId) => cartItems.some(cartItem => cartItem.id === itemId);
  const getTotalQuantity = () => cartItems.reduce((accumulated, item) => accumulated + item.quantity, 0);
  const getTotalPrice = () => cartItems.reduce((accumulated, item) => accumulated + item.precio * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems, addItem, removeItem, clearCart, isInCart, getTotalQuantity, getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from './useCart';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import './Cart.css';

const Cart = () => {
  const { cartItems, getTotalPrice, getTotalQuantity, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos desde el catálogo para comenzar tu compra.</p>
        <Link to="/" className="btn-go-home">Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>🛒 Mi Carrito</h1>
      <div className="cart-layout">
        <div className="cart-items-column">
          <div className="cart-items-header">
            <span>{getTotalQuantity()} productos en tu carrito</span>
            <button onClick={clearCart} className="btn-vaciar">
              🗑️ Vaciar carrito
            </button>
          </div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <strong>${getTotalPrice().toLocaleString('es-AR')}</strong>
          </div>
        </div>
        <div className="cart-checkout-column">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default Cart;

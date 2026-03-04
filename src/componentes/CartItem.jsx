import React from 'react';
import useCart from './useCart';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={item.imagen} alt={item.nombre} />
      <div className="cart-item-info">
        <h4>{item.nombre}</h4>
        <p className="cart-item-categoria">{item.categoria}</p>
        <p className="cart-item-precio">${item.precio.toLocaleString('es-AR')} x {item.quantity} unidad/es</p>
        <p className="subtotal">${(item.precio * item.quantity).toLocaleString('es-AR')}</p>
      </div>
      <button onClick={() => removeItem(item.id)} className="cart-item-remove">
        🗑️ Eliminar
      </button>
    </div>
  );
};

export default CartItem;

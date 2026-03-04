import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import useCart from './useCart';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem, cartItems } = useCart();

  const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
  const quantityInCart = itemInCart ? itemInCart.quantity : 0;
  const remainingStock = item.stock - quantityInCart;

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="item-detail-wrapper">
      <div className="item-detail">
        <img src={item.imagen} alt={item.nombre} />
        <div className="item-detail-info">
          <h2>{item.nombre}</h2>
          <p className="item-categoria">Categoría: {item.categoria}</p>
          <p className="item-descripcion">{item.descripcion}</p>
          <p className="item-precio">${item.precio.toLocaleString('es-AR')}</p>
          <p className="item-stock">
            {item.stock > 0 ? `Stock disponible: ${item.stock}` : '⚠️ Sin stock disponible'}
          </p>

          {item.stock === 0 ? (
            <p className="sin-stock">Este producto no tiene stock disponible</p>
          ) : remainingStock <= 0 ? (
            <div className="added-to-cart">
              <p className="added-msg">✅ Alcanzaste el límite de stock disponible</p>
              <div className="added-actions">
                <Link to="/" className="btn-secondary">Seguir comprando</Link>
                <Link to="/cart" className="btn-primary">Ir al carrito</Link>
              </div>
            </div>
          ) : addedToCart ? (
            <div className="added-to-cart">
              <p className="added-msg">✅ ¡Producto agregado al carrito!</p>
              <div className="added-actions">
                <Link to="/" className="btn-secondary">Seguir comprando</Link>
                <Link to="/cart" className="btn-primary">Ir al carrito</Link>
              </div>
            </div>
          ) : (
            <ItemCount stock={remainingStock} initial={1} onAdd={handleAdd} />
          )}

          {quantityInCart > 0 && remainingStock > 0 && !addedToCart && (
            <p className="cart-hint">
              Ya agregaste {quantityInCart} unidad/es en el carrito — podés agregar hasta {remainingStock} más
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

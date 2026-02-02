import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button onClick={decrement} disabled={count <= 1}>
          -
        </button>
        <span className="count-display">{count}</span>
        <button onClick={increment} disabled={count >= stock}>
          +
        </button>
      </div>
      <button className="add-to-cart-btn"  disabled={stock === 0}>
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ItemCount;

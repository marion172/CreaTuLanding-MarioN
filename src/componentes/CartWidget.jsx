import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-container">
            <span className="cart-icon">🛒</span>
            <span className="bubble">5</span>
        </div>
    );
}

export default CartWidget;
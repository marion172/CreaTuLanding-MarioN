import { Link } from 'react-router-dom';
import useCart from './useCart';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-link">
      <span className="cart-icon">🛒</span>
      {totalQuantity > 0 && (
        <span className="bubble">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;
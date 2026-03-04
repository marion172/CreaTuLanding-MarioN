import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const { state } = useLocation();
  
  if (!state) {
    return (
      <div className="order-confirmation">
        <h2>Orden #{orderId}</h2>
        <p>Tu compra fue registrada exitosamente.</p>
        <Link to="/" className="btn-primary">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="order-confirmation-page">
      <div className="order-confirmation-card">

        <div className="order-success-icon">🎉</div>
        <h1>¡Compra confirmada!</h1>
        <p>Gracias <strong>{state.nombre}</strong>, tu pedido fue registrado.</p>

        <div className="order-id-box">
          <span>Número de orden</span>
          <strong>{state.orderId}</strong>
        </div>

        <div className="order-summary">
          <h3>Resumen del pedido</h3>
          <ul>
            {state.items.map(item => (
              <li key={item.id}>
                <span>{item.nombre}</span>
                <span>{item.quantity} unidad/es — ${item.subtotal.toLocaleString('es-AR')}</span>
              </li>
            ))}
          </ul>
          <div className="order-total">
            <span>Total pagado:</span>
            <strong>${state.total.toLocaleString('es-AR')}</strong>
          </div>
        </div>   

        <Link to="/" className="btn-primary">
          Volver al inicio
        </Link>

      </div>
    </div>
  );
};

export default OrderConfirmation;
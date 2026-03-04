import React, { useState } from 'react';
import { collection, addDoc, doc, updateDoc, increment, Timestamp } from 'firebase/firestore';
import { db } from '../services/firestore/firebase';
import useCart from './useCart';
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', apellido: '', email: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'El apellido es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const order = {
        buyer: { nombre: formData.nombre, apellido: formData.apellido, email: formData.email },
        items: cartItems.map(item => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          quantity: item.quantity,
          subtotal: item.precio * item.quantity,
        })),
        total: getTotalPrice(),
        date: Timestamp.now(),
        status: 'generada',
      };

      const docRef = await addDoc(collection(db, 'orders'), order);

      const stockUpdates = cartItems.map(item =>
        updateDoc(doc(db, 'ecommerce-coder', item.id), {
          stock: increment(-item.quantity)
        })
      );
      await Promise.all(stockUpdates);

      clearCart();
      navigate(`/confirmation/${docRef.id}`, {
        state: {
          orderId: docRef.id,
          email: formData.email,
          nombre: formData.nombre,
          total: getTotalPrice(),
          items: order.items,
        }
      });
    } catch (error) {
      console.error('Error al generar la orden:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-form">
      <h2>Datos del comprador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
          {errors.nombre && <span className="error">{errors.nombre}</span>}
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" />
          {errors.apellido && <span className="error">{errors.apellido}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit" className="btn-confirmar" disabled={loading}>
          {loading ? '⏳ Procesando...' : '✅ Confirmar compra'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartProvider from './componentes/CartProvider';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import OrderConfirmation from './componentes/OrderConfirmation';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation/:orderId" element={<OrderConfirmation />} />
      </Routes>
    </CartProvider>
  );
}

export default App;

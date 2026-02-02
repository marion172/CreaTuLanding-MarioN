import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.imagen} alt={item.nombre} />
        </div>
        <div className="item-detail-info">
          <p className="item-categoria">Categoría: {item.categoria}</p>
          <h2>{item.nombre}</h2>
          <p className="item-descripcion">{item.descripcion}</p>
          <p className="item-precio">${item.precio.toLocaleString('es-AR')}</p>
          <p className="item-stock">Stock disponible: {item.stock}</p>
          
          <ItemCount stock={item.stock} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

import React from 'react';
import Card from './Card';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;

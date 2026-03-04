import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getProductos, getProductosByCategory } from '../services/productos';
import { getProductos, getProductosByCategory } from '../services/firestore/firebase';
import ItemList from './ItemList';
import './ItemListContainer.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const funcionAsync = categoryId ? getProductosByCategory : getProductos;
    
    funcionAsync(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, [categoryId]);
  
  const listProd = products.length === 0;

  return (
    <div className="item-list-container">
      {categoryId && <h2>Categoría: {categoryId}</h2>}
      {listProd ? (
        <p className="loading">Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;

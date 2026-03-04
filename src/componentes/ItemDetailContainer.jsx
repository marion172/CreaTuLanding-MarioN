import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
//import { getProductoById } from "../services/productos"; 
import { getProductoById } from "../services/firestore/firebase"; 
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {    
    const fetchProduct = async () => {
      try {        
        const response = await getProductoById((id));
        setItem(response);
      } catch (error) {
        console.error(error);
      }
    };    
    fetchProduct();
    
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p style={{textAlign:'center'}}>Cargando detalle...</p>}
    </div>
  );
};

export default ItemDetailContainer;
import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ msj }) => {
    return (
        <div className="list-container">
            <h2 className="msj-text">{msj}</h2>
        </div>
    );
}

export default ItemListContainer;
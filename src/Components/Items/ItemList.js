import React from 'react';
import Item from './Item';
import './items.css';

const ItemList = ({ productos }) => {
  return (
    <div>
      <h2>Lista de productos</h2>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;

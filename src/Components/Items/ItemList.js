import React from 'react';
import Item from './Item';
import './items.css';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <div>
      <h2>Lista de productos</h2>
      {productos.map((producto) => (
        <Item key={productos.id} producto={producto} />
      ))}


     <Link to={`/detalle/${productos.id}`}>
     <button>Ver más</button>

     </Link>
    </div>
  );
};

export default ItemList;

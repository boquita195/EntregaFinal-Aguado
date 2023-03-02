import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './items.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = ({greeting}) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, nombre: 'BullsOG', precio: 250 },
            { id: 2, nombre: 'Lakers', precio: 200 },
            { id: 3, nombre: 'Lebron', precio: 300 },
          ]);
        }, 2000);
      });
    };

    obtenerProductos().then((productos) => setProductos(productos));
  }, []);

  return (
    <div className='zapatillas'>
      <ItemList productos={productos} />
    </div>
  );
};






export default ItemListContainer;
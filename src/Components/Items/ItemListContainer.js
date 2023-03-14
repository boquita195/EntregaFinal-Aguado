import React, { useState, useEffect } from 'react';
import productos from '../../Productos/Products';
import ItemList from './ItemList';
import './items.css';


function getItemsFromDataBase(categoria) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter((Productos) => productos.categoria === categoria);
      resolve(productosFiltrados);
    }, 2000);
  });
}

  const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const categoria = "Zapatillas"; 
  
  useEffect(() => {
    let PromiseData = getItemsFromDataBase(categoria);
    PromiseData.then((respuesta) => {
      setProductos(respuesta);
    }).catch((error) => alert(error));
  }, [categoria]);

  return (
    <div className='zapatillas'>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};







export default ItemListContainer;
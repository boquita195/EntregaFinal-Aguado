import React, { useState, useEffect } from 'react';
import productos from '../../Productos/Products';
import ItemList from './ItemList';
import './items.css';
import { useParams } from 'react-router-dom';

function getItemsFromDataBase(categoria) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
      resolve(productosFiltrados);
    }, 2000);
  });
}


const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams(); // Obtener el valor actual del parámetro de la URL
  
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
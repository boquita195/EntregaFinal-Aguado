import React, { useState, useEffect } from 'react';
import productos from '../../Productos/Products';
import ItemList from './ItemList';
import './items.css';
import { useParams } from 'react-router-dom';

function getItemsFromDataBase() {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if(error === true) reject ("Error leyendo los datos"); 
      resolve(productos);
    }, 2000);
  });
}
function getItemsByCategoriaFromDataBase(categoriaURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    let productosFiltered = productos.filter(item => item.categoria === categoriaURL)
     resolve(productosFiltered);
    }, 2000);
  });
}
   const ItemListContainer = ({greeting}) => {
   const [productos, setProductos, undefinded] = useState([]);
   const params = useParams();
   const idCategoria = params.idCategoria;  
async function leerDatos(){
  if(idCategoria === undefinded){
    let respuesta = await getItemsFromDataBase();
    setProductos(respuesta);
  }
  else{
   let respuesta = getItemsByCategoriaFromDataBase(idCategoria);
   setProductos(respuesta);
  }
}
useEffect(() => {leerDatos();}, [idCategoria]);
   
  return (
    <div className='zapatillas'>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};


export default ItemListContainer;
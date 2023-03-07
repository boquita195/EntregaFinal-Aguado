import React, { useState } from 'react';
import productos from '../../Productos/Products';
import ItemList from './ItemList';
import './items.css';

function getItemsFromDataBase(){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(productos);
    }, 2000);
  })
}
const ItemListContainer = ({greeting}) => {
const [productos, setProductos] = useState([]);  
let PromiseData = getItemsFromDataBase();

PromiseData.then((respuesta) =>{
  setProductos(respuesta);
}).catch((error) => alert(error)); 

  return (
    <div className='zapatillas'>
       <h2>{greeting}</h2>
      <ItemList productos={productos}  />
    </div>
  );
};






export default ItemListContainer;
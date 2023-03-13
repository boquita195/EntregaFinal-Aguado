import React from 'react';
import Item from './Item';
import './items.css';
import { Link } from 'react-router-dom';
import productos from '../../Productos/Products';

const categorias = {}
productos.forEach((producto) => {
  const categoria = producto.categoria
  if (categorias[categoria]) {
    categorias[categoria].push(producto)
  } else {
    categorias[categoria] = [producto]
  }
})

const ItemList = ({ productos }) => {
  return (
    Object.entries(categorias).map(([categoria, productos]) => (
      <div key={categoria}>
        
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <Item producto={producto} />
              <Link to={`/detalle/${producto.id}`}>
                <button>Ver más</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )))}
    


export default ItemList;

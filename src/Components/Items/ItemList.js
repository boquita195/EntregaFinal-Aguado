import React from 'react';
import Item from './Item';
import './items.css';
import { Link } from 'react-router-dom';




const ItemList = ({ productos }) => {
  return (
    
      <div>
        
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
    )}
    


export default ItemList;

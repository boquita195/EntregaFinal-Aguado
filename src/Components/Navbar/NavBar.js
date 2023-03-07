import React from 'react'
import CartWidget from '../Cartwidget/CartWidget'
import './navbar.css'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
   <div className="nav-bar">
   <div className="left">
   <div className="logo">
    <h1>Valhalla</h1>  
   </div>
      
        <ul className="nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
          <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;

import React from 'react'
import CartWidget from '../Cart/CartWidget'
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
            <Link to="/categoria/Zapatillas">Zapatillas</Link>
          </li>
         <li>
            <Link to="/categoria/Camisetas"> Camisetas </Link> 
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

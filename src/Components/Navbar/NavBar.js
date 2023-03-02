import React from 'react'
import CartWidget from '../Cartwidget/CartWidget'
import './navbar.css'


const NavBar = () => {
  return (
    <div className='nav-bar'>
    <h1><a href='/'> Valhalla</a></h1>
     <div class="nav" role={'navigation'}>
      <ul>
      <li><a href='/'>Inicio</a></li>
      <li><a href='/'>Productos</a></li>
      <li><a href='/'>Contacto</a></li>
      </ul>
      </div> 
     <div>
      <CartWidget />
     </div>
    </div>
  )
}

export default NavBar
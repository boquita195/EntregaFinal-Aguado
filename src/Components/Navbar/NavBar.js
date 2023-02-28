import React from 'react'
import CartWidget from './CartWidget'
import './navbar.css'


const NavBar = () => {
  return (
    <div className='nav-bar'>
    <h1><a href='/'> Valhalla</a></h1>
     <div class="nav" role={'navigation'}>
      <ul>
      <li><a href='/'>Zapatillas</a></li>
      <li><a href='/'>Buzos</a></li>
      <li><a href='/'>Remeras</a></li>
      </ul>
      </div> 
      <CartWidget />
    </div>
  )
}

export default NavBar
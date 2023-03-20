import React, { useContext } from 'react'
import './cartwidget.css'
import { createContext } from 'react'
import cartContext from '../../Context/CartContext'


function CartWidget(){
const {cart} = useContext(cartContext);
const cartCount = cart.length;



return (
 <div className='cart'>
 <a href='/'>
 <img src='/img/cart.png' />
 <span className='icon'>{cartCount}</span> 
 </a>
 </div>
)
}

export default CartWidget
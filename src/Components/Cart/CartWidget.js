import React, { useContext } from 'react'
import './cartwidget.css'
import { createContext } from 'react'
import cartContext from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom';


function CartWidget(){
const {totalQuantity} = useContext(cartContext);
const navigate = useNavigate();



return (
 
 <div className='cart' onClick={() => navigate('/Cart')}>

 <img src='/img/cart.png' alt='cart' className='carting' />
 {totalQuantity}

 </div>
)
}

export default CartWidget
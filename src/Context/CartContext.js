import { createContext, useState } from "react";
import productos from "../Productos/Products";

const cartContext = createContext({cart: []})
const Provider = cartContext.Provider
function CartContextProvider(props){
 const [cart, setCart] = useState([])
function addItem(item, count){
const newCart = [setCart];
productos.count = count;
newCart.push(productos);
setCart(newCart);
}
 
function getCountInCart(){
let total = 0;
cart.forEach((item)=> total + item.count);
return total;
}
function isInCart(id){
  return  cart.some(item => item.id === id)
}
function removeItem(){

}
function clear(){

}

 
 return(
    <Provider value={{cart, addItem, test:"OK", isInCart, removeItem, clear, getCountInCart}}>
   {props.children}
    </Provider>
 )   
}


export {CartContextProvider};
export default cartContext;
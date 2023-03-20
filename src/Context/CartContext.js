import { createContext, useState } from "react";
import productos from "../Productos/Products";

const cartContext = createContext({cart: []})
const Provider = cartContext.Provider
function CartContextProvider({children}){
 const [cart, setCart] = useState([])
function addItem(item, count){
const newCart = [setCart];
productos.count = count;
newCart.push(productos);
}
 
function getItemCount(){
let total = 0;
cart.forEach((item)=> total + item.count);
return total;
}
function isInCart(id){
  return  cart.some(item => item.id === id)
}



 
 return(
    <Provider value={{cart, addItem, test:"OK", isInCart}}>
    {children}
    </Provider>
 )   
}


export {CartContextProvider};
export default cartContext;
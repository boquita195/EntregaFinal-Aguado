import React from "react";
import { useContext } from "react";
import  CartContext  from "../../Context/CartContext";
import Button from "../Button/index";
import CheckoutCart from "./CheckOutCart";
import './cartwidget.css';


function CartContainer() {
  const { cart, removeItemFromCart, getPriceInCart } = useContext(CartContext);

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((productos) => {
            return (
              <tr key={productos.id} className="cartList_row">
                <td>
                  <img height={50} src={productos.avatar} alt={productos.first_name} />
                </td>
                <td>{productos.nombre}</td>
                <td>$ {productos.precio}</td>
                <td>{productos.count}</td>                
                <td>
                  <button>X</button>
                </td>
                <th>$ --,--</th>
              </tr>
            );
          })}
        </tbody>
      </table>
        
      <div className="cartList_detail">
        <h4>El total de tu compra es de $ --,--</h4>
      </div>

      <CheckoutCart cart={cart}/>
    </>
  );
}

export default CartContainer;

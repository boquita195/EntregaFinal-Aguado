import "./items.css";
import { useState, useEffect } from "react";
import productos from "../../Productos/Products";
import { useParams } from "react-router-dom";
import Button from "../Button";
import ItemCount from "./ItemCount";


function getSingleItemFromDataBase(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let encontrado = productos.find((item) => item.id === Number(idItem));
      resolve(encontrado);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [productos, setProductos] = useState({});

  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDataBase(idUser).then((respuesta) => {
      setProductos(respuesta);
    });
  }, [idUser]);

  return (
    <>
      <div className="item-list-container">
        <ul className="item-list">
          <li className="item-card" key={productos.id}>
            <img src={productos.avatar} alt={productos.nombre} />
            <h4>{`${productos.nombre} ${productos.detalle}`}</h4>
            <small>{productos.categoria}</small>
            <p>{`$${productos.precio}`}</p>
            <Button onClick = {()=> {alert("Agregaste al carrito!");}}>Ver detalles</Button>
            <ItemCount initial={1}  stock={productos.stock}/>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;

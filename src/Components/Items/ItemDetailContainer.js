import "./items.css";
import { useState, useEffect } from "react";
import productos from "../../Productos/Products";
import { useParams } from "react-router-dom";

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
            <img src={process.env.PUBLIC_URL + 'BullsOG'} alt={"Zapatillas BullsOG"} />
            <h4>{`${productos.nombre} ${productos.description}`}</h4>
            <small>{productos.categoria}</small>
            <p>{`$${productos.precio}`}</p>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;

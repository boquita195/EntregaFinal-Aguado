import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ greeting }) {
  const [productos, setProductos] = useState({});

  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        let encontrado = products.find((item) => item.id === Number(idUser));
        resolve(encontrado);
      }, 2000);
    });

    promesaItem.then((respuesta) => setProductos(respuesta));
  }, []);

  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>

        <ul className="item-list">
          <li className="item-card" key={productos.id}>
            <img src={productos.avatar} alt={productos.name} />
            <h4>{`${productos.name} ${productos.description}`}</h4>
            <small>{productos.category}</small>
            <p>$5000</p>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;

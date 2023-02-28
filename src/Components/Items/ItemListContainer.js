import ItemList from './ItemList';
import './Items.css'

function ItemListContainer({greeting}) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
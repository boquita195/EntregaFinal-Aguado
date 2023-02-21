import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './NavBar/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={'Bienvenido!'} /> 
    </div>
    );
}

export default App;

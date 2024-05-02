import './App.css';
import ItemListContainer from './assets/componentes/ItemListContainer';
import NavBar from './assets/componentes/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Mi Tienda !" />
    </>
  );
}

export default App;

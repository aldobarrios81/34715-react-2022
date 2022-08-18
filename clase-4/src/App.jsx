import './Components/NavBar'
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a Bakery"/>
    </>
  );
}

export default App;

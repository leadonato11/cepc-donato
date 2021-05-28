import NavBar from "./components/NavBar"
import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
// import ItemListContainer from "./components/ItemListContainer"

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1>Bienvenidos a la tienda de Puro Campeón!</h1>
      <ItemDetailContainer productId={6}/>
      {/* <ItemListContainer /> */}
    </div>
  )
}

export default App
import NavBar from "./components/NavBar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  // const handleAdd = (quantity) => {
  //   console.log(`Se agregaron ${quantity} items al carrito`)
  // }

  return (
    <div className="App">
      <NavBar/>
      <h1>Bienvenidos a la tienda de Puro Campeón!</h1>
      <ItemListContainer />
    </div>
  )
}

export default App
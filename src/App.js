import NavBar from "./components/NavBar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"

function App() {
  const handleAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} items al carrito`)
  }

  return (
    <div className="App">
      <NavBar/>
      <h2>E-Commerce on React!</h2>
      <ItemListContainer greeting="Esto va a cambiar por el catálogo" />
      <ItemCount initial={1} onAdd={handleAdd} stock={10} />
    </div>
  )
}

export default App
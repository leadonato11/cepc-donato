import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import "./App.css"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h2>E-Commerce on React!</h2>
      <ItemListContainer />
    </div>
  )
}

export default App
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        {<NavBar />}
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

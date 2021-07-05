import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cartContext";
import Home from "./components/Home";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categorySlug">
              <ItemListContainer />
            </Route>
            <Route exact path="/product/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

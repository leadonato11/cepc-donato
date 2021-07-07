import NavBar from "./components/NavBar";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cart } from "./screens/Cart";
import { CartProvider } from "./context/cartContext";
import { Home } from "./screens/Home";
import { Products } from "./screens/Products";
import { NotFound } from "./screens/NotFound";
import { ProductDetail } from "./screens/ProductDetail";
import { Category } from "./screens/Category";
import { Footer } from "./components/Footer";

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
              <Products />
            </Route>
            <Route exact path="/category/:categorySlug">
              <Category />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetail />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

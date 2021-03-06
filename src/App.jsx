import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./contexts/cart/CartContext";
import Footer from "./components/Footer/Footer";
import "./scss/App.scss";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/">
            <ItemListContainer greeting="Productos" />
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

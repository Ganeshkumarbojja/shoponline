import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

import AppContext from "./context/appContext";

import "./App.css";

const App = () => {
  const [cartItems, setCartItem] = useState([]);
  const [isdark, setIsDark] = useState(false);
  console.log(cartItems, "add cart items");
  return (
    <AppContext.Provider
      value={{
        isdark,
        changeTheme: setIsDark,
        cartItems,
        setCartItem: setCartItem,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
export default App;

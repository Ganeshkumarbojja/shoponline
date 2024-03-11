import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

import AppContext from "./context/appContext";

import "./App.css";

const App = () => {
  const [isdark, setIsDark] = useState(false);
  return (
    <AppContext.Provider value={{ isdark, changeTheme: setIsDark }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
export default App;

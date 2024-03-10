import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/products/:id" component={ProductDetails} />
    </Switch>
  </BrowserRouter>
);
export default App;

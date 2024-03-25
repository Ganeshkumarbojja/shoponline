import React, { useContext } from "react";

const AppContext = React.createContext({
  isdark: false,
  changeTheme: () => {},
  cartItems: [],
  setCartItem: () => {},
});

export default AppContext;

import React,{useContext} from "react";

const AppContext = React.createContext({
  isdark: false,
  changeTheme: () => {},
});

export default AppContext;

import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";

import {
  AppHeader,
  AppTitle,
  LinkStyled,
  LinkStyledNav,
  ThemeBtn,
  NavLinks,
} from "./styledComponents";

import AppContext from "../../context/appContext";

const Header = () => {
  const context = useContext(AppContext);
  const { isdark, changeTheme } = context;

  const onTheme = () => {
    changeTheme(!isdark);
  };
  console.log(isdark);
  return (
    <AppHeader isdark={isdark}>
      <LinkStyled to="/">
        <AppTitle isdark={isdark}>ShopOnline</AppTitle>
      </LinkStyled>
      <NavLinks>
        <li>
          <LinkStyledNav to="/">Home</LinkStyledNav>
        </li>
        <li>
          <LinkStyledNav to="/products">Products</LinkStyledNav>
        </li>
        <li>
          <LinkStyledNav to="/cart">Cart</LinkStyledNav>
        </li>
        <li>
          <ThemeBtn type="button" onClick={onTheme}>
            {isdark ? (
              <CiLight size={25} color="#ffffff" />
            ) : (
              <MdDarkMode size={25} color="#000000" />
            )}
          </ThemeBtn>
        </li>
      </NavLinks>
    </AppHeader>
  );
};

export default Header;

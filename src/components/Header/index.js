import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import { AppHeader, AppTitle, LinkSytled, ThemeBtn } from "./styledComponents";

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
      <LinkSytled to="/">
        <AppTitle isdark={isdark}>ShopOnline</AppTitle>
      </LinkSytled>
      <ThemeBtn type="button" onClick={onTheme}>
        {isdark ? (
          <CiLight size={25} color="#ffffff" />
        ) : (
          <MdDarkMode size={25} color="#000000" />
        )}
      </ThemeBtn>
      <LinkSytled>Cart</LinkSytled>
    </AppHeader>
  );
};

export default Header;

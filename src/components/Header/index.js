import { AppHeader, AppTitle } from "./styledComponents";

import { LinkSytled } from "./styledComponents";

const Header = () => (
  <AppHeader>
    <LinkSytled to="/">
      <AppTitle>ShopOnline</AppTitle>
    </LinkSytled>
  </AppHeader>
);

export default Header;

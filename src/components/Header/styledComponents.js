import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppHeader = styled.nav`
  display: flex;
  min-height: 10vh;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding-left: 50px;
  margin-bottom: 20px;
`;

export const AppTitle = styled.p`
  font-size: 25px;
  font-family: "Caveat";
  font-weight: 600;
  color: midnightblue;
`;

export const LinkSytled = styled(Link)`
  text-decoration: none;
`;

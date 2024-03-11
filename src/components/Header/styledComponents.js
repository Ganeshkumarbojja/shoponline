import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  border-bottom: ${(props) => (props.isdark ? "none" : " solid 2px #edebeb ")};
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${(props) => (props.isdark ? "#000000" : "#ffffff")};
`;

export const AppTitle = styled.p`
  font-size: 25px;
  font-family: "Caveat";
  font-weight: 600;
  color: midnightblue;
  color: ${(props) => (props.isdark ? "#ffffff" : "midnightblue")};
`;

export const LinkSytled = styled(Link)`
  text-decoration: none;
`;

export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

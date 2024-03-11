import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isdark ? "#171616" : "#ffffff")};
`;

export const ProductsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

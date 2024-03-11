import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
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

export const ProductsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  align-self: flex-start;
  padding-left: 60px;
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
  }
`;

export const FilterLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
  margin-right: 10px;
`;

export const ProductsTitle = styled.h1`
  font-size: 35px;
  font-weight: 500;
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
`;

export const CategoriesList = styled.select`
  outline: none;
  height: 30px;
`;

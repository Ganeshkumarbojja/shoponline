import styled from "styled-components";

export const CartImage = styled.img`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const CartContainer = styled.div`
  background-color: ${(props) => (props.isdark ? "#171616" : "#ffffff")};
  height: 90vh;
  padding: 50px;
`;

export const CartEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CartEmptyHead = styled.h1`
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
  margin-bottom: 0px;
  font-size: 40px;
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 30px;
    margin-top: 30px;
  }
`;

export const CartEmptyPara = styled.p`
  color: ${(props) => (props.isdark ? "#e3e1e1" : "#787777")};
  font-size: 18px;
`;

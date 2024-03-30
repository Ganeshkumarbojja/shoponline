import styled from "styled-components";

export const CartEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartImage = styled.img`
  width: 30%;
`;

export const CartContainer = styled.div`
  background-color: ${(props) => (props.isdark ? "#171616" : "#ffffff")};
  height: 90vh;
  padding: 50px;
`;

export const CartEmptyHead = styled.h1`
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
  margin-bottom: 0px;
  font-size: 40px;
  margin-top: 20px;
`;

export const CartEmptyPara = styled.p`
  color: ${(props) => (props.isdark ? "#e3e1e1" : "#787777")};
`;

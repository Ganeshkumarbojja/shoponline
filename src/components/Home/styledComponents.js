import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isdark ? "#171616" : "#ffffff")};
`;

export const HomeCard = styled.div`
  box-shadow: ${(props) =>
    props.isdark ? "none" : "0px 4px 16px 0px #bfbfbf"};
  width: 90%;
  max-width: 1200px;
  padding: 50px;
  border-radius: 20px;
  display: flex;
  background-color: ${(props) => (props.isdark ? "#000000" : "#ffffff")};
`;

export const HomeImage = styled.img`
  width: 40%;
  border-radius: 20px;
  margin-left: 30px;
`;

export const HomeTitle = styled.h1`
  font-size: 45px;
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
`;

export const HomeDescription = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => (props.isdark ? "#e3e1e1" : "#787777")};
`;

export const ShopNowBtn = styled.button`
  background-color: midnightblue;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 6px;
`;

import styled from "styled-components";

export const NotFoundContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${(props) => (props.isdark ? "#171616" : "#ffffff")};
`;

export const NotFoundCard = styled.div`
  box-shadow: ${(props) =>
    props.isdark ? "none" : "0px 4px 16px 0px #bfbfbf"};
  max-width: 1200px;
  width: 50%;
  padding: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.isdark ? "#000000" : "#ffffff")};
  @media screen and (max-width: 767px) {
    width: 80%;
    padding: 20px;
  }
`;

export const NotFoundImage = styled.img`
  width: 50%;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 40px;
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
  margin-bottom: 0px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

export const NotFoundDescription = styled.p`
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => (props.isdark ? "#e3e1e1" : "#787777")};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const GotoHomeBtn = styled.button`
  background-color: midnightblue;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 6px;
`;

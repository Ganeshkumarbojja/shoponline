import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.li`
  width: 250px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: ${(props) =>
    props.isdark ? "none" : "0px 4px 16px 0px #bfbfbf"};
  background-color: ${(props) => (props.isdark ? "#000000" : "#ffffff")};
  @media screen and (max-width: 767px) {
    width: 45%;
  }
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const LinkSytled = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 80%;
  height: 200px;
  border-radius: 10px;
  align-self: center;
  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

export const ProductTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
`;

export const PriceAndRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.isdark ? "#e3e1e1" : "midnightblue")};
`;

export const Rating = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  color: ${(props) => (props.isdark ? "#000000" : "#ffffff")};
  margin-left: 5px;
`;

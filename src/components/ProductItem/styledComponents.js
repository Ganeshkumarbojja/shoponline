import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.li`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  width: 250px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const LinkSytled = styled(Link)`
  text-decoration: none;
`;

export const ProductImage = styled.img`
  width: 80%;
  height: 200px;
`;

export const ProductTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: #000000;
`;

export const PriceAndRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
`;

export const Rating = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-right: 10px;
  font-weight: 500;
`;

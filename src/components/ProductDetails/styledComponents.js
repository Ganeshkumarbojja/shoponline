import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ProductDetailsCard = styled.div`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  width: 90%;
`;

export const ProductDetailsImage = styled.img`
  width: 30%;
  margin-right: 50px;
`;

export const ProductTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
`;

export const RatingAndReviewsContainer = styled.div`
  display: flex;
  align-items: center;
`;

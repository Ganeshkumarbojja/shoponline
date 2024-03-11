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
  max-width: 1200px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ProductDetailsImage = styled.img`
  width: 30%;
  margin-right: 50px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-bottom: 30px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #787777;
`;

export const RatingAndReviewsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Reviews = styled.p`
  font-size: 16px;
  margin-left: 10px;
  font-size: 400;
  color: #787777;
`;

export const Price = styled.p`
  font-size: 25px;
  font-size: 600;
  color: midnightblue;
`;

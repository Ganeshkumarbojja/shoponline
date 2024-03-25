import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
  background-color: ${(props) => (props.isdark ? "#171616" : "#ffffff")};
`;

export const ProductDetailsCard = styled.div`
  box-shadow: ${(props) =>
    props.isdark ? "none" : "0px 4px 16px 0px #bfbfbf"};
  background-color: ${(props) => (props.isdark ? "#000000" : "#ffffff")};
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
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-bottom: 30px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: ${(props) => (props.isdark ? "#ffffff" : "#000000")};
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${(props) => (props.isdark ? "#e3e1e1" : "#787777")};
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
  color: ${(props) => (props.isdark ? "#e3e1e1" : "midnightblue")};
`;

export const Price = styled.p`
  font-size: 25px;
  font-size: 600;
  color: ${(props) => (props.isdark ? "#e3e1e1" : "midnightblue")};
`;

export const AddtoCartBtn = styled.button`
  background-color: midnightblue;
  color: #ffffff;
  font-weight: 500;
  border: none;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 10;
`;

import { useContext } from "react";
import { FaStar } from "react-icons/fa";

import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  Rating,
  PriceAndRatingContainer,
  Price,
  LinkSytled,
} from "./styledComponents";

import { RatingContainer } from "../commonStyles";
import AppContext from "../../context/appContext";

const ProductItem = (props) => {
  const { productDetails } = props;
  const { id, image, price, rating, title } = productDetails;
  const context = useContext(AppContext);
  const { isdark } = context;

  return (
    <ProductContainer isdark={isdark}>
      <LinkSytled to={`/products/${id}`}>
        <ProductImage src={image} alt={title} />
        <ProductTitle isdark={isdark}>{title}</ProductTitle>
        <PriceAndRatingContainer>
          <Price isdark={isdark}>Rs {price}/-</Price>
          <RatingContainer isdark={isdark}>
            <Rating isdark={isdark}>{rating.rate}</Rating>
            <FaStar color={isdark ? "#000000" : "#ffffff"} />
          </RatingContainer>
        </PriceAndRatingContainer>
      </LinkSytled>
    </ProductContainer>
  );
};

export default ProductItem;

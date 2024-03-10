import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  Rating,
  PriceAndRatingContainer,
  Price,
  LinkSytled,
} from "./styledComponents";

import { RatingContainer, StarImage } from "../commonStyles";

const ProductItem = (props) => {
  const { productDetails } = props;
  const { id, image, price, rating, title } = productDetails;

  return (
    <ProductContainer>
      <LinkSytled to={`/products/${id}`}>
        <ProductImage src={image} alt="product" />
        <ProductTitle>{title}</ProductTitle>
        <PriceAndRatingContainer>
          <Price>Rs {price}/-</Price>
          <RatingContainer>
            <Rating>{rating.rate}</Rating>
            <StarImage
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
            />
          </RatingContainer>
        </PriceAndRatingContainer>
      </LinkSytled>
    </ProductContainer>
  );
};

export default ProductItem;

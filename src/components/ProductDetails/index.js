import { useEffect, useState } from "react";

import {
  ProductDetailsContainer,
  ProductDetailsImage,
  ProductDetailsCard,
  ProductDescription,
  ProductTitle,
  RatingAndReviewsContainer,
  Reviews,
  Price,
} from "./styledComponents";

import { RatingContainer, StarImage } from "../commonStyles";
import { Rating } from "../ProductItem/styledComponents";

import Header from "../Header";
import Loader from "../Loader";

const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getProductDetails = async () => {
    setIsLoading(true);
    const { match } = props;
    const { params } = match;
    const { id } = params;
    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      setProductDetails(data);
      setIsLoading(false);
    } else {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <Header />
      <ProductDetailsContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductDetailsCard>
            <ProductDetailsImage src={productDetails.image} alt="product" />
            <div>
              <ProductTitle>{productDetails.title}</ProductTitle>
              <ProductDescription>
                {productDetails.description}
              </ProductDescription>
              <RatingAndReviewsContainer>
                <RatingContainer>
                  <StarImage
                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    alt="star"
                  />
                  <Rating>{productDetails.rating?.rate}</Rating>
                </RatingContainer>
                <Reviews>{productDetails.rating?.count} Reviews</Reviews>
              </RatingAndReviewsContainer>
              <Price>Rs {productDetails.price}/-</Price>
            </div>
          </ProductDetailsCard>
        )}
      </ProductDetailsContainer>
    </>
  );
};

export default ProductDetails;

import { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";

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

import { RatingContainer } from "../commonStyles";
import { Rating } from "../ProductItem/styledComponents";

import Header from "../Header";
import Loader from "../Loader";

import AppContext from "../../context/appContext";

const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(AppContext);
  const { isdark } = context;

  const getProductDetails = async () => {
    setIsLoading(true);
    const { match } = props;
    const { params } = match;
    const { id } = params;
    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    if (response.ok === true) {
      const data = await response.json();
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
      <ProductDetailsContainer isdark={isdark}>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductDetailsCard isdark={isdark}>
            <ProductDetailsImage
              src={productDetails.image}
              alt={productDetails.title}
            />
            <div>
              <ProductTitle isdark={isdark}>
                {productDetails.title}
              </ProductTitle>
              <ProductDescription isdark={isdark}>
                {productDetails.description}
              </ProductDescription>
              <RatingAndReviewsContainer>
                <RatingContainer isdark={isdark}>
                  <FaStar color={isdark ? "#000000" : "#ffffff"} />
                  <Rating isdark={isdark}>{productDetails.rating?.rate}</Rating>
                </RatingContainer>
                <Reviews isdark={isdark}>
                  {productDetails.rating?.count} Reviews
                </Reviews>
              </RatingAndReviewsContainer>
              <Price isdark={isdark}>Rs {productDetails.price}/-</Price>
            </div>
          </ProductDetailsCard>
        )}
      </ProductDetailsContainer>
    </>
  );
};

export default ProductDetails;

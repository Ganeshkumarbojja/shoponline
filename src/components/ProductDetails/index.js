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
  AddtoCartBtn,
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
  const { isdark, setCartItem } = context;

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
      console.log(productDetails);
    } else {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const onAddtoCart = () => {
    console.log(productDetails);
    setCartItem((prev) => [...prev, productDetails]);
  };

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
              <AddtoCartBtn type="button" onClick={onAddtoCart}>
                Add to Cart
              </AddtoCartBtn>
            </div>
          </ProductDetailsCard>
        )}
      </ProductDetailsContainer>
    </>
  );
};

export default ProductDetails;

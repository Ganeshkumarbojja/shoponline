import { useEffect, useState } from "react";
import { useContext } from "react";

import ProductItem from "../ProductItem";
import Loader from "../Loader";

import { ProductsContainer, ProductsList } from "./styledComponents";
import AppContext from "../../context/appContext";
import Header from "../Header";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AppContext);
  const { isdark } = context;
  const getProducts = async () => {
    const url = "https://fakestoreapi.com/products?sort=asc";
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setProductsList(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <ProductsContainer isdark={isdark}>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductsList>
            {productsList.map((product) => (
              <ProductItem key={product.id} productDetails={product} />
            ))}
          </ProductsList>
        )}
      </ProductsContainer>
    </>
  );
};

export default Products;

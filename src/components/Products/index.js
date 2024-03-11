import { useEffect, useState } from "react";
import { useContext } from "react";

import ProductItem from "../ProductItem";
import Loader from "../Loader";

import {
  ProductsContainer,
  ProductsList,
  ProductsHeader,
  FilterLabel,
  ProductsTitle,
  CategoriesList,
} from "./styledComponents";
import AppContext from "../../context/appContext";
import Header from "../Header";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AppContext);
  const { isdark } = context;
  const getProducts = async () => {
    let categoriesPath = "";
    if (activeCategory !== "") {
      categoriesPath = `category/${activeCategory}`;
    }
    const productsUrl = `https://fakestoreapi.com/products/${categoriesPath}?sort=asc`;
    setIsLoading(true);
    const productsResponse = await fetch(productsUrl);
    const productsData = await productsResponse.json();
    setProductsList(productsData);
    const categoriesUrl = "https://fakestoreapi.com/products/categories";
    const categoiesResponse = await fetch(categoriesUrl);
    const categoiesData = await categoiesResponse.json();
    setCategoriesList(categoiesData);
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [activeCategory]);

  const onCategoryChange = (e) => {
    if (e.target.value === "all") {
      setActiveCategory("");
    } else {
      setActiveCategory(e.target.value);
    }
  };

  const renderProductsBody = () => (
    <>
      <ProductsHeader>
        <ProductsTitle isdark={isdark}>Products</ProductsTitle>
        <div>
          <FilterLabel isdark={isdark} htmlFor="categories">
            Filter
          </FilterLabel>
          <CategoriesList
            onChange={onCategoryChange}
            value={activeCategory}
            id="categories"
          >
            <option value="all" key="all">
              All
            </option>
            {categoriesList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </CategoriesList>
        </div>
      </ProductsHeader>
      <ProductsList>
        {productsList.map((product) => (
          <ProductItem key={product.id} productDetails={product} />
        ))}
      </ProductsList>
    </>
  );
  return (
    <>
      <Header />
      <ProductsContainer isdark={isdark}>
        {isLoading ? <Loader /> : renderProductsBody()}
      </ProductsContainer>
    </>
  );
};

export default Products;

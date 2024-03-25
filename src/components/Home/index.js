import { Link } from "react-router-dom";
import { useContext } from "react";

import Header from "../Header";

import AppContext from "../../context/appContext";

import {
  HomeContainer,
  HomeCard,
  HomeImage,
  ShopNowBtn,
  HomeTitle,
  HomeDescription,
} from "./styledComponents";

const Home = () => {
  const context = useContext(AppContext);
  const { isdark } = context;
  return (
    <>
      <Header />
      <HomeContainer isdark={isdark}>
        <HomeCard isdark={isdark}>
          <div>
            <HomeTitle isdark={isdark}>Welcome to My Shop</HomeTitle>
            <HomeDescription isdark={isdark}>
              Shop the latest trends in fashion, electronics, and home decor at
              ShopOnline. Enjoy easy navigation, secure transactions, and fast
              shipping. Join our community for exclusive offers. Start shopping
              now at ShopOnline!
            </HomeDescription>
            <Link to="/products">
              <ShopNowBtn type="button">Shop Now</ShopNowBtn>
            </Link>
          </div>
          <HomeImage
            src="https://img.freepik.com/free-photo/concept-shopping-holidays-lifestyle-satisfied-smiling-man-holding-paper-bag-showing-thumb-up-recommending-store-standing-blue-background_1258-65695.jpg?t=st=1710144741~exp=1710148341~hmac=f89baca4c86347e8c7911391c21a4636ae70a9d215dc615b51ecf57c4d18b18d&w=900"
            alt="shopping"
          />
        </HomeCard>
      </HomeContainer>
    </>
  );
};

export default Home;

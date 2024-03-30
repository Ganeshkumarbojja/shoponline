import { useContext } from "react";
import AppContext from "../../context/appContext";
import Header from "../Header";
import ProductItem from "../ProductItem";

import {
  CartEmptyContainer,
  CartImage,
  CartContainer,
  CartEmptyHead,
  CartEmptyPara,
} from "./styledComponents";

const Cart = () => {
  const { cartItems, isdark } = useContext(AppContext);

  const cartEmptyView = () => (
    <CartEmptyContainer>
      <CartImage
        src="https://www.iskillindia.org/images/empty.png"
        alt="cart"
      />
      <CartEmptyHead isdark={isdark}>Your cart is empty.</CartEmptyHead>
      <CartEmptyPara isdark={isdark}>Add some to checkout.</CartEmptyPara>
    </CartEmptyContainer>
  );

  return (
    <>
      <Header />
      <CartContainer isdark={isdark}>
        {cartItems.length === 0 ? (
          cartEmptyView()
        ) : (
          <ul>
            {cartItems.map((item) => (
              <ProductItem key={item.id} productDetails={item} />
            ))}
          </ul>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;

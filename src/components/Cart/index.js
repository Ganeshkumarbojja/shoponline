import { useContext, useState } from "react";
import AppContext from "../../context/appContext";
import Header from "../Header";
import ProductItem from "../ProductItem";

const Cart = () => {
  const { cartItems } = useContext(AppContext);
  console.log(cartItems);

  return (
    <>
      <Header />
      <div>
        {cartItems.length == 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <ProductItem key={item.id} productDetails={item} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;

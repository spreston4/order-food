import React, { useState, useEffect } from "react";
import styles from "./ContentBody.module.css";
import CartProvider from "../../store/CartProvider";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

const ContentBody = (props) => {
  const [viewCart, setViewCart] = useState(false);
  // const [cartContents, setCartContents] = useState([{ quantity: 0 }]);
  // const [cartQuantity, setCartQuantity] = useState(0);

  // calculating quantity is fucked. Need to look into contect for cart instead of state.

  // useEffect(() => {
  //   const totalQuantity = cartContents
  //     .map((item) => item.quantity)
  //     .reduce((prev, next) => prev + next);

  //   console.log("cart quantity");
  //   console.log(totalQuantity);
  // }, [cartContents]);

  const viewCartHandler = () => {
    setViewCart(true);
  };

  const closeCartHandler = () => {
    setViewCart(false);
  };

  // const addItemHandler = (item) => {
  //   setCartContents((prevContents) => {
  //     return [...prevContents, item];
  //   });
  // };

  return (
    <div className={styles.content}>
      <CartProvider>
        {viewCart && (
          <Cart onCloseCart={closeCartHandler} />
        )}
        <Header onViewCart={viewCartHandler} />
        <Banner />
        <Menu />
      </CartProvider>
    </div>
  );
};

export default ContentBody;

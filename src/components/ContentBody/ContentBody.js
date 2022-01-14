import React, { useState } from "react";
import styles from "./ContentBody.module.css";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";

const ContentBody = (props) => {
  const [viewCart, setViewCart] = useState(false);
  const [cartContents, setCartContents] = useState("");

  const viewCartHandler = () => {
    setViewCart(true);
  };

  const closeCartHandler = () => {
    setViewCart(false);
  };

  const addItemHandler = (item) => {
    
    setCartContents((prevContents) => {
      return [...prevContents, item];
    });

    console.log(cartContents);
  };

  return (
    <div className={styles.content}>
      {viewCart && <Cart onCloseCart={closeCartHandler} contents={cartContents} />}
      <Header onViewCart={viewCartHandler} />
      <Banner />
      <Menu onAddToCart={addItemHandler} />
    </div>
  );
};

export default ContentBody;

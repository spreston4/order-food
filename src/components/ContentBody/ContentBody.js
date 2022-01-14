import React, { useState } from "react";
import styles from "./ContentBody.module.css";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";

const ContentBody = (props) => {

  const [viewCart, setViewCart] = useState(false);

  const viewCartHandler = () => {
    setViewCart(true);
  };

  const closeCartHandler = () => {
    setViewCart(false);
  };

  return (
    <div className={styles.content}>
      {viewCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onViewCart={viewCartHandler} />
      <Banner />
      <Menu />
    </div>
  );
};

export default ContentBody;

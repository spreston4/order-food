import React, { useState } from "react";
import styles from "./ContentBody.module.css";
import CartProvider from "../../store/CartProvider";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";

// Displays Cart, Header, Banner & Menu to the user - provides CartProvider conext to all children - passes closeCartHandler to Cart & viewCartHandler to Header
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
      <CartProvider>
        {viewCart && (
          <Cart onCloseCart={closeCartHandler} onOpenCart={viewCartHandler} />
        )}
        <Header onViewCart={viewCartHandler} />
        <Banner />
        <Menu />
      </CartProvider>
    </div>
  );
};

export default ContentBody;

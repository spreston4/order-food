import React from "react";
import styles from "./Header.module.css";
import CartButton from "../CartButton/CartButton";
import mealPhoto from "../../assets/meals.jpg";

const Header = (props) => {
  const cartButtonHandler = () => {
    props.onViewCart();
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Order Food</h1>
        <CartButton onViewCart={cartButtonHandler} />
      </header>
      <div className={styles.image}>
        <img src={mealPhoto} alt='Delicious Food!'></img>
      </div>
    </React.Fragment>
  );
};

export default Header;

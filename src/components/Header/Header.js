import React from "react";
import styles from "./Header.module.css";
import CartButton from "../CartButton/CartButton";
import mealPhoto from "../../assets/meals.jpg";

// Displays page title, header image & CartButton to the user - passes onViewCart prop to the CartButton
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Order Food</h1>
        <CartButton onViewCart={props.onViewCart} />
      </header>
      <div className={styles.image}>
        <img src={mealPhoto} alt="Delicious Food!"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;

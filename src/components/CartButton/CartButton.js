import React, { useContext, useEffect, useState } from "react";
import styles from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../CartIcon/CartIcon";

// Allows user to open their Cart - displays current amount of items in Cart - animates when item is added to Cart
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  // Calculate number of items in Cart
  const numItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // Conditional CSS formatting for bump animation
  const [buttonHighlight, setButtonHighlight] = useState(false);
  const buttonClasses = `${styles.button} ${
    buttonHighlight ? styles.bump : ""
  }`;

  useEffect(() => {
    // Verify Cart has items
    if (items.length === 0) {
      return;
    }
    setButtonHighlight(true);

    // Set timer to clear conditional formatting - making the animation reusable
    const timer = setTimeout(() => {
      setButtonHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button type="button" className={buttonClasses} onClick={props.onViewCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;

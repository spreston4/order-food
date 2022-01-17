import React, { useContext } from "react";
import styles from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../CartIcon/CartIcon";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  return (
    <button type="button" className={styles.button} onClick={props.onViewCart}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;

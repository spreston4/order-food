import React, { useContext, useEffect, useState } from "react";
import styles from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../CartIcon/CartIcon";

const CartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const [buttonHighlight, setButtonHighlight] = useState(false);

  const { items } = cartCtx;


  const numItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)


  const buttonClasses = `${styles.button} ${buttonHighlight ? styles.bump: ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return
    }
    setButtonHighlight(true);

    const timer = setTimeout(() => {
      setButtonHighlight(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button type="button" className={buttonClasses} onClick={props.onViewCart}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;

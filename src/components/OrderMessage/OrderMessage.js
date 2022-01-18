import React, { useContext } from "react";
import styles from "./OrderMessage.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

// Displays a confirmation message to the user after they place an order - provides the user an option to clear their cart
const OrderMessage = (props) => {
  const cartCtx = useContext(CartContext);

  const clearItemsHandler = () => {
    cartCtx.emptyCart();
    props.onCloseMessage();
  };

  return (
    <Modal>
      <h2>Thank you for your order!</h2>
      <p>Your food will be ready in approximately ∞ minutes.</p>
      <p>Would you like to clear your cart?</p>
      <div className={styles.controls}>
        <Button onClick={clearItemsHandler} className={styles.alt}>
          Clear my cart
        </Button>
        <Button onClick={props.onCloseMessage}>Keep my items</Button>
      </div>
    </Modal>
  );
};

export default OrderMessage;

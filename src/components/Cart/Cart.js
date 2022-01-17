import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (id) => {
      cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
      cartCtx.addItem(item);
  };

  const orderButtonHandler = () => {
    console.log("Food Ordered.");
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal className={styles.cart}>
      <div className={styles.items}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
          />
        ))}
      </div>
      <div className={styles.amount}>
        <h2>Total Amount</h2>
        <h2>{totalAmount}</h2>
      </div>
      <div className={styles.controls}>
        <Button onClick={props.onCloseCart} className={styles.close}>
          Close
        </Button>
        {hasItems && <Button onClick={orderButtonHandler}>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;

import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

// Displays all CartItems to the user - updates CartContext when item amounts are changed from CartItem
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  const emptyCartHandler = () => {
    cartCtx.emptyCart();
  };

  const orderButtonHandler = () => {
    setCheckout(true);
  };

  const closeOrderHandler = () => {
    setCheckout(false);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://order-food-9b59a-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
          totalAmount: totalAmount,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    emptyCartHandler();
  };

  // Ensure the price always diplays to 2 decimal places
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Only show order button if Cart contains CartItems
  const hasItems = cartCtx.items.length > 0;

  // Content to return before an order is sumbitted
  const cartContent = (
    <React.Fragment>
      <div className={styles.items}>
        {!hasItems && (
          <p className={styles.empty}>There are no items in your cart!</p>
        )}
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
      <div>
        {checkout && (
          <Checkout
            onConfirmOrder={submitOrderHandler}
            onCloseOrder={closeOrderHandler}
          />
        )}
      </div>
      {!checkout && (
        <div className={styles.controls}>
          <div>
            {hasItems && (
              <Button onClick={emptyCartHandler} className={styles.alt}>
                Empty Cart
              </Button>
            )}
          </div>
          <div className={styles.order}>
            <Button onClick={props.onCloseCart} className={styles.alt}>
              Close
            </Button>
            {hasItems && <Button onClick={orderButtonHandler}>Order</Button>}
          </div>
        </div>
      )}
    </React.Fragment>
  );

  // Content to return while order is submtting
  const isSubmittingContent = <p>Your order is processing</p>;

  const didSubmitContent = (
    <React.Fragment>
      <p>Your order has been placed!</p>
      <div className={styles.order}>
        <Button onClick={props.onCloseCart} className={styles.alt}>
          Close
        </Button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal className={styles.cart}>
      {!isSubmitting && !didSubmit && cartContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;

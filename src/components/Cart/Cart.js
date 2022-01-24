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
  const [orderMessage, setOrderMessage] = useState(false);
  const [checkout, setCheckout] = useState(false);

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

  const confirmOrderHandler = () => {
    setCheckout(false);
  };

  // Ensure the price always diplays to 2 decimal places
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Only show order button if Cart contains CartItems
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal className={styles.cart}>
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
      <div>{checkout && <Checkout onConfirmOrder={confirmOrderHandler} />}</div>
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
    </Modal>
  );
};

export default Cart;

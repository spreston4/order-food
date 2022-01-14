import styles from "./Cart.module.css";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const Cart = (props) => {
  const closeButtonHandler = () => {
    props.onCloseCart();
  };

  const orderButtonHandler = () => {
    console.log("Food Ordered.");
  };

  return (
    <Modal className={styles.cart}>
      <div>
        <p>Cart Items</p>
      </div>
      <div className={styles.amount}>
        <h2>Total Amount</h2>
        <h2>$33.00</h2>
      </div>
      <div className={styles.controls}>
        <Button onClick={closeButtonHandler} className={styles.close}>
          Close
        </Button>
        <Button onClick={orderButtonHandler}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;

import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
 
  const orderButtonHandler = () => {
    console.log("Food Ordered.");
  };

  // calculate total value of cart
  const totalAmount = props.contents
    .map((item) => item.quantity * item.price)
    .reduce((prev, next) => prev + next);

  return (
    <Modal className={styles.cart}>
      <div>
        {props.contents.map((item) => (
          <CartItem key={item.id} item={item} />
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
        <Button onClick={orderButtonHandler}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;

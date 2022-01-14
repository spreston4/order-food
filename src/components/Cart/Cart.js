import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "../CartItem/CartItem";

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
        {props.contents.map((item) => (
            <CartItem key={item.id} item={item}/>
        ))}
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

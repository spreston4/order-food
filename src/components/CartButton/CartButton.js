import styles from "./CartButton.module.css";
import CartIcon from "../CartIcon/CartIcon";

const CartButton = (props) => {
  return (
    <button type="button" className={styles.button}>
      <CartIcon className="icon" />
      <span>Your Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CartButton;

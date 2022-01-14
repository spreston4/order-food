import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles.item}>
      <div>
        <p className={styles.name}>{props.item.name}</p>
        <div className={styles.detail}>
          <p className={styles.price}>${props.item.price}</p>
          <p className={styles.quantity}>x {props.item.quantity}</p>
        </div>
      </div>
      <p>Controls</p>
    </div>
  );
};

export default CartItem;

import styles from "./CartItem.module.css";

// Displays all items added to the Cart - acccepts item as a prop
const CartItem = (props) => {
  return (
    <div className={styles.item}>
      <div>
        <p className={styles.name}>{props.item.name}</p>
        <div className={styles.detail}>
          <p className={styles.price}>${props.item.price}</p>
          <p className={styles.quantity}>x {props.item.amount}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
};

export default CartItem;

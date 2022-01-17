import styles from "./MenuItem.module.css";
import ItemForm from "../ItemForm/ItemForm";

const MenuItem = (props) => {
  const addItemHandler = (item) => {
    props.onAddToCart(item);
  };

  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <div className={styles.item}>
      <div>
        <p className={styles.name}>{props.item.name}</p>
        <p className={styles.description}>{props.item.description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div>
        <ItemForm onAddToCart={addItemHandler} item={props.item} />
      </div>
    </div>
  );
};

export default MenuItem;

import styles from "./MenuItem.module.css";
import ItemForm from "../ItemForm/ItemForm";

const MenuItem = (props) => {
  const addItemHandler = (item) => {
    props.onAddToCart(item);
  };

  return (
    <div className={styles.item}>
      <div>
        <p className={styles.name}>{props.item.name}</p>
        <p className={styles.description}>{props.item.description}</p>
        <p className={styles.price}>{props.item.price}</p>
      </div>
      <div>
        <ItemForm onAddToCart={addItemHandler} item={props.item} />
      </div>
    </div>
  );
};

export default MenuItem;

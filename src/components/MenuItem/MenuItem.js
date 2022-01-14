import styles from "./MenuItem.module.css";
import ItemForm from "../ItemForm/ItemForm";

const MenuItem = (props) => {
  return (
    <div className={styles.item}>
      <div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
      <div>
        <ItemForm />
      </div>
    </div>
  );
};

export default MenuItem;

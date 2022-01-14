import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={styles.item}>
      <div>
        <p className={styles.name}>Food Item</p>
        <p className={styles.description}>Food Description</p>
        <p className={styles.price}>Price</p>
      </div>
      <div>
        <p>Add Component</p>
      </div>
    </div>
  );
};

export default MenuItem;

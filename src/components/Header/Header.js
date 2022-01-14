import styles from "./Header.module.css";
import CartButton from "../CartButton/CartButton";
import mealPhoto from "./meals.jpg";

const Header = (props) => {
  const cartButtonHandler = () => {
    props.onViewCart();
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Order Food</h1>
        <CartButton onViewCart={cartButtonHandler} />
      </div>
      <div className={styles.image}>
        <img src={mealPhoto}></img>
      </div>
    </div>
  );
};

export default Header;

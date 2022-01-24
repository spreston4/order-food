import styles from "./Checkout.module.css";
import Button from "../UI/Button/Button";

const Checkout = (props) => {
  const submitOrderHandler = (event) => {
    event.preventDefault();
    props.onConfirmOrder();
  };

  return (
    <form onSubmit={submitOrderHandler}>
      <div className={styles.checkout}>
        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className={styles.control}>
          <label htmlFor="city">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Street Address</label>
          <input type="text" id="address" />
        </div>
        <div className={styles.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
        <div className={styles.control}>
          <label htmlFor="city">State</label>
          <input type="text" id="State" />
        </div>
        <div className={styles.control}>
          <label htmlFor="zip">Zip Code</label>
          <input type="text" id="zip" />
        </div>
      </div>
      <Button type="button">Go Back</Button>
      <Button type="submit">Confirm Order</Button>
    </form>
  );
};

export default Checkout;

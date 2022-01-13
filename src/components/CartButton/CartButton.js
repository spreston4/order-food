import styles from './CartButton.module.css';

const CartButton = (props) => {
    return (
        <button type='button' className={styles.button}>Your Cart</button>
    );
};

export default CartButton;
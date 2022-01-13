import styles from './Header.module.css';
import CartButton from '../CartButton/CartButton';


const Header = () => {
    return(
        <div className={styles.header}>
            <h1>Order Food</h1>
            <CartButton />
        </div>
    );
};

export default Header;
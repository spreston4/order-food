import styles from './Menu.module.css';
import Card from '../Card/Card';

const Menu = (props) => {
    return (
        <Card className={styles.menu}>
            <p>MENU</p>
        </Card>
    )
};

export default Menu
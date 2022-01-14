import styles from './Menu.module.css';
import Card from '../Card/Card';
import MenuItem from '../MenuItem/MenuItem';

const Menu = (props) => {
    return (
        <Card className={styles.menu}>
            <MenuItem />
            <MenuItem />
        </Card>
    )
};

export default Menu
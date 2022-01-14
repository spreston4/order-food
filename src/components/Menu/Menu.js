import styles from "./Menu.module.css";
import Card from "../UI/Card/Card";
import MenuItem from "../MenuItem/MenuItem";

const dummyMealData = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.50,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Menu = (props) => {
  const addItemHandler = (item) => {
    props.onAddToCart(item);
  };

  return (
    <Card className={styles.menu}>
      {dummyMealData.map((meal) => (
        <MenuItem key={meal.id} item={meal} onAddToCart={addItemHandler} />
      ))}
    </Card>
  );
};

export default Menu;

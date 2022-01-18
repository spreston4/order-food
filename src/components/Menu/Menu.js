import styles from "./Menu.module.css";
import Card from "../UI/Card/Card";
import MenuItem from "../MenuItem/MenuItem";

// Menu selection data
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
    price: 16.5,
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

// Displays all MenuItems to the user - passes the meal.id as key & all meal data as item to MenuItem
const Menu = () => {
  return (
    <Card className={styles.menu}>
      {dummyMealData.map((meal) => (
        <MenuItem key={meal.id} item={meal} />
      ))}
    </Card>
  );
};

export default Menu;

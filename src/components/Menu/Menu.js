import { useEffect, useState } from "react/cjs/react.development";
import styles from "./Menu.module.css";
import Card from "../UI/Card/Card";
import MenuItem from "../MenuItem/MenuItem";

// Displays all MenuItems to the user - passes the meal.id as key & all meal data as item to MenuItem
const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://order-food-9b59a-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  return (
    <Card className={styles.menu}>
      <div className={styles.messages}>
        {isLoading && <p>Meal choices are loading!</p>}
      </div>
      {meals.map((meal) => (
        <MenuItem key={meal.id} item={meal} />
      ))}
    </Card>
  );
};

export default Menu;

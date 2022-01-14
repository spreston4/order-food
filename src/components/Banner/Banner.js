import styles from "./Banner.module.css";
import Card from "../Card/Card";

const Banner = () => {
  return (
    <Card className={styles.banner}>
      <h2>Delicious Food, Delivered To You</h2>
      <div>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just in time
          and of course by experienced chefs!
        </p>
      </div>
    </Card>
  );
};

export default Banner;

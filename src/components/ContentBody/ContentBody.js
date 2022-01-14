import styles from "./ContentBody.module.css";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";

const ContentBody = (props) => {
  return (
    <div className={styles.content}>
      <Banner />
      <Menu />
    </div>
  );
};

export default ContentBody;

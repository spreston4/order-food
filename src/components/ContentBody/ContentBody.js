import styles from "./ContentBody.module.css";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";

const ContentBody = (props) => {
  return (
    <div className={styles.content}>
      <Banner />
    </div>
  );
};

export default ContentBody;

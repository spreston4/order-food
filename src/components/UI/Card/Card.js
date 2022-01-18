import styles from "./Card.module.css";

// Reusable card component - accepts parent component styling
const Card = (props) => {

  const classes = `${styles.card} ` + props.className;
  
  return <div className={classes}>{props.children}</div>;
};

export default Card;

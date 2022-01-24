import styles from "./Button.module.css";

// Reusable button component - accepts parent component styling & onClick prop
const Button = (props) => {
  const classes = `${styles.button} ` + props.className;

  return (
    <button
      className={classes}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

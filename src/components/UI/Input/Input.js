import React from "react";
import styles from "./Input.module.css";

// Reusable input component - accepts refs from parent component if useRef is imported
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

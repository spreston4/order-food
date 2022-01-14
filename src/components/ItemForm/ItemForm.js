import React, { useState } from "react";
import styles from "./ItemForm.module.css";

const ItemForm = (props) => {
  const [quantity, setQuantity] = useState(0);

  const quantityHandler = (event) => {
    console.log(event.target.value);
    setQuantity(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form}>
      <div>
        <label>Amount</label>
        <input
          type="number"
          min="0"
          onChange={quantityHandler}
          value={quantity}
        ></input>
      </div>
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  );
};

export default ItemForm;

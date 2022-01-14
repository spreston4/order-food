import React, { useState } from "react";
import styles from "./ItemForm.module.css";
import Button from "../UI/Button/Button";

const ItemForm = (props) => {
  const [quantity, setQuantity] = useState(0);

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();

    const newItem = {
      ...props.item,
      quantity: quantity,
    };

    props.onAddToCart(newItem);

    setQuantity(0);
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
      <Button onClick={addItemHandler}>+ Add</Button>
    </form>
  );
};

export default ItemForm;

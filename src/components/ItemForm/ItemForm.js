import React, { useState } from "react";
import styles from "./ItemForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const ItemForm = (props) => {
  const [quantity, setQuantity] = useState(0);

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();

    if (quantity < 1) {
      console.log("Enter a valid quantity");
      setQuantity(0);
      return;
    }

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
        <Input
          label="Amount"
          input={{
            id: "amount " + props.item.id,
            type: "number",
            min: "0",
            max: "10",
            step: "1",
            value: quantity,
            onChange: quantityHandler,
          }}
        />
      </div>
      <Button onClick={addItemHandler}>+ Add</Button>
    </form>
  );
};

export default ItemForm;

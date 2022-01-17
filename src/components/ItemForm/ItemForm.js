import React, { useState, useRef } from "react";
import styles from "./ItemForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={addItemHandler}>
      <div>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount " + props.item.id,
            type: "number",
            min: "0",
            max: "10",
            step: "1",
          }}
        />
      </div>
      <Button type="submit">+ Add</Button>
      {!amountIsValid && <p>Please entter a valid amount (1-10).</p>}
    </form>
  );
};

export default ItemForm;

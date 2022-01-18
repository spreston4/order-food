import React, { useState, useRef } from "react";
import styles from "./ItemForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

// Allows the user to select a valid amount of a MenuItem - the enteredAmountNumber is passed to MenuItem before updating the Cart
const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  // Monitor value of input field
  const amountInputRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault();

    // Grab current value of imput field & convert string to number
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    // Detect invalid input & display error message
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

  const errorMessageHandler = () => {
    setAmountIsValid(true);
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
      {!amountIsValid && (
        <ErrorMessage
          onClick={errorMessageHandler}
          message={"Please enter a valid amount (1-10)."}
        />
      )}
    </form>
  );
};

export default ItemForm;

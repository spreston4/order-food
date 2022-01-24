import { useState } from "react";

// Resuable hook to validate input of a form - accepts a function that's used to validate the input
const useInput = (validationFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // If input meets validationFunction criteria, it is valid
  const isValid = validationFunction(enteredValue);

  // Error only occurs if input does not meet validation criterea & user has touched the input
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetHandler,
  };
};

export default useInput;

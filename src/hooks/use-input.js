import { useState } from "react";

const useInput = (validationFunction) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validationFunction(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const resetHandler = () => {
        setEnteredValue('');
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
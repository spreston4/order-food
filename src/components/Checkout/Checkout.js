import styles from "./Checkout.module.css";
import Button from "../UI/Button/Button";
import useInput from "../../hooks/use-input";

const Checkout = (props) => {
  // Utilize custom hook for all input fields
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: nameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput((value) =>
    value.trim().match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i)
  );

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    resetHandler: phoneResetHandler,
  } = useInput((value) =>
    value.trim().match(/^[(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/)
  );

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    resetHandler: addressResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    resetHandler: cityResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredState,
    isValid: enteredStateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    resetHandler: stateResetHandler,
  } = useInput((value) =>
    value
      .trim()
      .match(
        /(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/gim
      )
  );

  const {
    value: enteredZip,
    isValid: enteredZipIsValid,
    hasError: zipHasError,
    valueChangeHandler: zipChangeHandler,
    inputBlurHandler: zipBlurHandler,
    resetHandler: zipResetHandler,
  } = useInput((value) => value.trim().match(/^\d{5}$/));

  // Form is valid only if all inputs are valid
  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredAddressIsValid &&
    enteredCityIsValid &&
    enteredStateIsValid &&
    enteredZipIsValid
  ) {
    formIsValid = true;
  }

  // If user confirms their order
  const submitOrderHandler = (event) => {
    event.preventDefault();

    // Stop form from submitting if form is not valid
    if (!formIsValid) {
      return;
    }

    const userDetails = {
      name: enteredName.toLocaleUpperCase(),
      email: enteredEmail.toLocaleUpperCase(),
      phone: enteredPhone,
      address: enteredAddress.toLocaleUpperCase(),
      city: enteredCity.toLocaleUpperCase(),
      state: enteredState.toLocaleUpperCase(),
      zip: enteredZip,
    };

    props.onConfirmOrder(userDetails);
  };

  const resetFormHandler = () => {
    nameResetHandler();
    emailResetHandler();
    phoneResetHandler();
    addressResetHandler();
    cityResetHandler();
    stateResetHandler();
    zipResetHandler();
  };

  // If user chooses to go back instead of confirming their order
  const cancelOrderHandler = () => {
    props.onCloseOrder();
  };

  // Conditional formatting for inputs with errors
  const nameClasses = nameHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const emailClasses = emailHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const phoneClasses = phoneHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const addressClasses = addressHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const cityClasses = cityHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const stateClasses = stateHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const zipClasses = zipHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  return (
    <form onSubmit={submitOrderHandler}>
      <div className={styles.checkout}>
        <div className={nameClasses}>
          <label htmlFor="name">Name</label>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            type="text"
            id="name"
          />
          {nameHasError && (
            <p className={styles.error}>Name field cannot be blank.</p>
          )}
        </div>
        <div className={emailClasses}>
          <label htmlFor="city">E-mail</label>
          <input
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            type="email"
            id="email"
          />
          {emailHasError && (
            <p className={styles.error}>Enter a valid e-mail address.</p>
          )}
        </div>
        <div className={phoneClasses}>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            value={enteredPhone}
            type="text"
            id="phone"
          />
          {phoneHasError && (
            <p className={styles.error}>
              Enter a valid phone number: (xxx) xxx-xxxx
            </p>
          )}
        </div>
        <div className={addressClasses}>
          <label htmlFor="address">Street Address</label>
          <input
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            value={enteredAddress}
            type="text"
            id="address"
          />
          {addressHasError && (
            <p className={styles.error}>
              Street Address field cannot be blank.
            </p>
          )}
        </div>
        <div className={cityClasses}>
          <label htmlFor="city">City</label>
          <input
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={enteredCity}
            type="text"
            id="city"
          />
          {cityHasError && (
            <p className={styles.error}>City field cannot be blank.</p>
          )}
        </div>
        <div className={stateClasses}>
          <label htmlFor="state">State</label>
          <input
            onChange={stateChangeHandler}
            onBlur={stateBlurHandler}
            value={enteredState}
            type="text"
            id="state"
          />
          {stateHasError && (
            <p className={styles.error}>Enter a valid state abbreviation: XX</p>
          )}
        </div>
        <div className={zipClasses}>
          <label htmlFor="zip">Zip Code</label>
          <input
            onChange={zipChangeHandler}
            onBlur={zipBlurHandler}
            value={enteredZip}
            type="text"
            id="zip"
          />
          {zipHasError && (
            <p className={styles.error}>Enter a valid Zip Code: XXXXX</p>
          )}
        </div>

        <div className={styles.actions}>
          <Button
            className={styles.alt}
            onClick={cancelOrderHandler}
            type="button"
          >
            Cancel
          </Button>
          <Button
            className={styles.alt}
            onClick={resetFormHandler}
            type="button"
          >
            Reset Form
          </Button>
          <Button disabled={!formIsValid} type="submit">
            Confirm Order
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;

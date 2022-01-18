import Modal from "../Modal/Modal";
import Button from "../Button/Button";

// Reusable error message - accepts message and onClick as props
const ErrorMessage = (props) => {
  return (
    <Modal>
      <h2>Error!</h2>
      <p>{props.message}</p>
      <Button onClick={props.onClick}>Ok</Button>
    </Modal>
  );
};

export default ErrorMessage;

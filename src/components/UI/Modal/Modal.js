import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Card from "../Card/Card";

const BackdropOverlay = (props) => {
  return <div className={styles.backdrop}></div>;
};

// Reusable modal component - accepts parent component styling
const Modal = (props) => {
  // Create portal to 'modal-root' div in order to avoid formatting issues when modal is used
  const modalElement = document.getElementById("modal-root");
  const classes = `${styles.modal} ` + props.className;

  return createPortal(
    <React.Fragment>
      <BackdropOverlay />
      <Card className={classes}>{props.children}</Card>
    </React.Fragment>,
    modalElement
  );
};

export default Modal;

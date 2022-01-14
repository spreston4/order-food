import React from "react";
import ReactDom, { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Card from "../Card/Card";

const BackdropOverlay = (props) => {
  return <div className={styles.backdrop}></div>;
};

const Modal = (props) => {
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
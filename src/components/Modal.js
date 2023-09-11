import React from "react";
import classes from "./Modal.module.css";

function Modal({ children, onCloseModal }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseModal}></div>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;

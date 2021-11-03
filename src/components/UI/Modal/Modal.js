import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Modal.module.css";
import React from "react";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.closeModal} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.closeModal}>
            Okay
          </Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default Modal;

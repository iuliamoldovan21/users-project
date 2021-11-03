import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Modal;

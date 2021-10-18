import Button from "../UI/Button/Button";
import styles from "./Modal.module.css"

const Modal = (props) => {
  const dismissModalHandler = () => {
    props.closeModal();
  };

  const keepModalOpenHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles['modal-backdrop']} onClick={dismissModalHandler}>
      <div className = {styles['modal-content']} onClick={keepModalOpenHandler}>
        <div>
          <h2>Invalid input</h2>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
        <div>
          <Button type="button" onClick={dismissModalHandler}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

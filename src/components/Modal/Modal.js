import Button from "../UI/Button/Button";

const Modal = (props) => {
  return (
    <div>
      <div>
        <h2>Invalid input</h2>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
      <div>
        <Button type="button">Okay</Button>
      </div>
    </div>
  );
};

export default Modal;

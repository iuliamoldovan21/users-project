import UserForm from "./components/UserForm/UserForm";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const saveUserDataHandler = (userData) => {
    setIsInputInvalid(false);
    const newUser = {
      username: userData.username,
      age: userData.age,
      id: Math.random().toString(),
    };
    setEnteredUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  const invalidInputHandler = (message) => {
    setModalMessage(message);
    setIsInputInvalid(true);

    console.log(modalMessage);
  };

  return (
    <div className="App">
      <UserForm
        onSaveUserData={saveUserDataHandler}
        onInvalidInput={invalidInputHandler}
      />
      <UsersList users={enteredUsers} />
      {isInputInvalid && <Modal text={modalMessage}></Modal>}
    </div>
  );
}

export default App;

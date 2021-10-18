import UserForm from "./components/UserForm/UserForm";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);
  const [isModalVisivle, setisModalVisivle] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const saveUserDataHandler = (userData) => {
    setisModalVisivle(false);
    const newUser = {
      username: userData.username,
      age: userData.age,
      id: Math.random().toString(),
    };
    setEnteredUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  const toggleModalHandler = (message) => {
    setModalMessage(message);
    setisModalVisivle(true);
  };

  const closeModalHandler = () => {
    setisModalVisivle(false);
  };

  return (
    <div className="App">
      <UserForm
        onSaveUserData={saveUserDataHandler}
        toggleModal={toggleModalHandler}
      />
      <UsersList users={enteredUsers} />
      {isModalVisivle && (
        <Modal text={modalMessage} closeModal={closeModalHandler}></Modal>
      )}
    </div>
  );
}

export default App;

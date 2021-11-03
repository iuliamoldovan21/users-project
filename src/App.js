import UserForm from "./components/Users/UserForm/UserForm";
import UsersList from "./components/Users/UsersList/UsersList";
import React, { useState } from "react";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);
  const [error, setError] = useState();

  const saveUserDataHandler = (userData) => {
    const newUser = {
      username: userData.username,
      age: userData.age,
      id: Math.random().toString(),
    };
    setEnteredUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  const toggleModalHandler = (err) => {
    setError({ title: err.title, message: err.message });
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <UserForm
        onSaveUserData={saveUserDataHandler}
        toggleModal={toggleModalHandler}
      />
      <UsersList users={enteredUsers} />
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          closeModal={closeModalHandler}
        ></Modal>
      )}
    </React.Fragment>
  );
}

export default App;

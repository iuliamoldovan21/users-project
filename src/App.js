import UserForm from "./components/UserForm/UserForm";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";
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
    <div>
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
    </div>
  );
}

export default App;

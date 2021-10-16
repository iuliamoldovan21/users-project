import UserForm from "./components/UserForm/UserForm";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);

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

  return (
    <div className="App">
      <UserForm onSaveUserData={saveUserDataHandler} />
      <UsersList users={enteredUsers} />
    </div>
  );
}

export default App;

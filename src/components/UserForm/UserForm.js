import { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: enteredUsername,
      age: +enteredAge,
    };
    props.onSaveUserData(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            min="1"
            max="150"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

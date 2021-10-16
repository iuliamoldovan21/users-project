import { useState } from "react";
import Button from "../UI/Button/Button";
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
    if (userData.username === "" && userData.age === 0) {
      props.onInvalidInput(
        "Please enter a valid name and age (non-empty values)."
      );
      setEnteredUsername("");
      setEnteredAge("");
      return;
    }
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
            max="150"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

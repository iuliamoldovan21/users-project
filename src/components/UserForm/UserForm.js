import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isDataValid, setIsDataValid] = useState(true);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    setIsDataValid(true);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    setIsDataValid(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: enteredUsername,
      age: +enteredAge,
    };
    // checkDataValidity(userData);

    // if (!isDataValid) {
    //   console.log("in if mare");
    //   return;
    // }
    if (userData.username.trim().length === 0 || userData.age.trim().length === 0) {
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

  // function checkDataValidity(data) {
  //   console.log("in check data");
  //   if (data.username.trim().length === 0 || data.age.trim().length === 0) {
  //     console.log("in if");

  //     props.onInvalidInput(
  //       "Please enter a valid name and age (non-empty values)."
  //     );
  //     setIsDataValid(false);
  //     console.log(isDataValid);
  //     setEnteredUsername("");
  //     setEnteredAge("");
  //     return;
  //   }
    //  else if (data.age < 1) {
    //   props.onInvalidInput("Please enter a valid age (>0).");
    //   setIsDataValid(false);
    // }
  //}

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

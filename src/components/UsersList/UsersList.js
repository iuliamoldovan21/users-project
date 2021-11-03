import Card from "../UI/Card/Card";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div>
      {props.users.length > 0 && (
        <Card className={styles.users}>
          <ul>
            {props.users.map((user) => (
              <UserItem key={user.id} username={user.username} age={user.age}>
                {user.username + " (" + user.age + " years old)"}
              </UserItem>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default UsersList;

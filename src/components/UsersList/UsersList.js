import UserItem from "../UserItem/UserItem";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <UserItem key={user.id} username={user.username} age={user.age}>
          {props.users.length > 0 &&
            user.username + " (" + user.age + " years old)"}
        </UserItem>
      ))}
    </ul>
  );
};

export default UsersList;

import { useEffect, useState } from "react";
import "./App.css";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import UserService from "./services/user-service";

function App(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("useEffect");
      props.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (!props.isAuth) {
    return <LoginFormContainer />;
  }

  return (
    <div className="App">
      <h1>{`The user is logined with ${props.email}`}</h1>

      <button onClick={props.logout}>Logout</button>

      <div>
        <button onClick={getUsers}>Get users</button>
      </div>
      <div>
        {users.map((user) => {
          return <div key={user.email}>{user.email}</div>;
        })}
      </div>
    </div>
  );
}

export default App;

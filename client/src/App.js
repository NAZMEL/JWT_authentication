import { useEffect } from "react";
import "./App.css";
import LoginFormContainer from "./components/Login/LoginFormContainer";

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("useEffect");
      props.checkAuth();
    }
  }, []);

  if (!props.isAuth) {
    return <LoginFormContainer />;
  }

  return (
    <div className="App">
      <h1>{`The user is logined with ${props.email}`}</h1>

      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

export default App;

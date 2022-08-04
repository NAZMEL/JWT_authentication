import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import useRoutes from "./routes";
import { checkAuth } from "./store/auth-reducer";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

function App(props) {
  const routes = useRoutes();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("useEffect");
      props.checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <Header/>
      
      {!props.isAuth 
        ? <Login />
        : routes}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { checkAuth })(App);

import React, {useState} from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import { login, registration, logout } from "../../store/auth-reducer";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    props.login(email, password);
  };

  const registration = () => {
    props.registration(email, password);
  };


  return (
    <div>
      <input
        onChange={onChangeEmail}
        value={email}
        type="text"
        placeholder="Email"
      />

      <input
        onChange={onChangePassword}
        value={password}
        type="password"
        placeholder="Password"
      />

      <button onClick={login}>Login</button>
      <button onClick={registration}>Register on</button>

      <NavLink to='/sign-up'>Sign up</NavLink>

      {props.email}
      {props.password}
      {props.isAuth}
    </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        email: state.authReducer.email,
        password: state.authReducer.password,
        isAuth: state.authReducer.isAuth,
      };
}

export default connect(mapStateToProps, {login, registration, logout})(Login);

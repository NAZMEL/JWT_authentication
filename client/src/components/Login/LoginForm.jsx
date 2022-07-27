import React, { useState } from "react";

const LoginForm = (props) => {
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
    </div>
  );
};

export default LoginForm;

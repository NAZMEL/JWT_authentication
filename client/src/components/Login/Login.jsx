import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../store/auth-reducer";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Button } from "antd";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    props.login(email, password);
    navigate("/", { replace: true });
  };

  const clear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <Space direction="vertical">
        <Input
          placeholder="Imput email"
          onChange={onChangeEmail}
          value={email}
        />
        <Input.Password
          onChange={onChangePassword}
          value={password}
          placeholder="Input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <Space direction="horizontal">
          <Button type="primary" onClick={login}>
            Sign in
          </Button>
          <Button onClick={clear}>Clear fields</Button>
        </Space>
      </Space>

      <p>Aren't registered. Sign up now</p>
      <NavLink to="/sign-up">Sign up</NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);

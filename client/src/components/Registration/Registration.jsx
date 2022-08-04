import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registration } from "../../store/auth-reducer";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Button } from "antd";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const registration = () => {
    props.registration(email, password);
    navigate("/", { replace: true });
  };

  const clear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Registration</h1>
      
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
          <Button type="primary" onClick={registration}>
            Sign up
          </Button>
          <Button onClick={clear}>Clear fields</Button>
        </Space>
      </Space>

      <p>Aren't registered. Sign up now</p>
      <NavLink to="/sign-in">Sign in</NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { registration })(Registration);

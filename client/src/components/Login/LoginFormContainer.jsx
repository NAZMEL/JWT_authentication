import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login, registration, logout } from "../../store/auth-reducer";

let mapStateToProps = (state) => {
  return {
    email: state.authPage.email,
    password: state.authPage.password,
    isAuth: state.authPage.isAuth,
  };
};

const LoginFormContainer = connect(mapStateToProps, {
  login,
  registration,
  logout,
})(LoginForm);

export default LoginFormContainer;

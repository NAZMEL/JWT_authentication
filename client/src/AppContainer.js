import { checkAuth, logout } from "./store/auth-reducer";
import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth,
    email: state.authPage.email,
  };
};

export default connect(mapStateToProps, {
  checkAuth,
  logout,
})(App);

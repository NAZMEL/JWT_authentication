import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/auth-reducer";
import { Layout} from "antd";
import styles from "./HeaderCustom.module.css";

const Header = (props) => {
  const { Header } = Layout;

  return (
    <Header style={{backgroundColor: "grey"}}>
      <div className={styles.headerMainBlock}>
        <div className={styles.headerEmailBlock}>
          {props.isAuth && <div>{props.email}</div>}
        </div>

        <div className={styles.headerAuthBlock}>
          {props.isAuth && (
            <p className={styles.headerAuthItem} onClick={() => props.logout()}>
              Logout
            </p>
          )}

          {!props.isAuth && (
            <NavLink className={styles.headerAuthItem} to="/sign-in">
              Sign-in
            </NavLink>
          )}
          <br />
          {!props.isAuth && (
            <NavLink className={styles.headerAuthItem} to="/sign-up">
              Sign-up
            </NavLink>
          )}
        </div>
      </div>
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    email: state.authReducer.email,
  };
};

export default connect(mapStateToProps, { logout })(Header);

import React from "react";
import { connect } from "react-redux";
import Login from "../Login/Login";
import Users from "../Users/Users";

const Home = (props) => {
  return (
    <div>
      {props.isAuth && <h1>You are logined</h1>}
      {props.isAuth && <Users/>}

      {!props.isAuth && <Login />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, {})(Home);

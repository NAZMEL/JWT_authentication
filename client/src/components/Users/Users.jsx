import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/auth-reducer";

const Users = (props) => {
  const [users, setUsers] = useState();
  
  return(
    <div>
      {/* {props.isAuth && users.map(user =>{
        return <p key={user.email}>user.email</p>
      })} */}
    </div>
    )
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, {getUsers})(Users);

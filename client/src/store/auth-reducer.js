import AuthService from "../api/auth-service";
import UserService from "../api/user-service";

const SET_AUTH_DATA = "SET-AUTH-DATA";

let initialState = {
  email: "",
  password: "",
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// ACTION CREATORS
export const setAuthData = (email, password, isAuth) => ({
  type: SET_AUTH_DATA,
  payload: { email, password, isAuth },
});

// THUNK CREATORS
export const login = (userEmail, userPassword) => async (dispatch) => {
  try {
    const response = await AuthService.login(userEmail, userPassword);

    if (response.status === 200) {
      let { accessToken, user } = response.data;
      let { email, password } = user;

      localStorage.setItem("token", accessToken);
      dispatch(setAuthData(email, password, true));
    }
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const registration = (userEmail, userPassword) => async (dispatch) => {
  try {
    const response = await AuthService.registration(userEmail, userPassword);

    if (response.status === 200) {
      let { email, password, accessToken } = response.data;

      localStorage.setItem("token", accessToken);
      dispatch(setAuthData(email, password, true));
    }
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await AuthService.logout();

    if (response.status === 200) {
      localStorage.clear();
      dispatch(setAuthData(null, null, false));
    }
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await AuthService.refresh();

    if (response.status === 200) {
      let { accessToken, user } = response.data;
      let { email, password } = user;

      localStorage.setItem("token", accessToken);
      dispatch(setAuthData(email, password, true));
    }
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const getUsers = async() =>{
  try{
    const response = await UserService.fetchUsers();
    if(response.status === 2000){
      let {users} = response.data;
      return users;
    }
  } catch(e){
    console.log(e);
    return e;
  }
}

export default authReducer;

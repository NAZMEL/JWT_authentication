import AuthService from "../services/auth-services";

const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
  email: "",
  password: "",
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        stateCopy,
        ...action.payload,
      };
    default:
      return stateCopy;
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
export default authReducer;

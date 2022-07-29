import UserService from "../services/user-service";

const SET_USER = "SET_USER";

let initialState = {
  email: "",
  password: "",
  isActivated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// ACTION CREATORS
export const setUserData = (email, password, isActivated) => ({
  type: SET_USER,
  payload: { email, password, isActivated },
});

// THUNK CREATORS
export const getUserData = () => async (dispatch) => {
  const data = await UserService.fetchUsers();
  let { email, password, isActivated } = data;
  dispatch(setUserData(email, password, isActivated));
};

export default userReducer;

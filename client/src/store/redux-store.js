import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  userReducer: userReducer,
  authPage: authReducer,
});

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    authReducer: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
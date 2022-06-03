import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import UserReducer from "./reducers/UserReducer";

const rootReducers = combineReducers({ UserReducer });
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;

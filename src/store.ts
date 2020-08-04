import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./state/user/user";

const rootReducer = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});

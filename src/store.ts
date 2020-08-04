import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user";

const rootReducer = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});

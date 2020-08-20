import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/user/user";
import friendsReducer from "./features/friends/friends";

const rootReducer = combineReducers({
  user: userReducer,
  friends: friendsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

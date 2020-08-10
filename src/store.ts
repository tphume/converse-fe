import { configureStore, Action } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

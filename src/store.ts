import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

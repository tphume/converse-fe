import { configureStore, Action } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

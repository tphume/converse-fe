import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Dispatch,
} from "@reduxjs/toolkit";
import { AppThunk } from "../../store";

// Error types
type error = "none" | "network error";

// State definition
interface friend {
  username: string;
  status: string;
}

interface state {
  friends: Array<friend>;
  loading: boolean;
  error: error;
}

function newState(): state {
  return {
    friends: [],
    loading: false,
    error: "none",
  };
}

// Create reducers, actions and state
export const friendsSlice = createSlice({
  name: "friends",
  initialState: newState(),
  reducers: {},
});

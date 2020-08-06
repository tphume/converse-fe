import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";

// Error types
type error = "none" | "bad request" | "network error";

// Arguments for api call
interface UserArgs {
  username: string;
  password: string;
}

// Payload types for each action
interface SuccessLoginPayload {
  username: string;
}

interface FailureLoginPayload {
  error: error;
}

// Interface for the state
interface state {
  username: string;
  loading: boolean;
  error: error;
}

function newState(): state {
  return {
    username: "",
    loading: false,
    error: "none",
  };
}

// Create reducers, actions and state
export const userSlice = createSlice({
  name: "user",
  initialState: newState(),
  reducers: {
    beginLogin: (state) => {
      state.error = "none";
      state.loading = true;
    },
    successLogin: (state, action: PayloadAction<SuccessLoginPayload>) => {
      state.loading = false;
      state.username = action.payload.username;
    },
    failureLogin: (state, action: PayloadAction<FailureLoginPayload>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.username = "";
    },
  },
});

// List of actions
const { beginLogin, successLogin, failureLogin } = userSlice.actions;

// API calls
function loginAPI(user: UserArgs): Promise<void> {
  return new Promise<void>((resolve) => resolve());
}

// Export thunks
export function login(args: UserArgs): AppThunk {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(beginLogin);
      await loginAPI(args);
      dispatch(successLogin({ username: args.username }));
    } catch (e) {
      dispatch(failureLogin({ error: "network error" }));
    }
  };
}

// Export reducer on configure store only
export default userSlice.reducer;

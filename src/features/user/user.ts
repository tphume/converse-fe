import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";

// Error types
type error = "none" | "bad request" | "match not found" | "network error";

// Arguments for api call
interface UserArgs {
  username: string;
  password: string;
}

// Payload types for each action
interface SuccessLoginPayload {
  username: string;
  status: string;
}

interface FailureLoginPayload {
  error: error;
}

// Interface for the state
interface state {
  username: string;
  status: string;
  loading: boolean;
  error: error;
}

function newState(): state {
  return {
    username: "",
    status: "",
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
      const { username, status } = action.payload;
      state = Object.assign(state, { loading: false, username, status });
    },
    failureLogin: (state, action: PayloadAction<FailureLoginPayload>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    onLogout: (state) => {
      state = Object.assign(state, newState());
    },
    resetError: (state) => {
      state.error = "none";
    },
  },
});

// List of actions
const {
  beginLogin,
  successLogin,
  failureLogin,
  onLogout,
  resetError,
} = userSlice.actions;

// API calls
function loginAPI(user: UserArgs): Promise<string> {
  if (user.username.length < 4 || user.password.length < 5) {
    throw new Error("bad request");
  }

  return new Promise<string>((resolve) =>
    setTimeout(resolve.bind(null, "this is a placeholder status na ja"), 1000)
  );
}

// Export thunks
export function login(args: UserArgs): AppThunk {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(beginLogin());
      const status = await loginAPI(args);
      return dispatch(successLogin({ username: args.username, status }));
    } catch (e) {
      switch (e.toString()) {
        case "Error: bad request":
          return dispatch(failureLogin({ error: "bad request" }));
        default:
          return dispatch(failureLogin({ error: "network error" }));
      }
    }
  };
}

// Clear state
export function logout(): AppThunk {
  return async (dispatch: Dispatch) => {
    dispatch(onLogout());
  };
}

// Export helper actions
export { resetError };

// Export reducer on configure store only
export default userSlice.reducer;

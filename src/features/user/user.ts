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
    resetError: (state) => {
      console.log("umm ");
      state.error = "none";
    },
  },
});

// List of actions
const {
  beginLogin,
  successLogin,
  failureLogin,
  resetError,
} = userSlice.actions;

// API calls
function loginAPI(user: UserArgs): Promise<void> {
  if (user.username.length < 4 || user.password.length < 5) {
    throw new Error("bad request");
  }

  return new Promise<void>((resolve) => setTimeout(resolve, 1000));
}

// Export thunks
export function login(args: UserArgs): AppThunk {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(beginLogin());
      await loginAPI(args);
      return dispatch(successLogin({ username: args.username }));
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

// Export helper actions
export { resetError };

// Export reducer on configure store only
export default userSlice.reducer;

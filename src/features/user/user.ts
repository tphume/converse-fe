import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { fetchFriends } from "../friends/friends";

// Error types
type error = "none" | "bad request" | "match not found" | "network error";

// Arguments for api call
interface UserArgs {
  username: string;
  password: string;
}

// Payload types for each action
interface SuccessLoginPayload {
  token: string;
  username: string;
  status: string;
}

interface FailureLoginPayload {
  error: error;
}

// Interface for the state
interface state {
  token: string;
  username: string;
  status: string;
  loading: boolean;
  error: error;
}

function newState(): state {
  return {
    token: "",
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
      const { username, status, token } = action.payload;
      Object.assign(state, { loading: false, username, status, token });
    },
    failureLogin: (state, action: PayloadAction<FailureLoginPayload>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    logout: (state) => {
      Object.assign(state, newState());
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
  logout,
  resetError,
} = userSlice.actions;

// API calls
function loginAPI(user: UserArgs): Promise<{ status: string; token: string }> {
  if (user.username.length < 4 || user.password.length < 5) {
    throw new Error("bad request");
  }

  return new Promise<{ status: string; token: string }>((resolve) =>
    setTimeout(
      resolve.bind(null, {
        status: "this is a placeholder status na ja",
        token: "faketoken",
      }),
      1000
    )
  );
}

// Export thunks
export function login(args: UserArgs): AppThunk {
  return async (dispatch: Dispatch<any>) => {
    try {
      dispatch(beginLogin());
      const { status, token } = await loginAPI(args);
      dispatch(successLogin({ username: args.username, status, token }));
      return dispatch(fetchFriends(token));
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
export { resetError, logout };

// Export reducer on configure store only
export default userSlice.reducer;

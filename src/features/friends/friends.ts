import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Dispatch,
} from "@reduxjs/toolkit";

// Error types
type error = "none" | "network error";

// State definition
interface friend {
  username: string;
  status: string;
}

interface state {
  friends: Map<string, friend>;
  loading: boolean;
  error: error;
}

function newState(): state {
  return {
    friends: new Map(),
    loading: false,
    error: "none",
  };
}

// Create thunk
const fetchFriends = createAsyncThunk("friends/fetchFriends", async () => {});

// Create reducers, actions and state
export const friendsSlice = createSlice({
  name: "friends",
  initialState: newState(),
  reducers: {
    resetError: (state) => {
      state.error = "none";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriends.pending, (state) => {
        state.error = "none";
        state.loading = true;
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchFriends.rejected, (state) => {
        state.error = "network error";
        state.loading = false;
      });
  },
});

// List of direct actions
export const { resetError } = friendsSlice.actions;

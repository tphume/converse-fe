import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Error types
type error = "none" | "network error";

// State definition
export interface friend {
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

// API calls
export function fetchFriendsAPI(token: string): Promise<Map<string, friend>> {
  let temp = new Map<string, friend>();
  temp.set("1", { username: "JohnBoyega", status: "im so lonely" });
  temp.set("2", { username: "Lulu", status: "gimme some snacks" });
  temp.set("3", { username: "Bob", status: "let me build it" });

  return new Promise<Map<string, friend>>((resolve) => {
    setTimeout(resolve.bind(null, temp), 1000);
  });
}

// Create thunk
export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async (token: string) => {
    return await fetchFriendsAPI(token);
  }
);

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
      })
      .addCase("/user/logout", (state) => {
        state = Object.assign(state, newState());
      });
  },
});

// List of direct actions
export const { resetError } = friendsSlice.actions;

export default friendsSlice.reducer;

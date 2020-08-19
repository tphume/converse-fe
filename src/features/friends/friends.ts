import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Error types
type error = "none" | "network error";

// API calls
export function fetchFriendsAPI(token: string): Promise<Array<friend>> {
  let temp = new Array<friend>();
  temp.push({
    id: "1",
    username: "JohnBoyega",
    status: "im so lonely",
    online: true,
  });
  temp.push({
    id: "2",
    username: "Lulu",
    status: "gimme some snacks",
    online: false,
  });
  temp.push({
    id: "3",
    username: "Bob",
    status: "let me build it",
    online: true,
  });
  temp.push({ id: "4", username: "Sally", status: "oh hi", online: true });

  return new Promise<Array<friend>>((resolve) => {
    setTimeout(resolve.bind(null, temp), 1000);
  });
}

// State definition
export interface friend {
  id: string;
  username: string;
  status: string;
  online: boolean;
}

interface state {
  friends: Array<friend>;
  loading: boolean;
  error: error;
}

function newState(): state {
  return {
    friends: new Array<friend>(),
    loading: false,
    error: "none",
  };
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
        state.friends = action.payload;
        state.loading = false;
      })
      .addCase(fetchFriends.rejected, (state) => {
        state.error = "network error";
        state.loading = false;
      })
      .addCase("user/logout", (state) => {
        state = Object.assign(state, newState());
      });
  },
});

// List of direct actions
export const { resetError } = friendsSlice.actions;

export default friendsSlice.reducer;

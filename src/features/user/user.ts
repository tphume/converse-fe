import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { name: "" },
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

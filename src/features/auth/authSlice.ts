import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
} as any;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, role } }: PayloadAction<{ user: any; role: string }>
    ) => {
      state.user = user;
      state.role = role;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;

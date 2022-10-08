import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

type AuthState = {
  user: null | IUser;
  role: null | string;
  id: string | null;
  email: string | null;
};

const initialState = {
  user: null,
  role: null,
  id: null,
  email: null,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, role, email },
      }: PayloadAction<{ user: any; role: string | null; email: string | null }>
    ) => {
      state.user = user;
      state.role = role;
      state.email = email;
      state.id = user?._id ?? "";
    },
    logout(state) {
      state.user = null;
      state.role = null;
      state.id = null;
      state.email = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

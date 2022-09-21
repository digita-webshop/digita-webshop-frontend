import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../Services/Types/user";

type AuthState = {
  user: null | IUser;
  role: null | string;
  id: string;
  email: string | null;
};

const initialState = {
  user: null,
  role: null,
  id: "",
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
      state.id = "";
      state.email = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

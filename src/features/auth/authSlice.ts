import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../Services/Types/user";

type AuthState = {
  user: null | IUser;
  role: null | string;
  id: string;
};

const initialState = {
  user: null,
  role: null,
  id: "",
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, role },
      }: PayloadAction<{ user: any; role: string | null }>
    ) => {
      state.user = user;
      state.role = role;
      state.id = user._id;
    },
    logout(state) {
      state.user = null;
      state.role = null;
      state.id = "";
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

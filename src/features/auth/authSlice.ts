import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../Services/Utils/Types/user";
import Cookies from "universal-cookie";
const cookie = new Cookies();
const accessToken = cookie.get("access_token");

type AuthState = {
  user: null | IUser;
  role: null | string;
  token: null | string;
};

const initialState = {
  user: null,
  role: null,
  token: accessToken ? accessToken : null,
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
      const accessToken = cookie.get("access_token");
      state.token = accessToken ? accessToken : null;
    },
    logout(state) {
      cookie.remove("access_token");
      state.user = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

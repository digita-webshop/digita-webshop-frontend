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
      { payload: { user, role } }: PayloadAction<{ user: any; role: string }>
    ) => {
      state.user = user;
      state.role = role;
      const accessToken = cookie.get("access_token");
      console.log(accessToken);
      state.token = accessToken ? accessToken : null;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;

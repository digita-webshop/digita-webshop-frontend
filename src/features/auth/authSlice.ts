import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../Services/Utils/Types/user";
type AuthState = {
  user: null | IUser;
  role: null | string;
};
const initialState = {
  user: null,
  role: null,
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
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;

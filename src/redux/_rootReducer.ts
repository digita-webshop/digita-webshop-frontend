import cartReducer from "./cart/cartSlice";
import compareReducer from "./compare/compareSlice";
import authReducer from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  cart: cartReducer,
  compare: compareReducer,
  auth: authReducer,
});

export default reducers;

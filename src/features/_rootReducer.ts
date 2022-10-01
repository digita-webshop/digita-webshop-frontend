import cartReducer from "./cart/cartSlice";
import compareReducer from "./compare/compareSlice";
import authReducer from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";

// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, authReducer);

const reducers = combineReducers({
  cart: cartReducer,
  compare: compareReducer,
  auth: authReducer,
});

export default reducers;

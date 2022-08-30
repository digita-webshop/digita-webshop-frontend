import { configureStore } from "@reduxjs/toolkit";
import reducers from "./features/_rootReducer";
import { api } from "./features/api";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: { ...reducers, [api.reducerPath]: api.reducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  preloadedState: {},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

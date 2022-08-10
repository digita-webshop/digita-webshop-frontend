import { configureStore } from "@reduxjs/toolkit";
import reducers from './features/_rootReducer';

const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
});

export default store;

export type RootState = ReturnType<typeof store.getState>

import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers/_rootReducer';

const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
});

export default store;
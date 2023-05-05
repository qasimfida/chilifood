import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import plan from './plan';
// ...
const rootReducer = combineReducers({
    plan,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk as ThunkMiddleware<AppState>],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

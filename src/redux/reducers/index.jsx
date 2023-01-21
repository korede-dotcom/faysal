import { combineReducers } from '@reduxjs/toolkit';
import { loginSlice } from './auth/login';



export const reducer = combineReducers({
    login: loginSlice.reducer,
})
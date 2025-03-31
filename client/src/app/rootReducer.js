//The Redux store uses rootReducer to manage global state.

//A function that merges multiple reducers into one.
import { combineReducers } from "@reduxjs/toolkit";
// Handles authentication state (e.g., login/logout).
import authReducer from "../features/authSlice"; 
//The API slice from RTK Query, which manages API-related data.
import { authApi } from "@/features/api/authApi";


const rootRedcuer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer, 
});
export default rootRedcuer;
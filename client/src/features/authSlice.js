// 🔸 Redux Toolkit simplifies state management in React apps.
// 🔸 It uses store, slices, reducers, and actions to manage state efficiently.
// 🔸 Hooks like useSelector and useDispatch help access and update the state easily.


import { createSlice } from "@reduxjs/toolkit";

//initial state object
const initialState={
    user:null,
    isAuthenticated:false
}


//
const authSlice= createSlice({
    name:"authSlice",
    initialState,
    //redux createSlice reducers have two params state-current state action-dispatched action which contains action.payload
    reducers:{
        userLoggedIn:(state,action)=>{
            state.user= action.payload.user;
            state.isAuthenticated=true;
        },
        userLoggedOut:(state)=>{
            state.user=null;
            state.isAuthenticated=false;
        }
    }

})


//two step export in slice
//userLoggedIn and userLoggedOut → Exported as actions for dispatching.
// authSlice.reducer → Exported as default reducer to be added to Redux store.
export const {userLoggedIn,userLoggedOut}=authSlice.actions;
export default authSlice.reducer;



// This file manages user authentication state in Redux.
// userLoggedIn stores user data and sets isAuthenticated = true.
// userLoggedOut resets everything on logout.
// useSelector() reads the authentication state.
// dispatch() updates the Redux state when login/logout happens.

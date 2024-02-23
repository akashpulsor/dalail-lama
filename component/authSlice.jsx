import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    authToken:null
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            console.log(action.payload.isLoggedIn);
            state.email = action.payload.email;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userName = action.payload.userName;
            
        },
        setSignOut: (state) => {
            state.email = null;
            state.userName = null;
            state.isLoggedIn = false;
            
        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectUserName = (state) => state.userAuth.userName;

export default authSlice.reducer;
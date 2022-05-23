import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        customerInfo: {}
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.error = false
        },
        userInfo: (state, action) => {
            state.customerInfo = action.payload
        }
    },
});

export const { loginStart, loginSuccess, loginfailure, logout, userInfo } = userSlice.actions;
export default userSlice.reducer;
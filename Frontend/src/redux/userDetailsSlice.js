import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        user: {},
        isFetching: false,
        error: false,
        order: {}
    },
    reducers: {
        userDetailsStart: (state) => {
            state.isFetching = true;
        },
        userDetailsSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        },
        userDetailsfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        userDetailsReset: (state) => {
            state.user = {};
        }, 
        userOrder: (state, action) => {
            state.isFetching = false;
            state.order = action.payload
            state.error = false;
        }
    },
});

export const { userDetailsStart, userDetailsSuccess, userDetailsfailure, userDetailsReset, userOrder } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
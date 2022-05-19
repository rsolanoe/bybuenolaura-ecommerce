import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        user: {},
        isFetching: false,
        error: false,
    },
    reducers: {
        userDetailsStart: (state) => {
            state.isFetching = true;
        },
        userDetailsSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        },
        useDetailsfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        userDetailsReset: (state) => {
            state.user = {};
        }
    },
});

export const { userDetailsStart, userDetailsSuccess, useDetailsfailure, userDetailsReset } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isFetching: false,
        error: false,
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    },
});

export const { registerStart, registerfailure } = registerSlice.actions;
export default registerSlice.reducer;
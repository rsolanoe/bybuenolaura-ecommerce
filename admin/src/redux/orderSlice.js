import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET
        getOrdersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getOrdersSuccess: (state, action) => {
            state.isFetching = false;
            state.orders = action.payload;
            state.error = false;
        },
        getOrdersfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { getOrdersStart, getOrdersSuccess, getOrdersfailure, } = orderSlice.actions;
export default orderSlice.reducer;

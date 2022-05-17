import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
    name: "product",
    initialState: {
        product: {},
        isFetching: false,
        error: false,
    },
    reducers: {
        productDetailStart: (state) => {
            state.isFetching = true;
        },
        productDetailSuccess: (state, action) => {
            state.isFetching = false;
            state.product = action.payload;
            state.error = false;
        },
        productDetailfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { productDetailStart, productDetailSuccess, productDetailfailure } = singleProductSlice.actions;
export default singleProductSlice.reducer;
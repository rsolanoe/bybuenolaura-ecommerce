import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
            state.error = false;
        },
        getProductfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // DELTE
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex(
                    (product) => product._id === action.payload
                ),
                1
            );
            state.error = false;
        },
        deleteProductfailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getProductStart,
    getProductSuccess,
    getProductfailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductfailure,
} = userSlice.actions;
export default userSlice.reducer;

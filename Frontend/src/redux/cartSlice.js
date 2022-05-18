import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = state.products.findIndex(
                (item) => item._id === action.payload._id
            );
            if (itemIndex >= 0)
                state.products[itemIndex].quantity += action.payload.quantity;
            else state.products.push(action.payload);
            state.quantity += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            const nextCartItems = state.products.filter(
                (item) => item._id !== action.payload._id
            );
            state.products = nextCartItems;
            state.quantity -= action.payload.quantity;
            state.total -= action.payload.quantity * action.payload.price;
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.products.findIndex(
                (item) => item._id === action.payload._id
            );
            if (state.products[itemIndex].quantity > 1) {
                state.products[itemIndex].quantity -= 1;
                state.quantity -= 1;
                state.total -= action.payload.price;
            }
        },
        increaseCart: (state, action) => {
            const itemIndex = state.products.findIndex(
                (item) => item._id === action.payload._id
            );
            state.products[itemIndex].quantity += 1;
            state.quantity += 1;
            state.total += action.payload.price;
        },
    },
});

export const { addProduct, removeProduct, decreaseCart, increaseCart } =
    cartSlice.actions;
export default cartSlice.reducer;

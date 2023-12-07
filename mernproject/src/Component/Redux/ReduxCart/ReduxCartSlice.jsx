import { createSlice } from "@reduxjs/toolkit";

export const ReduxCartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addProduct: () => {

        },
        removeProduct: () => {

        }
    }

});

export const { addProduct , removeProduct } = ReduxCartSlice.actions;
export default ReduxCartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addProduct : (state,action) =>{
                state.push(action.payload)
        },
        removeProduct : (state,action) =>{
                return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addProduct, removeProduct} = Cartslice.actions;
export default Cartslice.reducer;
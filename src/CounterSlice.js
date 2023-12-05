import { createSlice } from "@reduxjs/toolkit";




export const CounterSlice=createSlice({

    name:"counter",
    initialState:[],
    reducers:{
        addProduct(state,action){},
        removeProduct(state,action){},
        deleteProduct(state,action){}
    }
})

export const {addProduct,removeProduct,deleteProduct}=CounterSlice.actions;
export default CounterSlice.reducer;



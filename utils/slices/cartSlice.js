import { createSlice } from "@reduxjs/toolkit";


 const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state,action) => {
            state.items.push(action.payload)
        },
        removeItems: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            //RTk - either mutate the existing state or return new state
            state.items.length = 0
            //OR
            // return {items:[]};
        }
    }
 })

 export const {addItems,removeItems,clearCart} = cartSlice.actions

 export default cartSlice.reducer
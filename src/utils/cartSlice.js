import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state,action)=>{
            if(!state.items.some((item)=>item.id===action.payload.id)){
                state.items.push(action.payload)
            }
        },
        removeItem : (state,action) => {
            state.items = state.items.filter((item)=>item.id!==action.payload)
        },
        clearCart : (state)=>{
            state.items.length = []
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer
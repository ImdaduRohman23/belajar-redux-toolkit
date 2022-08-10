import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        title: '',
        price: ''
    },
    reducers: {
        update: (state, action) => {
            state.title = action.payload.title;
            state.price = action.payload.price;    
        }
    }
});

export const { update } = ProductSlice.actions;
export default ProductSlice.reducer;
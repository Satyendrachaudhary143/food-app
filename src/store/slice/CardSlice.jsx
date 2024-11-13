/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const CardSlice = createSlice({
    name: "card",
    initialState: {
        card: [],

    },
    reducers: {
        addToCart: (state, action) => {
            const exist = state.card.find((food) => food.id === action.payload.id);
            if (exist) {
                state.card = state.card.map((food) => food.id === action.payload.id ? { ...food, qty: food.qty + 1 } : food)
            }
            else {
                state.card.push(action.payload);
            }



        },

        removeFromCard: (state, action) => {
            state.card = state.card.filter((item) => item.id !== action.payload.id)



        },

        increment: (state, action) => {
            state.card = state.card.map((food) => food.id === action.payload.id ? { ...food, qty: food.qty + 1 } : food)
        },
        decrement: (state, action) => {
            state.card = state.card.map((food) => food.id === action.payload.id && food.qty > 1 ? { ...food, qty: food.qty - 1 } : food)
        },
    }
})
export const { addToCart, removeFromCard, increment, decrement } = CardSlice.actions;
export default CardSlice.reducer;
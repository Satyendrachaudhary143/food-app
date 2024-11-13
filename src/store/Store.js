import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slice/CardSlice"
import categorySlice from "./slice/categorySlice";
import searchSlice from "./slice/search"

const Store = configureStore({
    reducer: {
        cart: CardSlice,
        category: categorySlice,
        search: searchSlice,
    },
})

export default Store;
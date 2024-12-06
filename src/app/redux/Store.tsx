import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import productReducer from "./productSlice";

export const store = configureStore({
    // reducer: reducer
    reducer:{
        listData:listReducer,
        productData:productReducer
    }
})
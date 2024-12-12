import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import productReducer from "./productSlice";
import usersReducer from "./usersSclice";

export const store = configureStore({
    // reducer: reducer
    reducer:{
        listData:listReducer,
        productData:productReducer,
        usersListData:usersReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./listSlice";

export const store = configureStore({
    // reducer: reducer
    reducer
})
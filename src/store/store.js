import { configureStore } from "@reduxjs/toolkit";
import { darkSlice } from "./darkTheme/darkSlice";


export const store = configureStore({
    reducer:darkSlice.reducer
})
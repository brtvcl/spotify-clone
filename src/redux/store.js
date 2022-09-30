import { configureStore } from "@reduxjs/toolkit";
import bgColorReducer from "./slices/colorSlice";

//Reducer for bg color
export const store = configureStore({
    reducer: {
        bgColor: bgColorReducer
    }
});